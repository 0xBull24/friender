const friends = require('../data/friends.js');

module.exports = (app) => {

    // Grab all friends
    app.get('/api/friends', (req, res) => {
        res.status(200).json(friends);
    });

    // Add a friend
    app.post('/api/friends', (req, res) => {
        // Create req variables shorthand
        const newFriend = req.body;
        let friendMatch = {
            name: '',
            photo: '',
            friendScore: 0,
        };

        friends.forEach(friend => {
            let scoreDiff = 0;
            newFriend.results.forEach((element, index) => {
                scoreDiff += Math.abs(parseInt(friend.results[index]) - parseInt(newFriend.results[index]));
            });

            // Check for no friends and set the matched friend as their-self or the only starter friend 
            // else look for the next best match
            if (friendMatch.friendScore == 0) {
                friendMatch.friendScore = scoreDiff;
                friendMatch.name = friend.name;
                friendMatch.photo = friend.photo;
            } else if ( scoreDiff < friendMatch.friendScore) {
                friendMatch.friendScore = scoreDiff;
                friendMatch.name = friend.name;
                friendMatch.photo = friend.photo;
            }
        });

        // Push req body into array
        friends.push(newFriend);
        res.status(201).json(friendMatch);
    });
}