const {URL} = require('../models/url');
const { User } = require('../models/user');

const shortID = require('short-id');

async function urlShortner(req,res){
const {originalURL,createdby} = req.body;
const shortURL = shortID.generate();
try{
await URL.create({
    originalURL,
    shortURL,
    createdby,
})

        const user = await User.findOne({_id: createdby}); 
        const urls = await URL.find({createdby});
        req.body.user = user;
        return res.render('home',{
            user  :user,
            urls :urls,
        });

}
catch{
    console.log("unable to create");
}
}

async function urlsearch(req, res) {
    const { shortURL } = req.params; // Use req.params to get URL parameter
    try {
        // Find the URL entry by shortURL
        const foundURL = await URL.findOneAndUpdate({ shortURL },
            {$push : {
                visits : {
                    timeStamps : Date.now(),
                }
            }
            }
        );

        if (foundURL) {
            // If URL found, redirect to the originalURL
            return res.redirect(foundURL.originalURL);
        } else {
            // Handle case where shortURL is not found
            return res.status(404).send("URL not found");
        }
    } catch (error) {
        console.error("Error searching for URL:", error);
        // Handle error appropriately, maybe redirect or show an error page
        return res.status(500).send("Error searching for URL");
    }
}
module.exports={urlShortner,urlsearch};