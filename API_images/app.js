const btn  = document.querySelector('.btn');
const btn2  = document.querySelector('.btn2');
const image = document.querySelector('.image > img');
const body = document.querySelector('body');
// console.log(image);

 
btn.addEventListener('click', ()=>{
  fetchPics().then((data)=>{
    image.setAttribute('src', data[0].url ) 
  });
});

async function fetchPics (){
  const response = await fetch('https://api.thecatapi.com/v1/images/search');
  const data = await response.json()
  return data;
    // fetch('https://api.thecatapi.com/v1/images/search').then((response)=>{
     
    //    return response.json()
     
    // }).then((resdata)=>{
    //   // console.log( resdata[0].url)
    //   image.setAttribute('src', resdata[0].url);
    // })
    // .catch( err =>{
    //   console.log('Promise Rejected:', err);
    // });

}





const myPlaylist = 

  {title: "incredible God", singer: "mercy Chinwo", title: "under the canopy", singer: "frank Edwards", title: "Chinedum",   singer: "Mercy Chinwo"};
console.log(myPlaylist);
// console.log(JSON.stringify( myPlaylist));
// localStorage.setItem('myPlaylist', JSON.stringify(myPlaylist));
// const storedData = localStorage.getItem('myPlaylist');
// console.log(JSON.parse (storedData));






















// function getTodos (resource){

    
//         return new Promise((resolve, reject)=>{
//             const   request = new  XMLHttpRequest();

//     request.addEventListener('readystatechange', ()=>{

//         if(request.readyState === 4 && request.status === 200){
//             var data = JSON.parse(request.responseText)
//             resolve( data);
          

//         }   else if(request.readyState === 4 ){
//             reject('I did not find any data');
         
//                 }
//     });

//     request.open('GET', resource);
//     request.send();


//         })
        
// }

// getTodos('luiji.json').then(message =>{
// console.log('promise resolved:', message)
//  return getTodos('mar io.json')

// }).then(message=>{
//     console.log(message)
// }).catch(erMessage =>{

//   console.log('error :', erMessage)  
// });







