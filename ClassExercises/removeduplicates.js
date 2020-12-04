//Sort an array with given numbers and remove duplictes if any.

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

const removeDuplicates = (arr) =>{
  var len = arr.length;
  var temp = [];
  var count = 0;
  for(var i = 0 ; i < len; i++){
    var elem = arr[i];
    if(arr[i] != arr[i+1]){
      temp[count++] = elem;
    }
  }
//console.log("new array:" + temp);
return temp;
}

var arrSource = bubbleSort([1,1,3,4,0,1,4]);
console.log("Sorted Array:" + arrSource);

var dispArray = removeDuplicates(arrSource);
console.log("Removed Duplicates:" + dispArray);
