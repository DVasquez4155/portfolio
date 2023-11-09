const mail = require("../form/mail");
module.exports = function (app) {
    app.post("/api/contact", (req, res) => {
        mail({
            uuid : req.body.uuid,
            name : req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message,
            res: res
        })
    })
};