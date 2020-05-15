module.exports = function (app) {
    //Pranking Link
    app.get("/video/:video", (req,res) => {
        res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    })
    // app.get("/", function (req, res) {
    //     res.sendFile('views/index.html', {
    //         // root: process.cwd()
    //     })
    // });
}