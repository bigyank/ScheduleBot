const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('../client_secret.json');

const returnRows = async () => {
  const doc = new GoogleSpreadsheet(
    '1j0g6pypfi32gksmdCen50T9wBwKu6P0CA9Brlz3GsqA',
  );
  await doc.useServiceAccountAuth({
    client_email: creds.client_email,
    private_key: creds.private_key,
  });
  await doc.loadInfo(); // loads document properties and worksheets
  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  const rows = await sheet.getRows();
  return rows;
};

module.exports = { returnRows };
