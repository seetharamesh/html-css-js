function sum(a,b){
	var c = Number(a) + Number(b);
	document.getElementById("result").value = c;

//	alert(add);
}

function subtract(a,b){
	var c = Number(a) - Number(b);
	document.getElementById("result").value = c;
//	alert(diff);
}

function multiply(a,b){
	var c = Number(a) * Number(b);
	document.getElementById("result").value = c;
	//alert(product);
}

function divide(a,b){
	var c = Number(a) / Number(b);
	document.getElementById("result").value = c;
	//alert(result);
}
function avg(a){
	//Finding average for textbox1 only.
	console.log(a);
	var sum = 0;
	var arrayOfNumbers = a.split(',');
	console.log(arrayOfNumbers);
	for(var i = 0 ; i < arrayOfNumbers.length; i++){
		var sum = sum + Number(arrayOfNumbers[i]);
	}
	var avg = sum/arrayOfNumbers.length;
	document.getElementById("result").value = avg;
//  alert(result);
}
