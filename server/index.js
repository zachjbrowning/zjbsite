var notify = require('./email');
var save = require('./savecontact');

var axios = require('axios');



const express = require('express');
const path = require('path'); 
const bodyParser = require('body-parser');


const app = express();
const port = 3000;
const DIST_DIR = path.join(__dirname, '../dist');
const APP_ENTRY = path.join(DIST_DIR, 'index.html');
const OLD_SITE = path.join(DIST_DIR, 'public/ancient/old.html')

//Setting up static file access
app.use(express.static(DIST_DIR));


//old site
app.get('/oldsite', (req,res) => {
    res.sendFile(OLD_SITE);
})

//Saving form and sending result
app.use(bodyParser.urlencoded({extended:true}));
app.post('/meme', (req, res) => {
    axios({
        method : 'POST',
        url : "https://api.imgflip.com/caption_image",
        headers : {
            "content-type": "application/json",
            "Access-Control-Allow-Origin" : "*",
            
        },
        params : {
            template_id : 181913649,
            username : "mbappek",
            password : "password",
            text0 : req.body.text0,
            text1 : req.body.text1,
        }
    }).
    then(it => {
        res.send(it.data);
    })
    .catch(it => res.send(it));
})
app.post('/*', (req,res) => {
    res.send({'result' : 'Thanks for reaching out!'});
    if ("name" in req.body && "email" in req.body && "phone" in req.body && "message" in req.body) {
        toSave = {
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            message : req.body.message,
        }
        save.save(toSave);
    }
    //notify.notify(req.body);
});




//Routing, default sends all urls 
app.get('/*', (req,res) => {
    res.sendFile(APP_ENTRY);
});

//Listening for requests
app.listen(port, () => {
    console.log('Listening on port ' + port);
})