app.get(process.env.route, function(req, res) {
    res.send(process.env.cert)
})