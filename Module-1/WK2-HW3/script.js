var colors = ["blue", "orange", "red", "yellow"];

let elements = document.getElementsByClassName("ovals");
var len = elements.length;

var currentColorIndex = 0;
var colorsLength = colors.length;

function colorChange() {

  console.log("before increment" + currentColorIndex);
  if (currentColorIndex > colorsLength) {
    currentColorIndex = 0;
  } else {
    for (i = 0; i < len; i++)
      elements[i].style.backgroundColor = colors[currentColorIndex];
  }
    currentColorIndex++;
    console.log("after increment" + currentColorIndex);

    if(currentColorIndex >= colorsLength)
    currentColorIndex = 0;
}








//
// This is another way that works but not very efficient as it's not generalized
// var colors = ["blue", "orange", "red", "yellow"];
// var currentColor = 0;//starting from index 0
// var switchFlag = false;//this flag is used to repeat the color changing process on every click
//
// function colorChange() {
//
//   switchFlag = true;//the flag is set to true as the mouse is clicked
//   while (switchFlag) { //till the user clicks the mouse repeat the color change
//     switch (currentColor) {//based the clicks color is changed
//
//       case 0:
//         console.log("inside switch case 0");
//         console.log("currentColor click#:" + currentColor);
//         console.log("The color is:" + colors[currentColor]);
//         document.getElementById("item1").style.backgroundColor = colors[currentColor];
//         document.getElementById("item2").style.backgroundColor = colors[currentColor];
//         document.getElementById("item3").style.backgroundColor = colors[currentColor];
//         document.getElementById("item4").style.backgroundColor = colors[currentColor];
//         document.getElementById("item5").style.backgroundColor = colors[currentColor];
//         document.getElementById("item6").style.backgroundColor = colors[currentColor];
//         document.getElementById("item7").style.backgroundColor = colors[currentColor];
//         document.getElementById("item8").style.backgroundColor = colors[currentColor];
//         document.getElementById("item9").style.backgroundColor = colors[currentColor];
//         currentColor++;
//         switchFlag = false;
//         break;
//       case 1:
//         console.log("inside switch case 1");
//         console.log("currentColor click#:" + currentColor);
//         console.log("The color is:" + colors[currentColor]);
//         document.getElementById("item1").style.backgroundColor = colors[currentColor];
//         document.getElementById("item2").style.backgroundColor = colors[currentColor];
//         document.getElementById("item3").style.backgroundColor = colors[currentColor];
//         document.getElementById("item4").style.backgroundColor = colors[currentColor];
//         document.getElementById("item5").style.backgroundColor = colors[currentColor];
//         document.getElementById("item6").style.backgroundColor = colors[currentColor];
//         document.getElementById("item7").style.backgroundColor = colors[currentColor];
//         document.getElementById("item8").style.backgroundColor = colors[currentColor];
//         document.getElementById("item9").style.backgroundColor = colors[currentColor];
//         currentColor++;
//         switchFlag = false;
//         break;
//       case 2:
//         console.log("inside switch case 2");
//         console.log("currentColor click#:" + currentColor);
//         console.log("The color is:" + colors[currentColor]);
//         document.getElementById("item1").style.backgroundColor = colors[currentColor];
//         document.getElementById("item2").style.backgroundColor = colors[currentColor];
//         document.getElementById("item3").style.backgroundColor = colors[currentColor];
//         document.getElementById("item4").style.backgroundColor = colors[currentColor];
//         document.getElementById("item5").style.backgroundColor = colors[currentColor];
//         document.getElementById("item6").style.backgroundColor = colors[currentColor];
//         document.getElementById("item7").style.backgroundColor = colors[currentColor];
//         document.getElementById("item8").style.backgroundColor = colors[currentColor];
//         document.getElementById("item9").style.backgroundColor = colors[currentColor];
//         currentColor++;
//         switchFlag = false;
//         break;
//       case 3:
//         console.log("inside switch case 3");
//         console.log("currentColor click#:" + currentColor);
//         console.log("The color is:" + colors[currentColor]);
//         document.getElementById("item1").style.backgroundColor = colors[currentColor];
//         document.getElementById("item2").style.backgroundColor = colors[currentColor];
//         document.getElementById("item3").style.backgroundColor = colors[currentColor];
//         document.getElementById("item4").style.backgroundColor = colors[currentColor];
//         document.getElementById("item5").style.backgroundColor = colors[currentColor];
//         document.getElementById("item6").style.backgroundColor = colors[currentColor];
//         document.getElementById("item7").style.backgroundColor = colors[currentColor];
//         document.getElementById("item8").style.backgroundColor = colors[currentColor];
//         document.getElementById("item9").style.backgroundColor = colors[currentColor];
//         currentColor++;
//         switchFlag = false;
//         break;
//        default:
//         currentColor = 0;//the color is reset to 0 to again repeat the colors from the beginning color list
//         break;
//     } //switch
//   } //while
// } //end of function
