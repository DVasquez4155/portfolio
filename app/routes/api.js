const mail = require("../form/mail");
const moment = require('moment-timezone');
module.exports = function (app) {
    app.post("/api/contact", (req, res) => {
        mail({
            uuid : req.body.uuid,
            name : req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message,
            time: moment().tz('America/Los_Angeles').format('LLLL')
        })
        res.send(req.body)
    })
    app.post("/api", (req, res) => {
        console.log(Object.keys(process.env))
        console.log(process.env)
        console.log(req.body.uuid)
        console.log(process.env[req.body.uuid])
        res.send(req.body)
    })
};