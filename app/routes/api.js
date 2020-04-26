const mail = require("../form/mail");
const moment = require('moment-timezone');
module.exports = function (app) {
    app.post("/api/contact", (req, res) => {
        console.log(req.body)
        mail({
            name : req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message,
            time: moment().tz('America/Los_Angeles').format('LLLL')
        })
        res.send(req.body)
    })
};