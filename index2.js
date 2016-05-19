   var charset = [];

   var min = 2; //var added for min char length
   var max = 3; //var added for max char length
	charset = "abcdefghijklmnopqrstuvwxyz0123456789ABCDFGHJKLMNPQRSTVWXYZ";//.split("");//"abcdefghijklmnopqrstuvwxyzAEIOU0123456789!@#$%^&*()-_+=~`[]{}|:;<>,.?/BCDFGHJKLMNPQRSTVWXYZ"

   

   
   
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
            anagrams.push(chars.join(''));

        } else {
            counter[i] = 0;
            i++;
        }
    }

	anagrams = uniqueArray(anagrams);
	
    return anagrams;
}

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
    }
	

	//var merged = [].concat.apply([], getAnagrams(str));
	if(str.length <min || str.length > max ){
		continue;
	}
	a = getAnagrams(str);
	a.map(function(arr){
		
		if(arr instanceof Array){
			arr.map(function(ar){console.log(ar);});
		}else{console.log(arr);}
		
		
		});
	
	//console.log(str);
    //comb.push(str);
}

//console.log(comb);



function uniqueArray(array) {
    var temp = array.reduce(function(previous, current) {
        previous[current] = true;
        return previous;
    }, {});

    return Object.keys(temp);
}
  