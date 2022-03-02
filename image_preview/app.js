
      
      
var preview_image = document.querySelector('.image_viewr > img');
var thumbnails = document.querySelectorAll('.imgs > img');

let opacity = 0.6;
thumbnails.forEach((eachimage)=>{
    eachimage.addEventListener('click', imageClick)
    
})


function imageClick(e){
    thumbnails.forEach((eachimage)=>{
                eachimage.style.opacity =1;
            })
            /*I embeded exactly the for-each function of the Thumbnail nodelist into itself.  this is because I want to set an opacity of any element with prior  opacity  back to 1. since the  opacity of a prior clicked image  is active, in order to remove the opacity from every other image element except the one being clicked*/
           preview_image.src = e.target.src;
           e.target.style.opacity=opacity;
            
           preview_image.classList.add('entrance_animation');
           setTimeout(()=>{
            preview_image.classList.remove('entrance_animation')
           },500)
}

