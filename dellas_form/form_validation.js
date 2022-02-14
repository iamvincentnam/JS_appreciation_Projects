const inputs = document.querySelectorAll('input');
const form = document.querySelector('.myform');
const patterns ={
username : /^[a-z]{5,12}$/i,
password :/^[A-Z]{2}[a-z]{4,10}$/,
email : /^([a-z0-9])@([a-z])([.com])$/i,
};

//validation function

function validate(field, regex){
 
if (regex.test(field.value)){
    field.className = 'valid';
        } 
    else{field.className = 'invalid'}
        }

inputs.forEach((input)=>{
    input.addEventListener('keyup',(e)=>{
        e.preventDefault();
        // console.log(e.target.attributes.id.value );
        /* since "e.target.attributes.id.value" produces the same ouptut in a console as the id  of an input (eg. password), rather than writing a specific id or name in each of the parameter, you can replace it with this :" e.target.attributes.id.value" */

        validate(e.target, patterns[e.target.attributes.id.value ] );
    });
        /* to add infocus and out focus backgroud-color when input is being clicked, below is the code */

    input.addEventListener('focusin', (e)=>{
        e.target.style.background ='rgba(201, 162, 110, 0.767)';
    });
    input.addEventListener('focusout', (e)=>{
        e.target.style.background ='rgb(226, 182, 124)';
    });
});

