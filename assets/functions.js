//to display numbers inside the digital-display
function setNum(num){
    var prevNumber = document.getElementById('digital-display').value;
    document.getElementById('digital-display').value = prevNumber + num;
}

//to set operators and display it in the digital-display
function setOperator(operator){
    var num1 = document.getElementById('digital-display').value;
    if(num1 == "."){
        document.getElementById('digital-display').value = ".0" + " " + operator + " ";
    }else if(num1.substring(num1.length-1, num1.length) == "."){
        document.getElementById('digital-display').value = num1.substring(0, num1.length-1) + " " + operator + " ";
    }else{
        document.getElementById('digital-display').value = num1 + " " + operator + " ";
    }  
}

//to clear all the numbers in the digital-display
function clearAll(){
    document.getElementById('digital-display').value = "";
}

//to perform the calculation
function calculate(){
    var equation = document.getElementById('digital-display').value;
    document.getElementById('digital-display').value = eval(equation);
}


//to clear 1 character or number from the right
function clearRight(){
    var currContent = document.getElementById('digital-display').value;
    var newContent;
    if (currContent.substring(currContent.length-1, currContent.length) == " "){
        newContent = currContent.substring(0, currContent.length-2);
    }else{
        newContent = currContent.substring(0, currContent.length-1);
    }
    document.getElementById('digital-display').value = newContent;
}


//to automatically calculate the percentage of a number in decimal format
function getPercent(){
    var equation = document.getElementById('digital-display').value;
    var answer = eval(equation);
    
    document.getElementById('digital-display').value = eval(answer / 100);
}
