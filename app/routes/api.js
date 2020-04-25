module.exports = function (app) {
    app.post("/contact", function (req, res) {
        res.send(req.body)
    });
};