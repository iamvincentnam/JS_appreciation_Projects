// const form  = document.querySelector('form');

// const displayscore = document.querySelector('.score');


// var submitQuestion = form.addEventListener('submit', (e)=>{
//         /* Answers is an array of the  value of what the student chose while answering the questions*/
//         const answers =[form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
//         /* correctanswers is an array of the actual correct answers */
//         const correctAnswers =['A','A','A', 'A', 'A'];
//         e.preventDefault();

//          // check answers
//         let score =0;
//         for(i=0; i<correctAnswers.length; i++){
//             if(correctAnswers[i] === answers[i] ){
//                 score+=20;
                
//             }
//             else{score}
//         }
        
//         // show result on page
//        scrollTo(0,0);
//         result = document.querySelector('.result');
//         result.classList.remove('d-none')
//         let output =0;
//         /* To make a dynamic animation of the result on the page */
//         var timer = setInterval(()=>{

//             /*condition for timeout interval*/
//             if(output == score){
              
//                 clearInterval(timer)
//             }
//            else{output++}
//            displayscore.textContent =`${output}%`;
//            weatherfunc (output)
          
    
//         },50);
          
      
//     }); 
    
    
     
    
//     let sec =60;
//     let min = 5;
//     /*
//     1)Remember not to put the initial declaration of the vriable sec and min inside the setinterval function otherwise, it won't read.
//     2) declare it above the function */


//     var timing = setInterval(submitQuestion =>{
        
//         var seconds = document.querySelector('#sec');
//         var minute = document.querySelector('#min');
//         seconds.textContent = `${sec}`;
//         minute.textContent=`${min}`;
//         if(seconds.textContent.length <2){ seconds.textContent = `0${sec}`;}
//         if(minute.textContent.length <2){ minute.textContent = `0${min}`;}
//             if(sec == 0){
//                 min -=1;
//                 sec = 60;
//                 }
//                 sec--;
               
//                 if(min == 0){
                    
//                     clearInterval(timing)
//                     submitQuestion
                      
//                     } 
            
//             console.log(sec , min)
//     },50);



// function weatherfunc (output){

   
//    if(output > 0 && output < 40){
//        displayscore.style.color ='rgba(202, 61, 5, 0.781)';
//        displayscore.style.background ='white';
//    } 
//    else if(output => 40 && output < 80){
 
//     displayscore.style.color ='orange';
//     displayscore.style.background ='white';
//    }
//  if(output > 80 ){
//     displayscore.style.color ='green';
//     displayscore.style.background ='white';
//    }
  
// }


 
  alert('You are about to take a test!! are you ready?');
        const form  = document.querySelector('form');

const displayscore = document.querySelector('.score');


var submitQuestion = form.addEventListener('submit', (e)=>{
        /* Answers is an array of the  value of what the student chose while answering the questions*/
        const answers =[form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
        /* correctanswers is an array of the actual correct answers */
        const correctAnswers =['A','A','A', 'A', 'A'];
        e.preventDefault();

         // check answers
        let score =0;
        for(i=0; i<correctAnswers.length; i++){
            if(correctAnswers[i] === answers[i] ){
                score+=20;
                
            }
            else{score}
        }
        
        // show result on page
       scrollTo(0,0);
        result = document.querySelector('.result');
        result.classList.remove('d-none');
        let output =0;
        /* To make a dynamic animation of the result on the page */
        var timer = setInterval(()=>{

            /*condition for timeout interval*/
            if(output == score){
              
                clearInterval(timer)
            }
           else{output++}
           displayscore.textContent =`${output}%`;
           weatherfunc (output)
          
    
        },50);
          
      
    }); 
    
    
     
    
    let sec =60;
    let min = 5;
    /*
    1)Remember not to put the initial declaration of the vriable sec and min inside the setinterval function otherwise, it won't read.
    2) declare it above the function */


    var timing = setInterval(submitQuestion =>{
        
        var seconds = document.querySelector('#sec');
        var minute = document.querySelector('#min');
        seconds.textContent = `${sec}`;
        minute.textContent=`${min}`;
        if(seconds.textContent.length <2){ seconds.textContent = `0${sec}`;}
        if(minute.textContent.length <2){ minute.textContent = `0${min}`;}
            if(sec == 0){
                min -=1;
                sec = 60;
                }
                sec--;
               
                if(min == 0){
                    
                    clearInterval(timing)
                    submitQuestion
                      
                    } 
            
            console.log(sec , min)
    },50);



function weatherfunc (output){

   
   if(output > 0 && output < 40){
       displayscore.style.color ='rgba(202, 61, 5, 0.781)';
       displayscore.style.background ='white';
   } 
   else if(output => 40 && output < 80){
 
    displayscore.style.color ='orange';
    displayscore.style.background ='white';
   }
 if(output > 80 ){
    displayscore.style.color ='green';
    displayscore.style.background ='white';
   }
  
}