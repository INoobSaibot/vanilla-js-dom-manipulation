//guaruntees that it wont try to call function foo() before page exist.
document.addEventListener("DOMContentLoaded", function(){
    console.log('sweet')
    foo()
  });

function foo() {
    let txt =  'try vs code';
    let el = document.getElementById('fooID');
    
    el.innerText = txt;
    el.classList.add("animate");
    }

