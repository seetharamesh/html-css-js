//Using Bubble Sort sort the following numbers - 15,3,78,4,-6
var numArr = [15,3,78,4,-6];
var length = numArr.length;
var tempArray;
var count;

for(var i = 0 ; i < length-1; i++){
  console.log("iteration count of i:" + i);
  for (var j = 0; j < length-i-1; j++) {
  console.log("iteration count of j:" + j);
    if(numArr[j] > numArr[j+1]){
      tempArray = numArr[j];
      numArr[j] = numArr[j+1];
      numArr[j+1] = tempArray;
    }
  }
  console.log(numArr);

}
