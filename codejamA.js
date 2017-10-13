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
    main();   
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
	
	for(x=0;x<n;x++){
		
		var numbers =[1,2,3,4,5,6,7,8,9,0];
		//console.log(remaining);
		var found =false;
		var input = readLine();
		//console.log(`${input}`);
		
		for(y=1;y<10000000;y++){
			test = input * y;
			
			findNum(numbers,test +"");
			
			//console.log(`Case #${x+1}: ${test}`);
			if(numbers.length <1){ //found last match
				console.log(`Case #${x+1}: ${test}`);
				found = true;
				break;
			}
		}
		if(!found){
			console.log(`Case #${x+1}: INSOMNIA`);
		}
		
		
		
		
	}
	
    //arr = readLine().split('');
    //arr = arr.map(Number);

}
function findNum(remaining,input){
	input.split('').map(function(num){
			var index = remaining.indexOf(parseInt(num));
			//console.log(remaining);
			//console.log(`${remaining} ${num}  ${index} `);
			if (index > -1) {
				remaining.splice(index, 1);
				//console.log(remaining);
			}	
			
		//console.log(`${num}`);
		//	console.log(remaining);
		});
	
}