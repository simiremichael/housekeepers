import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
  host: 'gmail',
 port: 465,
  secure: true, // true for 465, false for other ports
//  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER, // generated ethereal user
    pass: process.env.EMAIL_PASSWORD, // generated ethereal password
  },

});

export default async function sendEmail(subject:any, message:any, send_to:any, send_from:any ) {
  
  const info = await transporter.sendMail({
    from: send_from, // sender address
    to: send_to, // list of receivers
    subject: subject, // Subject line
    html: message, // html body
  });

  console.log("Email sent: ", + info.response);
}
