var express = require('express')
var app = express()

permittedLinker = ['localhost', '127.0.0.1'];  // who can link here?

app.use(function(req, res, next) {
  var i=0, notFound=1, referer=req.get('Referer');

  if ((req.path==='/') || (req.path==='')) next(); // pass calls to '/' always

  if (referer){
      while ((i<permittedLinker.length) && notFound){
      notFound= (referer.indexOf(permittedLinker[i])===-1);
      i++;
      }
  }

  if (notFound) { 
     res.status(403).send('Protected area. Please enter website via www.mysite.com');
  } else {
    next(); // access is permitted, go to the next step in the ordinary routing
  }
});

app.get('/', function(req,res){
    res.send('<p>Hello.  You are at the main page. </p><a href="page2">page 2</a>');
});

app.get('/page2', function(req,res){
    res.send('<p>You are at page 2</p>');
});

app.listen(3000);  // test at http://localhost:3000