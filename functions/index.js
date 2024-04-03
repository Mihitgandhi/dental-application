/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

require("dotenv").config();

const {SENDER_EMAIL, SENDER_PASSWORD} =process.env;

exports.sendEmailNoti=functions.firestore.document("submissions/{docId}")
    .onClick((snap, ctx)=>{
    //   const data=snap.data();

      const authData = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: SENDER_EMAIL,
          pass: SENDER_PASSWORD,
        },
      });

      authData.sendMail({
        from: "yashv21.mehta@gmail.com",
        to: "yashv21.mehta@gmail.com",
        subject: "Test Mail",
        text: "Test Mail",
        html: "Testing",
      }).then((res)=>
        console.log("Successfully sent mail")).catch((err)=>console.log(err));
    });
