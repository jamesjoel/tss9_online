const express=require('express');

var app=express();

app.use(express.static(__dirname+"/assets"));

var routes=require('./config/routes');

var db=require('./config/database');

var bodyParser=require('body-parser');

var upload= require('express-fileupload');

app.use(upload());

app.use(bodyParser.urlencoded({extended:true}));

var cors=require('cors');

app.use(cors());

app.use(bodyParser.json());

app.use(routes);

app.listen(3000,()=>{
	console.log('server is running');
})