//Dom manipulation

//Traversing the DOM

//parent node traversal

let ul=document.querySelector('ul');
// console.log(ul.parentNode);//div container show korbe
// console.log(ul.parentElement)//div container show korbe

// console.log(ul.parentNode.parentNode) ;//body show korbe
// console.log(ul.parentElement.parentElement);//body show korbe

// const html=document.documentElement;//html element show korbe
// console.log(html.parentNode);//document show korbe
// console.log(html.parentElement);//null show korbe


//child node traversal

// console.log(ul.childNodes);//text nodes o show korbe
// console.log(ul.firstChild);//first child node show korbe
// console.log(ul.lastChild);//last child node show korbe
// ul.childNodes[5].style.backgroundColor="red";//first child node er background color red kore dibe


// console.log(ul.children);//only element nodes show korbe
// console.log(ul.firstElementChild);//first element node show korbe
// console.log(ul.lastElementChild);//last element node show korbe



//sibling node traversal
//dont have to be same type of node

const div=document.querySelector('div');
console.log(div.childNodes);//div er child nodes show korbe
console.log(ul.previousSibling)
console.log(ul.nextSibling)
console.log(ul.previousElementSibling)//div show korbe
console.log(ul.nextElementSibling)//null show korbe
