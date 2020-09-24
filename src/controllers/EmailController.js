const templates = require("../utils/nodemailer-templates.js");
const transporter = require("../utils/nodemailer");

module.exports = class EmailController{
    send(to, subject, template, obj) {
        transporter.sendMail({
            from: '"VMO Turismo" <naoresponder@vmoturismo.com.br>', // sender address
            to: to, // list of receivers
            subject: subject, // Subject line
            html: templates[template](obj), // html body
        });
    }
}