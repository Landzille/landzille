import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone } = await request.json();

    if (!email || !email.length) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (!firstName || !lastName) {
      return NextResponse.json(
        { error: "First name and last name are required" },
        { status: 400 }
      );
    }

    if (!phone || !phone.length) {
      return NextResponse.json(
        { error: "Phone number is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.MAILCHIMP_API_KEY;
    const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;
    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

    if (!apiKey || !serverPrefix || !audienceId) {
      console.error("Missing Mailchimp configuration");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const subscriberHash = crypto
      .createHash("md5")
      .update(email.toLowerCase())
      .digest("hex");

    const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members/${subscriberHash}`;

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString(
          "base64"
        )}`,
      },
      body: JSON.stringify({
        email_address: email,
        status_if_new: "subscribed",
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
          PHONE: phone,
        },
        tags: ["Land Calculator"],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Mailchimp API error:", data);

      if (data.title === "Member Exists") {
        // Update merge fields for existing member
        await fetch(url, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString(
              "base64"
            )}`,
          },
          body: JSON.stringify({
            merge_fields: {
              FNAME: firstName,
              LNAME: lastName,
              PHONE: phone,
            },
          }),
        });

        // Update tags
        const tagsUrl = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members/${subscriberHash}/tags`;
        await fetch(tagsUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString(
              "base64"
            )}`,
          },
          body: JSON.stringify({
            tags: [{ name: "Land Calculator", status: "active" }],
          }),
        });

        return NextResponse.json(
          { message: "You're already on our list! We'll be in touch soon." },
          { status: 200 }
        );
      }

      if (data.title === "Forgotten Email Not Subscribed") {
        return NextResponse.json(
          {
            error:
              "This email was previously unsubscribed. Please use a different email or contact us at info@landzille.com to resubscribe.",
          },
          { status: 400 }
        );
      }

      if (data.title === "Invalid Resource") {
        return NextResponse.json(
          { error: "Invalid email address." },
          { status: 400 }
        );
      }

      return NextResponse.json(
        { error: "Failed to submit. Please try again." },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { message: "Success! Your results are ready." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
