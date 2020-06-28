var intMax = 10000000;
var primes = [];
for(var i = 0; i <= intMax; i++) {
	primes[i] = 0;
}
for(var i = 2; i <= intMax; i++) {

		for(var j = 2; i*j <= intMax; j++) {
			primes[i*j]++;
		}
}

var num = 0;
for(var n = 2; n < intMax; n++) {
	if(primes[n] == primes[n+1]) {
		num++;
	}
}
console.log(num);