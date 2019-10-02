const express=require("express");
const http=require("http");
const bodyParser=require("body-parser");
const path=require("path");
const publicPath=path.join(__dirname,"..","/public")
const app=express();
const {sendEmail}=require("../utility/mailer");
process.env.NODE_TLS_REJECT_UNAUTHORIZED='0';

let server=http.createServer(app);
app.use(express.static(publicPath));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.get("/index",(req,res)=>{
    console.log("request is served");
    return res.redirect("/index.html");
})
app.post("/sendMessage",(req,res)=>{
    var name=req.body.name;
    var email=req.body.email;
    var subject=req.body.subject;
    var message=req.body.message;
    console.log(name);
    console.log(email);
    console.log(subject);
    console.log(message);
   sendEmail(req,res,function(response){
    res.send(response);
   }); 
   //console.log(response);
   //res.send(response);

});

app.get("/home.html",(req,res)=>{
    return res.redirect("/homeq.html")
})

app.post("/authenticate",(req,res)=>{
    var email=req.body.email;
    console.log(email);
    var password=req.body.password;
    console.log(password);
    if(email==="dawood.multhan@gmail.com" && password=="123456"){
            return res.redirect("/userhome");            
    }else{
        return res.redirect("/index")
    }
});
server.listen(3000,()=>{
    console.log(`Application is started on port `);
})