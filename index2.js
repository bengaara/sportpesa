   var charset = [];

   var min = 1; //var added for min char length
   var max = 11; //var added for max char length
	charset = "abcdefgh";//.split("");//"abcdefghijklmnopqrstuvwxyzAEIOU0123456789!@#$%^&*()-_+=~`[]{}|:;<>,.?/BCDFGHJKLMNPQRSTVWXYZ"

	d3 =require("d3-queue");
	var q = d3.queue();
 
start();

 
   function swap(chars, i, j) {
    var tmp = chars[i];
    chars[i] = chars[j];
    chars[j] = tmp;
}

function getAnagrams(input) {
    var counter = [],
        anagrams = [],
        chars = input.split(''),
        length = chars.length,
        i;

    for (i = 0; i < length; i++) {
        counter[i] = 0;
    }

    anagrams.push(input);
    i = 0;
    while (i < length) {
        if (counter[i] < i) {
			
            swap(chars, i % 2 === 1 ? counter[i] : 0, i);
            counter[i]++;
            i = 0;
			
		if(anagrams.indexOf(chars.join(''))< 0){
		anagrams.push(chars.join(''));}
			

            anagrams.push(chars.join(''));

        } else {
            counter[i] = 0;
            i++;
        }
    }

	//anagrams = uniqueArray(anagrams);
	
    return anagrams;
}

function start(){
var input=charset;//"abcdefghijklmnopqrstuvwxyz0123456789ABCDFGHJKLMNPQRSTVWXYZ";
var len=input.length;
var comb = [];
var p=Math.pow(2,len);
var twoPower;
for(i = 1; i < p; i++) 
{
	var str ="";
    twoPower=p;
	 
    for(j=0;j<len;j++)
    {
        twoPower=twoPower/2;
        str+= (i & twoPower ? input.charAt(j) : "");
		console.log(i + "-" +j+ " str+" + str);
    }
	

	//var merged = [].concat.apply([], getAnagrams(str));
	if(str.length <min || str.length > max ){
		continue;
	}
	
	
	q.defer(ana,str);

	

	//console.log(str);
    //comb.push(str);
}

//console.log(comb);

q.await(function(error) {
	console.log(error);
});

}

function ana(str){
		a = getAnagrams(str);
	a.map(function(arr){
		
		if(arr instanceof Array){
			arr.map(function(ar){
				processPassword(arr);
				});
		}else{
			processPassword(arr);//console.log(arr);
			}
		//reject('complete!');
	  //resolve('next guy!');
		
		});
		
	}
	
function processPassword(pass) {
	console.log(pass);
}	




  