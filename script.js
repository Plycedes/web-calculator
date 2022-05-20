//Function to clear all the values
function clearScreen(){
    document.getElementById("result").value = "";
}

//Function to display values
function display(value){
    document.getElementById("result").value += value;
}

//Function for operation and returning the result
function calculate(){
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}