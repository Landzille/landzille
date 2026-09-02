import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone } = await request.json();

    if (!firstName || !lastName) {
      return NextResponse.json(
        { error: "First name and last name are required" },
        { status: 400 }
      );
    }

    if (!email || !email.length) {
      return NextResponse.json(
        { error: "Email is required" },
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
    const authHeader = `Basic ${Buffer.from(`anystring:${apiKey}`).toString(
      "base64"
    )}`;

    const mailchimpResponse = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader,
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
        tags: ["Join The Community"],
      }),
    });

    const mailchimpData = await mailchimpResponse.json();

    if (!mailchimpResponse.ok) {
      if (mailchimpData.title === "Member Exists") {
        await fetch(url, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authHeader,
          },
          body: JSON.stringify({
            merge_fields: { FNAME: firstName, LNAME: lastName, PHONE: phone },
          }),
        });

        await fetch(`${url}/tags`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: authHeader,
          },
          body: JSON.stringify({
            tags: [{ name: "Join The Community", status: "active" }],
          }),
        });

        return NextResponse.json(
          { message: "You're in. We'll be in touch soon." },
          { status: 200 }
        );
      }

      console.error("Mailchimp API error:", mailchimpData);

      if (mailchimpData.title === "Invalid Resource") {
        return NextResponse.json(
          { error: "Invalid email address." },
          { status: 400 }
        );
      }

      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: mailchimpResponse.status }
      );
    }

    return NextResponse.json(
      { message: "You're in. We'll be in touch soon." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Community signup error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
