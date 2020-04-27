const nodemailer = require('nodemailer');
const Handlebars = require('handlebars');
const fs = require('fs');
module.exports = (form) => {
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
    const context = {message:form.message, time: form.time};
    const html = template(context);
    const recipient = process.env[form.uuid] || process.env.email;
    console.log(process.env[form.uuid])
    console.log(process.env)
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
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}