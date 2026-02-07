import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email } = await request.json();

    if (!email || !email.length) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (!firstName || !lastName) {
      return NextResponse.json(
        { error: "First name and last name are required" },
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

    // Create MD5 hash of lowercase email for subscriber hash
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
        },
        tags: ["E-Magazine"],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Mailchimp API error:", data);

      if (data.title === "Member Exists") {
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
            tags: [{ name: "E-Magazine", status: "active" }],
          }),
        });

        // Return success with download URL even for existing members
        return NextResponse.json(
          {
            message: "Magazine download started!",
            downloadUrl: "/downloads/magazines/i-am-land-11.pdf",
          },
          { status: 200 }
        );
      }

      // Handle permanently deleted emails
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
        { error: "Failed to process request. Please try again." },
        { status: response.status }
      );
    }

    return NextResponse.json(
      {
        message: "Successfully subscribed! Your download will begin shortly.",
        downloadUrl: "/downloads/magazines/i-am-land-11.pdf",
      },
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
