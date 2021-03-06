/*
============================================
; Title:  Exercise 3.3 - Advanced Routing
; Author: James Brown
; Date:   3/6/2020
; Description: coding per requirements of exercise 3.3
;===========================================
*/


var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = express();

app.use(logger("short"));
app.set("views", path.resolve(__dirname,"views"));
app.set('view engine', 'ejs');
app.get('/', function(req,res){
    res.render('index',{
        message: "home page"
    });
});

app.get('/about', function(req,res){
    res.render('about',{
        message: 'about page'
    });
});

app.get('/contact', function(req,res){
    res.render('contact',{
        message: 'contact page'
    });
});

app.get('/products', function(req,res){
    res.render('products',{
        message: 'products page'
    });
});

http.createServer(app).listen(8080, function(){
    console.log('App started on port 8080');
});



