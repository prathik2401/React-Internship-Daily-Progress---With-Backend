let button = document.getElementById("btn");
button.addEventListener("click", () => {
    let number1 = document.querySelector("#num1").value;
    let number2 = document.querySelector(".num2").value;
    let result = parseInt(number1)+parseInt(number2);

    if(isNaN(number1) || isNaN(number2)){
        alert("Enter number")
        document.getElementById("#num1") = "";

    }
    else{

        document.getElementById("title").innerHTML = "Sum = "+result;
        elem.style.backgroundColor = "red";
        elem.style.color = "white"
    }
        
})