const buttons = document.getElementsByTagName("button");


calculator.addEventListener("click", operation);

function operation(e){
	var inputField = document.getElementById("display");

	if(e.target.value !== "=" && e.target.value !== "C" && e.target.value !== "Del" && e.target.value !== "+/-"){
		inputField.value += e.target.value;
	} else if(e.target.value === "Del"){
		inputField.value = inputField.value.substring(0, inputField.value.length - 1)
	} else if(e.target.value === "="){
		inputField.value = eval(inputField.value)
	} else if(e.target.value === "C"){
		inputField.value = "";
	} else if(e.target.value === "+/-"){
		inputField.value = "-" + inputField.value;
	}
}





