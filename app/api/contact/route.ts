import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, message } = await request.json();
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
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

    const mailchimpUrl = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members/${subscriberHash}`;

    // Add to Mailchimp
    const mailchimpResponse = await fetch(mailchimpUrl, {
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
        tags: ["Contact Form"],
      }),
    });

    const mailchimpData = await mailchimpResponse.json();

    // Handle existing member - update tags
    if (mailchimpData.title === "Member Exists") {
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
          tags: [{ name: "Contact Form", status: "active" }],
        }),
      });
    }

    // Send email using Nodemailer
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      const mailOptions = {
        from: `"Landzille Contact Form" <${process.env.EMAIL_USER}>`,
        to: "info@landzille.com",
        replyTo: email,
        subject: `New Contact: ${firstName} ${lastName}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { 
                  font-family: Arial, sans-serif; 
                  line-height: 1.6; 
                  color: #333; 
                  margin: 0;
                  padding: 0;
                }
                .container { 
                  max-width: 600px; 
                  margin: 0 auto; 
                  padding: 20px; 
                }
                .header { 
                  background: #2F6A50;
                  color: white; 
                  padding: 30px 20px; 
                  border-radius: 5px 5px 0 0; 
                  text-align: center;
                }
                .header h2 {
                  margin: 0;
                  font-size: 24px;
                }
                .content { 
                  background: #ffffff; 
                  padding: 30px 20px; 
                  border: 1px solid #e0e0e0;
                  border-top: none;
                }
                .field { 
                  margin-bottom: 20px;
                  padding-bottom: 15px;
                  border-bottom: 1px solid #f0f0f0;
                }
                .field:last-child {
                  border-bottom: none;
                }
                .label { 
                  font-weight: bold; 
                  color: #1a4d2e;
                  display: block;
                  margin-bottom: 8px;
                  font-size: 14px;
                  text-transform: uppercase;
                  letter-spacing: 0.5px;
                }
                .value {
                  color: #333;
                  font-size: 16px;
                }
                .message-box {
                  background: #f9f9f9;
                  padding: 15px;
                  border-radius: 5px;
                  border-left: 4px solid #4caf50;
                }
                .footer { 
                  text-align: center; 
                  margin-top: 20px; 
                  padding: 20px;
                  color: #666; 
                  font-size: 12px;
                  background: #f5f5f5;
                  border-radius: 0 0 5px 5px;
                }
                .footer p {
                  margin: 5px 0;
                }
                .reply-button {
                  display: inline-block;
                  margin-top: 20px;
                  padding: 12px 30px;
                  background: #4caf50;
                  color: white;
                  text-decoration: none;
                  border-radius: 5px;
                  font-weight: bold;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2>📧 New Contact Form Submission</h2>
                </div>
                <div class="content">
                  <div class="field">
                    <span class="label">👤 Name</span>
                    <span class="value">${firstName} ${lastName}</span>
                  </div>
                  <div class="field">
                    <span class="label">✉️ Email</span>
                    <span class="value"><a href="mailto:${email}">${email}</a></span>
                  </div>
                  <div class="field">
                    <span class="label">💬 Message</span>
                    <div class="message-box">
                      <p class="value">${message.replace(/\n/g, "<br>")}</p>
                    </div>
                  </div>
                  <div style="text-align: center;">
                    <a href="mailto:${email}" class="reply-button">Reply to ${firstName}</a>
                  </div>
                </div>
                <div class="footer">
                  <p><strong>Submitted via Landzille Contact Form</strong></p>
                  <p>📅 ${new Date().toLocaleString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}</p>
                  <p style="margin-top: 15px; color: #999;">
                    This contact has been automatically added to your Mailchimp audience with the "Contact Form" tag.
                  </p>
                </div>
              </div>
            </body>
          </html>
        `,
        text: `
New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}

Message:
${message}

Submitted: ${new Date().toLocaleString()}
        `,
      };

      // Send email
      await transporter.sendMail(mailOptions);

      console.log("Email sent successfully to info@landzille.com");
    } catch (emailError) {
      console.error("Email sending error:", emailError);
      // Continue even if email fails - user is still in Mailchimp
    }

    return NextResponse.json(
      { message: "Message sent successfully! We'll be in touch soon." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
