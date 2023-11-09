const nodemailer = require('nodemailer');
const Handlebars = require('handlebars');
const moment = require('moment-timezone');

const fs = require('fs');
module.exports = (form) => {
    const currentTime = moment().tz('America/Los_Angeles').format('LLLL')
    const transporter = nodemailer.createTransport({
        host: process.env.email_host,
        port: 587,
        auth: {
            user: process.env.email_user,
            pass: process.env.email_pass
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    const source = fs.readFileSync(`${process.cwd()}/views/mail.html`, 'utf8');
    const template = Handlebars.compile(source);
    const context = {message:form.message, time: currentTime};
    const html = template(context);
    const recipient = process.env[form.uuid] || process.env.email;
    console.log(recipient)
    const mailOptions = {
        from: `"${form.name}" <${form.email}>`,
        to: recipient,
        subject: form.subject,
        text: form.message,
        html: html
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            form.res.status(500).send(
                {
                    "timestamp":currentTime,
                    "status":500,
                    "error":"Internal Server Error",
                    "message":"No message available",
                    "path":"/api/contact"
                }
            )
        } else {
            console.log('Email sent: ' + info.response);
            form.res.send(
                {
                    "timestamp":currentTime,
                    "status":200,
                    "message":"Success",
                    "path":"/api/contact"
                }
            )
        }
    });
}