var admin = require('firebase-admin');

var serviceAccount = require('../admin-sdk.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = admin.app();
const { firestore } = app;

module.exports = {
  app,
  firestore,
};
