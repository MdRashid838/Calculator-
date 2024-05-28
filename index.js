let string = "";
let input = document.querySelector("input");
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
           string = eval(string)
          input.value = string;
        } else{
            string = string + e.target.innerHTML;
           input.value = string;
            console.log(e.target)
        }
       if(e.target.innerHTML ==='AC'){
           string = "";
          input.value = "";
           
       }else if(e.target.innerHTML === 'DEL'){
         string = string.slice(0, -4);
       input.value = string;
        }
    })
})