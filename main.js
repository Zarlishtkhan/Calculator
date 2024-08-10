const display = document.querySelector("#display");
const button = document.querySelectorAll("button");

button.forEach((item) => {
item.onclick = () =>{
    if(item.id == "clear"){
        display.innerText ="";


    }else if (item.id == "backspace"){
        let string= display.innerText.toString();
        display.innerText= string.substr(0, string.length - 1);
    }else if (display.innerText !="" && item.id == "equal"){ 
        try{
            display.innerText = eval(display.innerText.replace('x','*'))
        } catch {
            display.innerText = "Error!";
            setTimeout(() => (display.innerText = ""), 2000);
        }
        
    }else if (display.innerText !="" && item.id == "equal"){
        display.innerText = "Empty!";
        setTimeout(() => (display.innerText = ""), 2000);
    }else if (item.id == "cross"){ 
                 display.innerText += "*";
    } else{
        display.innerText += item.innerText;
    }
    
}

});
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleicon = document.querySelector(".toggle-icon");
let isDark = true;
themeToggleBtn.onclick =() =>{

    calculator.classList.toggle("dark");
    themeTogglebtn.classList.toggle("active");
    isDark = !isDark;
}