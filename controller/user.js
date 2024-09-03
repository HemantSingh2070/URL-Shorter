const { User } = require('../models/user');
const {URL} = require('../models/url');

async function handelUserSignUp(req, res) {
    const { name, email, password } = req.body; 
    try {
        await User.create({ name, email, password });
        return res.status(201).render("login"); 
    } catch (error) {
        console.error('Error in sign up:', error);
        return res.status(500).send('Failed to sign up');
    }
}

async function handelUserLogin(req, res) {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });
        const createdby = user._id; 
        const urls = await URL.find({createdby});
        req.body.user = user;
        return res.render('home',{
            user  :user,
            urls :urls,
        });
    } catch (error) {
        console.error('Error in login:', error);
        return res.status(500).send('Failed to login');
    }
}

module.exports = { handelUserLogin, handelUserSignUp };
