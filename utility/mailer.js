const nodemailer=require("nodemailer");

let sendEmail=(req,res,callback)=>{
     var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'dawood.multhan@gmail.com',
        pass: 'Fizza.25'
      }
    });
    
    var mailOptions = {
      from: 'TaheriSoftware@noreply.com',
      to: req.body.email,
      subject: req.body.subject,
      text: req.body.message
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        callback(error);
        return error;
              } else {
        console.log('Email sent: ' + info.response);
        callback("OK");
        return "OK";
      }
    })
}
module.exports={sendEmail};
