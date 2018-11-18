const path = require("path");

module.exports = (app) => {
    // Route for the survey page
    app.get(`/survey`, (req, res) => {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    // Route for the main / home page
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
};