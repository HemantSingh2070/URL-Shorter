const jwt = require('jsonwebtoken');
const secret = 'Undead@123@mani';

function setUser(user) {
    return jwt.sign({ _id: user._id, email: user.email }, secret);
}

function getUser(token) {
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return null; // Handle token verification failure gracefully
    }
}

module.exports = { setUser, getUser };
