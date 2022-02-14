
const trash_can = document.querySelectorAll('li > span');
const  form =  document.querySelector('#todo_form');
const input = document.querySelector('#add_todo');
const ul = document.querySelector('.listdiv');



//  A function declaration for the html template
function generate_Template (todo){
const html = `<li> ${todo.toLowerCase()}
<img src="./icons8-trash-can-24.png"  alt="" class="delete">
 </li> `;
ul.innerHTML += html;
}

// An event Listener for the Submit function 

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const todo = form.querySelector('#add_todo').value.trim();
if(todo.length)
        {
        generate_Template(todo);
        }else
         {
         alert('please write something!'.toUpperCase());
         }
    // form.reset method clears the input text of the form after the submit button.. 
    form.reset();
});
    // Reset function which does the same thing as the reset button. 
input.addEventListener('click', (e)=>{
    form.reset(); 
});
// Trash can delete Function 
ul.addEventListener('click', (e)=>{
      if(e.target.className.includes("delete"))
      {
        e.target.parentElement.remove();
      }

         });


/*Bellow is a finction that enables the todolist to compare and bring out a search query from the list of todos that was made*/

function find_matching_entries(search_input){

     // first store the html collection in an array.
    var list_array = Array.from(ul.children);
   
    // then create a filter method
        list_array.filter(filtered=>{
        return !filtered.textContent.includes(search_input);
   }).forEach((display_none)=>{
        display_none.classList.add('d-none');
    });
    /*method chaining using dot, enables us to continue another atatement imediately at the end of a previous statement without stating the variable */

/*the reason we make two array  filter statement is that, we want the array that has a match to remove the class 'd-none'; because, initially, while filter array method was looping through, It probably added the class to an array when it came accross the first matching letter. */
            list_array.filter(filtered=>{
            return filtered.textContent.includes(search_input);
           }).forEach((display_none)=>{
            display_none.classList.remove('d-none')
        
            });
}
    // event listener for the search 
    var search_form = document.querySelector('.search');
search_form.addEventListener('keyup', e=>{
var search_input = search_form.querySelector('#search').value.trim().toLowerCase();
find_matching_entries(search_input)
});


