const friends = require('../data/friends');

module.exports = (app) => {

    // Grab all friends
    app.get('/api/friends', (req, res) => {
        res.status(200).json(friends);
    });

    // Add a friend
    
}