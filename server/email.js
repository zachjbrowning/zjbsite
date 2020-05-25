const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'homedeliveryhelp@gmail.com',
        pass: 'ihav3WAYtoomany'
    }
});




exports.notify = function (dict) {
    var mailOptions = {
        from: 'homedeliveryhelp@gmail.com',
        to: 'zachjbrowning@outlook.com',
        subject: 'Somebody used the contact form',
        text: 'Ayo Zach,\nJust letting you know somebody contacted you!\n\nThese are their deets:\n\nName: ' + dict['name'] + '\nEmail: ' + dict['email'] + '\nPhone: ' + dict['phone'] + '\nMessage: ' + dict['message'] + '\n\n  Anyways, thats about it!\n\nCheers\nZach'
    };
    transporter.sendMail(mailOptions, (error,info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('email sent: ' + info.response);
        }
    })
}