function calculateSum(n, callback){
var i;
var sum = 0;
for (i = 1; i <= n; i++){
sum += i;
}
console.log(`Sum is: ${sum}`);
callback(sum);
}

var n = 10;
calculateSum(n, function(sum){
console.log(`Average is: ${sum/n}`);
});
