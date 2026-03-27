// alert("Hello beautiful!")
//console.dir(document)
// let div=document.querySelector('div')
// console.log(div)
// let id=div.getAttribute('id')
// console.log(id);
// let name=div.setAttribute('name','abcd')
// console.log(name);

// //dom 2
// let div=document.querySelector('div')
// console.log(div)
// div.style.backgroundColor='red';
// div.style.fontSize='28px'
// div.innerText="hellow";

// //add anything 
// let newbtn=document.createElement('button');
// newbtn.innerText="click me boss"
// console.log(newbtn)

// let div=document.getElementById('box2')
// // div.prepend(newbtn)
// //div.append(newbtn)
// // div.after(newbtn)
//  div.before(newbtn)
//add heading
let head=document.createElement('h1')
head.innerHTML=`<i> hi this is now created</i>`;
let body=document.querySelector('body')
body.prepend(head)


