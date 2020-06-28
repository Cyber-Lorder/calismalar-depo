var maxCounts = 0;
var maxP = 0;
for(var p = 5; p <= 1000; p++){
	var counts = 0;
	for(var i = 1; i < p; i++){
		for(var j = i; j < p-i; j++){
			var k = p-i-j;
			if(i*i + j*j == k*k){
				counts++;
			}
		}
	}
	if(counts > maxCounts){maxCounts = counts; maxP = p;}
}

console.log(maxP);