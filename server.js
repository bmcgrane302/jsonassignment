var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
app.use(bodyParser.json({ extended: true }));

app.post('/verify', function(req,res){
  let state = req.body.state;
   if(state === 'AZ'){
     res.sendStatus(200);
   }else{
     res.sendStatus(400);
   }
  res.json(state);
});

app.post('/calculate', function(req,res){
  let x = req.body.numOne;
  let y = req.body.numTwo;
  let operator = req.body.operation;
   function cal() {
    if(operator === "add"){
      return x+y;
    } else if(operator === "subtract"){
      return x-y;
    } else if(operator === "divide"){
      return x/y;
    } else if(operator === "multiply"){
      return x*y;
    }
  }
  res.json(cal());
});

app.post('/students', function(req,res){
  let newObj = {
    name: req.body.teacher,
    class: req.body.class,
    students : req.body.students.filter((item)=>{
      return item.class === req.body.class;
    })
  };


  res.json(newObj);
})



app.listen(port, function() {
  console.log('Listening on port', port);
});
