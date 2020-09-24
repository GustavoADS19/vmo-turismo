const config = require("../config.json");
const mailer = require("nodemailer");

const transporter = new mailer.createTransport({
    host: "smtp.hostinger.com.br",
    port: 587,
    auth: {
        user: config.nodemailer.user,
        pass: config.nodemailer.pass
    }
});

module.exports = transporter;