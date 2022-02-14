// alert('welcome here');
const container = document.querySelector('#container');
const sign_up_btn = document.querySelector('#sign_up_btn');
const sign_in_btn = document.querySelector('#sign_in_btn');
const overlayright = document.querySelector('.overlay-right');
const form = document.querySelectorAll('form');

/*the form add eventlistenr only has prevent default inside becaue we want the prevent the form from submiting whn clicked*/ 
form.forEach((each)=>{
  each.addEventListener('click',(e)=>{
    e.preventDefault();
  })
})


sign_up_btn.addEventListener('click', ()=>{
  container.classList.add('right_overlay_active');
  /* the overlay when it moves to the left, despite being a z-index less than its counterpart, it still manages to display from behind. so a quick hack to this was to set a setimeout for opacity to be zero */
 setTimeout(() => {
  overlayright.style.opacity ='0';
  }, 990);
});

sign_in_btn.addEventListener('click', ()=>{
  container.classList.remove('right_overlay_active');

  /* Also a an opacity was restored to 1 here. */
    overlayright.style.opacity ='1';
});

