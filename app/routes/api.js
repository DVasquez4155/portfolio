const mail = require("../form/mail");
const moment = require('moment');
module.exports = function (app) {
    app.post("/api/contact", (req, res) => {
        console.log(req.body)
        mail({
            name : req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message,
            time: moment().format('LLLL')
        })
        res.send(req.body)
    })
};