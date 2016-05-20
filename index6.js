	var min = 5; //var added for min char length
	var max = 8; //var added for max char length
	var charset = "abcdefghijklmnop";//.split("");//"abcdefghijklmnopqrstuvwxyzAEIOU0123456789!@#$%^&*()-_+=~`[]{}|:;<>,.?/BCDFGHJKLMNPQRSTVWXYZ"

	d3 =require("d3-queue");
	var q = d3.queue();

	var numCPUs = require('os').cpus().length;
//console.log(numCPUs);
var threads = numCPUs * 5;

//start();
function start(){
	

for(y=min;y<=max;y++){
var len = y;
var loops = Math.pow(charset.length,len);

//split work to threads
var work = Math.floor(loops/threads);
if(work ==0){
	q.defer(generateWords,0,loops);
}else{
	for(x=0;x<threads-1 ;x++){
		//console.log("splitting work");
	q.defer(generateWords,work*x,work*(x+1));
}
q.defer(generateWords,work*(threads-1),loops);
}
}

  q.await(function(error) {
		console.log(error);
	});
	
}	
 function generateWords(start,end) {
	for(x=start;x<end;x++){

var arr = Array.apply(null, Array(y)).map(function () {})
	arr.map(function(val,index){
		var b = index == 0 ?x%(charset.length): Math.floor((x)/(Math.pow(charset.length,index)));
		//console.log(x +" "+ b +" "+ charset[b%charset.length]);
		arr[index] = charset[b%charset.length];
		
	})
	processPassword(arr.reverse().join(""));
}
}		
	
 function processPassword(pass) {
	console.log(pass);
}	