import crypto from "crypto";

const RESOURCE_TAG = "Resource Download";

export type ResourceKind = "resource" | "magazine" | "team-research";

type AddResourceContactInput = {
  name: string;
  email: string;
  resourceId: string;
  resourceType: ResourceKind;
};

const CUSTOM_MERGE_FIELDS = [
  { tag: "RESTYPE", name: "Resource Type" },
  { tag: "LASTRES", name: "Last Resource" },
] as const;

/**
 * Mirrors the self-provisioning approach used on the Skillweed site: check
 * what merge fields exist on the audience and create whatever's missing, so
 * this never depends on someone configuring the audience by hand.
 */
async function ensureMergeFields(
  baseUrl: string,
  listId: string,
  headers: Record<string, string>
): Promise<Set<string>> {
  const confirmed = new Set<string>();

  try {
    const listRes = await fetch(
      `${baseUrl}/lists/${listId}/merge-fields?count=100`,
      { headers }
    );
    if (listRes.ok) {
      const { merge_fields } = await listRes.json();
      for (const field of merge_fields ?? []) confirmed.add(field.tag);
    }
  } catch {
    // Best-effort — fall through and try creating everything below.
  }

  for (const field of CUSTOM_MERGE_FIELDS) {
    if (confirmed.has(field.tag)) continue;
    try {
      const createRes = await fetch(`${baseUrl}/lists/${listId}/merge-fields`, {
        method: "POST",
        headers,
        body: JSON.stringify({ tag: field.tag, name: field.name, type: "text" }),
      });
      if (createRes.ok) confirmed.add(field.tag);
      else console.error(`Failed to create merge field ${field.tag}:`, await createRes.json());
    } catch (err) {
      console.error(`Failed to create merge field ${field.tag}:`, err);
    }
  }

  return confirmed;
}

export async function addOrUpdateResourceContact(input: AddResourceContactInput) {
  const API_KEY = process.env.MAILCHIMP_API_KEY!;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID!;
  const SERVER = process.env.MAILCHIMP_SERVER_PREFIX!;

  const baseUrl = `https://${SERVER}.api.mailchimp.com/3.0`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString("base64")}`,
  };

  const subscriberHash = crypto
    .createHash("md5")
    .update(input.email.toLowerCase())
    .digest("hex");

  const confirmedFields = await ensureMergeFields(baseUrl, AUDIENCE_ID, headers);

  const nameParts = input.name.trim().split(" ");
  const mergeFields: Record<string, string> = {
    FNAME: nameParts[0] ?? input.name,
    LNAME: nameParts.slice(1).join(" ") ?? "",
  };
  if (confirmedFields.has("RESTYPE")) mergeFields.RESTYPE = input.resourceType;
  if (confirmedFields.has("LASTRES")) mergeFields.LASTRES = input.resourceId;

  const memberRes = await fetch(
    `${baseUrl}/lists/${AUDIENCE_ID}/members/${subscriberHash}`,
    {
      method: "PUT",
      headers,
      body: JSON.stringify({
        email_address: input.email,
        status_if_new: "subscribed",
        merge_fields: mergeFields,
      }),
    }
  );

  if (!memberRes.ok) {
    const details = await memberRes.text();
    console.error("Mailchimp contact request failed", memberRes.status, details);
    throw new Error("Unable to save contact");
  }

  const tagRes = await fetch(
    `${baseUrl}/lists/${AUDIENCE_ID}/members/${subscriberHash}/tags`,
    {
      method: "POST",
      headers,
      body: JSON.stringify({ tags: [{ name: RESOURCE_TAG, status: "active" }] }),
    }
  );

  if (!tagRes.ok) {
    console.error("Mailchimp tag failed:", await tagRes.json());
  }
}
