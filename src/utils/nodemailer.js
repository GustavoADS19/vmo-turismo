const config = require("../config.json");
const mailer = require("nodemailer");

const transporter = new mailer.createTransport({
    service: "gmail",
    host: 'smtp.gmail.com',
    auth: {
        user: config.nodemailer.user,
        pass: config.nodemailer.pass
    }
});

module.exports = transporter;