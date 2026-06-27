const display = document.querySelector("input");
const btn = document.querySelectorAll("button");
const operators = ["+", "-", "*", "/", "%", "."];


for(let num of btn) {
   
    num.addEventListener("click", (evt) => {

         let lastChar = display.value.slice(-1);
        if (operators.includes(lastChar) && operators.includes(num.innerText)){
            return;
        }
        
        if(display.value.length===0 && operators.includes(num.innerText)){
            return;
        }

        if(num.innerText === "AC"){
            display.value ="";
        }
         else if (num.id === "delete"){
           display.value = display.value.slice(0,-1);
        }
        else if (num.id === "eq") {
            // display.value = eval(display.value);
            try {
               display.value = eval(display.value);
             } catch {
              display.value = "Error";
            }
        }
        else if(num.id === "mul"){
            display.value += "*";
        }
        else if (num.id === "divide"){
            display.value += "/";
        }
        else if(num.id === "percen"){
            display.value +="%";
        }
        else{
            display.value += num.innerText;
        }
        
    });

}
document.addEventListener("keydown", (e) => {
    if(e.key >="0" && e.key <= "9"){
        display.value += e.key;
    }

     else if(operators.includes(e.key)){
        display.value += e.key;
    }

    else if (e.key === "Backspace"){
        display.value = display.value.slice(0, -1);
    }

    else if (e.key === ".") {
        let parts = display.value.split(/[\+\-\*\/%]/);
        let currentNumber = parts[parts.length - 1];
        if (!currentNumber.includes(".")) {
             display.value += ".";
        }
    }
    else if (e.key === "Enter") {
     try {
        display.value = eval(display.value);
     } catch {
        display.value = "Error";
      }
    }

    else if (e.key === "Escape") {
       display.value = "";
     }

});

