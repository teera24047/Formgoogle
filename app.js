const SHEET_ID = "1p6cKOTAcB_lFz9drXSIxyL34wJK1Icc6ic7vCCj7qFA"; // Replace with your Google Sheet ID
// This ID can be found in the URL of your Google Sheet
const SHEET_NAME = "Form Responses";
const EMAIL_NOTIFY = "teera.bosspharmacare@gmail.com";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const now = new Date();
    const ss = SpreadsheetApp.openById(SHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Email", "Morning", "Afternoon", "Evening"]);
    }
    sheet.appendRow([
      now,
      data.name || "",
      data.email || "",
      data.song_morning || "",
      data.song_afternoon || "",
      data.song_evening || ""
    ]);
    MailApp.sendEmail({
      to: EMAIL_NOTIFY,
      subject: "Song Request",
      htmlBody: `<b>ชื่อ:</b> ${data.name}<br>
                 <b>อีเมล:</b> ${data.email}<br>
                 <b>เช้า:</b> ${data.song_morning}<br>
                 <b>กลางวัน:</b> ${data.song_afternoon}<br>
                 <b>เย็น:</b> ${data.song_evening}`,
      noReply: true
    });
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: err.message })).setMimeType(ContentService.MimeType.JSON);
  }
}
