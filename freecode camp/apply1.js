//Dom manipulation

//styling elements using DOM
// const title=document.querySelector('#main-heading')
// //access css property
// title.style.color="blue"//inline styling
// console.log(title);

// const listItems=document.querySelectorAll('.movie');
// // listItems.forEach(function(item){
// //     item.style.fontSize="20px";
// //     item.style.color="red";
// // });
// for(i=0;i<listItems.length;i++){
//     listItems[i].style.fontSize="50px";
// }

// console.log(listItems);

//creating elements using DOM

const ul=document.querySelector('ul');
const li=document.createElement('li');
//adding element to the list
ul.append(li)
//modifying the text

// const firstitem=document.querySelector('.movie');

// console.log(firstitem.innerText)
// console.log(firstitem.textContent)
// console.log(firstitem.innerHTML)

li.innerText="The Lord of the Rings";

//modifying the attribute or class of the element

