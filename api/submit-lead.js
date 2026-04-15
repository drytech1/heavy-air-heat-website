export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed."
    });
  }

  try {
    const { name, phone, email, service, message } = req.body || {};

    if (!name || !phone) {
      return res.status(422).json({
        success: false,
        message: "Name and phone are required."
      });
    }

    const airtableToken = process.env.AIRTABLE_ACCESS_TOKEN;
    const baseId = "apph1kLBnbdiQNLpX";
const tableName = "tbloPMkmxKPJ1rUlb";

    console.log({
      hasToken: !!airtableToken,
      hasBaseId: !!baseId,
      tableName,
      vercelEnv: process.env.VERCEL_ENV
    });

    if (!airtableToken || !baseId) {
      return res.status(500).json({
        success: false,
        message: "Missing Airtable environment variables."
      });
    }

    const airtableUrl = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`;

    console.log("Airtable URL:", airtableUrl);

    const payload = {
  fields: {
    Name: name || "",
    Phone: phone || "",
    Email: email || "",
    "Service Requested": service || "",
    Message: message || "",
    Source: "Heavy Air & Heat Landing Page",
    Status: "New Lead"
  }
};

    console.log("Sending Airtable payload:", JSON.stringify(payload, null, 2));

    const airtableResponse = await fetch(airtableUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${airtableToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const airtableData = await airtableResponse.json();

    console.log("Airtable response:", airtableData);

    if (!airtableResponse.ok) {
  console.error("Airtable rejected request:", JSON.stringify(airtableData, null, 2));

  return res.status(500).json({
    success: false,
    message: "Airtable rejected the request.",
    details: airtableData,
    airtableUrl,
    tableName
  });
}

    return res.status(200).json({
      success: true,
      message: "Lead submitted successfully."
    });
  } catch (error) {
    console.error("Server error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error.",
      error: error.message
    });
  }
}
