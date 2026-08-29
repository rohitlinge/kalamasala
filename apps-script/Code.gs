/**
 * Lata Special — paid orders → this Google Sheet
 *
 * Setup
 * 1. Google Drive → New → Google Sheets. Name it "Kala Massala orders".
 * 2. Rename the first tab to "Orders" (or leave Sheet1; the script uses the first tab).
 * 3. Extensions → Apps Script. Delete any default code. Paste this whole file. Save.
 * 4. Deploy → New deployment → Type: Web app.
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    Then Deploy. Copy the Web app URL (ends with /exec).
 * 5. Put that URL in .env.local and Cloudflare as GOOGLE_SHEETS_WEBHOOK_URL
 *    Optional: Project Settings → Script properties → WEBHOOK_SECRET = a random string,
 *    and the same value as GOOGLE_SHEETS_WEBHOOK_SECRET on the website.
 * 6. Redeploy the web app after any script change (Manage deployments → Edit → New version).
 */

const HEADERS = [
  "Paid at (IST)",
  "Order ref",
  "Payment ID",
  "Razorpay order",
  "Name",
  "Phone",
  "Email",
  "Address",
  "Pincode",
  "City",
  "State",
  "Pack",
  "Masala ₹",
  "Transport ₹",
  "Total ₹",
  "Zone",
  "Distance km",
  "Drive time",
];

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const expected = PropertiesService.getScriptProperties().getProperty("WEBHOOK_SECRET");
    if (expected && payload.secret !== expected) {
      return json_({ ok: false, error: "unauthorized" });
    }

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      payload.paidAt || "",
      payload.ref || "",
      payload.paymentId || "",
      payload.razorpayOrderId || "",
      payload.name || "",
      payload.phone || "",
      payload.email || "",
      payload.address || "",
      payload.pincode || "",
      payload.city || "",
      payload.state || "",
      payload.pack || "",
      payload.masala ?? "",
      payload.delivery ?? "",
      payload.total ?? "",
      payload.zone || "",
      payload.distanceKm ?? "",
      payload.duration || "",
    ]);

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function doGet() {
  return json_({ ok: true, service: "kala-massala-orders" });
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
