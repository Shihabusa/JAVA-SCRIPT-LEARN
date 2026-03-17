const { createElement } = require("react");

console.log('append js')
//single element add
const plife=document.getElementById('parentlife')
// console.log(plife)
const li=document.createElement('li');
li.innerText="pahar soman";
//add the child
plife.appendChild(li)//eta dilei li te gia new element add hbe
//where to add
const maincon=document.getElementById('main')
// console.log(maincon)//check that main is connect or not
const section=document.createElement('section')
const h1=document.createElement('h1')
h1.innerText="my Food list"
section.appendChild(h1);//akn o eta main container e deinai amra tai dekhte pabo na
const ul=document.createElement('ul')
const li1=document.createElement('li')
li1.innerText='Biriani'
ul.appendChild(li1);
const li2=document.createElement('li')
li2.innerText='Khabsa'
ul.appendChild(li2);
const li3=document.createElement('li')
li3.innerText='Chicken kema'
ul.appendChild(li3);
section.appendChild(ul)


maincon.appendChild(section);//akn dekhte pabo amra
//set inner html
const secDress=document.createElement('section');
secDress.innerHTML=`
<h1> amar dress section</h1>
<ul>
<li>PANT<li>
<li>Shirt<li>
<li>PAjama<li>
</ul>
`;
maincon.appendChild(secDress);


