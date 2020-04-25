module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile('views/index.html', {root: process.cwd() })
    });
    app.get("/projects", function (req, res) {
        res.sendFile('views/projects.html', {root: process.cwd() })
    });
    app.get("/cv", function (req, res) {
        res.sendFile('views/cv.html', {root: process.cwd() })
    });
    app.get("/contact", function (req, res) {
        res.sendFile('views/contact.html', {root: process.cwd() })
    });
}