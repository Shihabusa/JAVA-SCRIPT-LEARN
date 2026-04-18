//dom manipulation

//Event listener

//element.addEventListener('click',function)

const btntwo=document.querySelector('.btn-2');
function alrtbtn(){
    alert("I also love JavaScript");

};
btntwo.addEventListener('click',alrtbtn);


//mouseover event

const btn1BG=document.querySelector('.card-1');
function cngBG(){
    btn1BG.style.backgroundColor='blue';
}
btn1BG.addEventListener('mouseover',cngBG);
