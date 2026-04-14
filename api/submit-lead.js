export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed." });
  }

  console.log({
  hasToken: !!process.env.AIRTABLE_ACCESS_TOKEN,
  hasBaseId: !!process.env.AIRTABLE_BASE_ID,
  tableName: process.env.AIRTABLE_TABLE_NAME
});

  try {
    const { name, phone, email, service, message } = req.body || {};

    if (!name || !phone) {
      return res.status(422).json({
        success: false,
        message: "Name and phone are required."
      });
    }

    const airtableToken = process.env.AIRTABLE_ACCESS_TOKEN;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableName = process.env.AIRTABLE_TABLE_NAME || "Leads";

    if (!airtableToken || !baseId) {
      return res.status(500).json({
        success: false,
        message: "Missing Airtable environment variables."
      });
    }

    const airtableUrl = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`;

    const airtableResponse = await fetch(airtableUrl, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${airtableToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fields: {
          Name: name,
          Phone: phone,
          Email: email || "",
          "Service Requested": service || "",
          Message: message || "",
          Source: "Heavy Air & Heat Landing Page",
          Status: "New Lead",
          "Created At": new Date().toISOString()
        }
      })
    });

    const airtableData = await airtableResponse.json();

    if (!airtableResponse.ok) {
      return res.status(500).json({
        success: false,
        message: "Airtable rejected the request.",
        details: airtableData
      });
    }

    return res.status(200).json({
      success: true,
      message: "Lead submitted successfully."
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error.",
      error: error.message
    });
  }
}
