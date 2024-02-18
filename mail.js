require('dotenv').config();

const nodemailer = require('nodemailer');
// const mailGun = require('nodemailer-mailgun-transport');

// const auth = {
//     auth:{
//         api_key: 'AIzaSyCgR3IpDGsgE1a8pwgL83Wn6qMQwgyLam0',
//         domain:''
//     }
// };

// const transporter = nodemailer.createTransport(mailGun(auth));

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
            user: process.env.USER,
            pass:process.env.PASSWORD
        }
});

const mailOptions = {
    from:'yashv21.mehta@gmail.com',
    to:'yashvi21gandhi@gmail.com',
    subject:'Test Mail using angular',
    text:'I am testing this mail'
}

transporter.sendMail(mailOptions, function(err, data){
    if(err){
        console.log('Error Occured', err);
    }
    else{
        console.log('Mail Sent');
    }
});