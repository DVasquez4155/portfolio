module.exports = function (app) {
    //Pranking Link
    app.get("/video/:video", (req,res) => {
        res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    })
    app.get("/", function (req, res) {
        res.sendFile('views/index.html', {
            root: process.cwd()
        })
    });
    app.get("/projects", function (req, res) {
        res.sendFile('views/projects.html', {
            root: process.cwd()
        })
    });
    app.get("/cv", function (req, res) {
        res.sendFile('views/cv.html', {
            root: process.cwd()
        })
    });
    app.get("/about", function (req, res) {
        res.sendFile('views/cv.html', {
            root: process.cwd()
        })
    });
    app.get("/contact", function (req, res) {
        res.sendFile('views/contact.html', {
            root: process.cwd()
        })
    });
    app.use(function (req, res, next) {
        res.status(404);
        // respond with html page
        if (req.accepts('html')) {
            res.sendFile('views/404.html', {
                root: process.cwd()
            })
            return;
        }
        // respond with json
        if (req.accepts('json')) {
            res.send({
                error: 'Not found'
            });
            return;
        }
        // default to plain-text. send()
        res.type('txt').send('Not found');
    })
}