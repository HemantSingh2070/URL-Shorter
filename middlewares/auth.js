const { getUser } = require('../services/auth'); 
async function handelLoginUid(req, res, next) {
    const userUid = req.cookies.uid;
    try {
        const user = await getUser(userUid); 
        req.user = user;
        next();
    } catch (error) {
        // Handle error appropriately
        console.error('Error in handelLoginUid:', error);
        next(error); 
    }
}

async function checkAuth(req, res, next) {
    const userUid = req.cookies.uid;
    try {
        const user = await getUser(userUid); 
        req.user = user;
        next();
    } catch (error) {
        console.error('Error in checkAuth:', error);
        next(error); 
    }
}

module.exports = { handelLoginUid, checkAuth };
