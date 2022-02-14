
const display= document.querySelector('.input-display');
const answer= document.querySelector('.answer');
var entire_display_screen = document.querySelector('.form-item');
// the section where the inputed text and the answer will be shown.

const calculator_inputs = document.querySelector('#wrapper');
// this is the rapper div contaning all the buttons element
var division_btn = document.querySelector('.item4');
const numericals = document.querySelectorAll('.nums');
const buttons = document.querySelectorAll('.item');
const operators = document.querySelectorAll('.Oprtors');
const clearbtn = document.querySelector('.item18');
const equalsbtn = document.querySelector('.item8');
const deletebtn = document.querySelector('.del');
var time_display = document.querySelector('#sunbattery');
/* since the button return a Node list, we need to use a foreach function to loop through each*/

console.log(division_btn.innerText);
buttons.forEach( button =>{
    button.addEventListener('click', e=>{
        /*i wrote this conditional below since js would rather run the slash symbol as the division sign, instead of the uni-code character  which is the default text content */
        if(e.target.innerText ==  division_btn.innerText)
         {division_btn.innerText = '/'} 
        switchfunc(e.target.innerText) 
       
    })
})

function switchfunc(input){
    switch (input){
        case 'AC':
            display.innerText = '';
            answer.innerText = '';
            break;
        case 'DEL' :
            if (display.innerText){
                display.innerText = display.innerText.slice(0,-1);
                 }
           
            break;
            case '=':
            try{ answer.innerText  = eval(display.innerText),
                  display.innerText = ''
                }
                /*the above statement is enclosed in a  try catch  function in order to return an error message if there is a wrongly inputed data */ 
            catch {
                    display.innerText = 'ERROR';
                  }
        /*adding the break statement would make the equal sign not to display after an evaluation is made */
            break;
            
         default:
        case input :
            display.innerText += input;
        
    }
}
 /*A date time statement */
const now = new Date();

var minute = now.getMinutes()
var hour = now.getHours()
var seconds = now.getSeconds()
var  timer = setInterval(()=>{
    const now = new Date();
    var minute = now.getMinutes()
    var hour = now.getHours()
    var seconds = now.getSeconds()  
    time_display.innerHTML = `<span class="hour_span"> ${hour} : </span>
    <span class="minute_span"> ${minute} : </span>
    <span class="seconds_span"> ${seconds} </span>`
},1000)

 /*the case 'DEL' has to be placed before display .innerText. if it is placed bellow other case display.innerText, other case with 'display.textcontent'  will overide it.*/

  /*the case 'AC' has to be placed on top. if it is placed bellow other case, other case with 'display.textcontent'  will overide it.*/