//A =require("index");
//B = require("index2");
var fs = require('fs');

// file is included here:
eval(fs.readFileSync('index.js')+'')
eval(fs.readFileSync('index6.js')+'')

   min = 8; //var added for min char length
   max = 12; //var added for max char length
    phone = '0711111222';
charset = "abcde";//.split("");//"abcdefghijklmnopqrstuvwxyzAEIOU0123456789!@#$%^&*()-_+=~`[]{}|:;<>,.?/BCDFGHJKLMNPQRSTVWXYZ"

	//d3 =require("d3-queue");
	//var q = d3.queue();
processPassword = function (pass) {
	
	crack(pass,function(){});
}	


start();
