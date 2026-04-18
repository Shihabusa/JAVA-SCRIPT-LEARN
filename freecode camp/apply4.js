//Dom manipulation

//reveal event

//1st method using classList
// const reveal = document.querySelector('.reveal-btn');
// const hiddenContent = document.querySelector('.hidden-content');
// reveal.addEventListener('click', function(){
//     if(hiddenContent.classList.contains('reveal-content')){
//         hiddenContent.classList.remove('reveal-content');
//     }else{
//         hiddenContent.classList.add('reveal-content');
//     }   
// });
//2nd method using toggle

// const reveal = document.querySelector('.reveal-btn');
// const hiddenContent = document.querySelector('.hidden-content');
// reveal.addEventListener('click', function(){
//     hiddenContent.classList.toggle('reveal-content');
// });

//3rd method using display property
const reveal = document.querySelector('.reveal-btn');
 const hiddenContent = document.querySelector('.hidden-content');
reveal.addEventListener('click', function(){
    if(hiddenContent.style.display==="block"){
        hiddenContent.style.display="none"; 
    }else{
        hiddenContent.style.display="block";
    }
});