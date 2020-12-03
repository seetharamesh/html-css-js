//Using Bubble Sort sort the following numbers - 15,3,78,4,-6
// var numArr = [15,3,78,4,-6];
// var length = numArr.length;
// var tempArray;
// var count;
//
// for(var i = 0 ; i < length-1; i++){
//   console.log("iteration count of i:" + i);
//   for (var j = 0; j < length-i-1; j++) {
//   console.log("iteration count of j:" + j);
//     if(numArr[j] > numArr[j+1]){
//       tempArray = numArr[j];
//       numArr[j] = numArr[j+1];
//       numArr[j+1] = tempArray;
//     }
//   }
//   console.log(numArr);
//
// }
let bubbleSort = (numArr) => { // create the bubble sort function
    let len = numArr.length; //creating a length variable
    let swapped = false; // creating a variable to keep track of the amount of times the arrays are swapped
    do {
        swapped = false; //this is false if there were no swaps made in the array
        for (let i = 0; i < len; i++) {
            if (numArr[i] > numArr[i + 1]) { // checks to see if the index at i is greater than the index immediately to the rigth
                let tmp = numArr[i]; // creating a temporary variable for the index at i
                numArr[i] = numArr[i + 1]; // if [i+1] is true copy the value into the i index
                numArr[i + 1] = tmp; // copy what was in index i into the index of [i+1] this finishes the swap
                swapped = true; //the variable swap will be true, which allows the loop to continue
            }
        }
    } while (swapped); //this while loop allows for 1 verification before the code stops. making it more efficient
    return numArr;
};

console.log(bubbleSort([15,12,300,4,-5]));
