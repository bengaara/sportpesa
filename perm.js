var Combinatorics = require('js-combinatorics');
var alpha ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("")

for(x=4;x<8;x++){
	cmb = Combinatorics.permutation(alpha,x); // assumes 4
var b = cmb.toArray().map(function(a){return a.join("")})
console.log(b);
	
}
