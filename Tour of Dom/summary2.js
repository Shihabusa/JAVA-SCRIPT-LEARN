// const { createElement } = require("react");

// console.log('Second File');
// const secondlist=document.getElementById('sec-list')
// const li=document.createElement('li')
// li.innerText='my dynamic item'
// secondlist.appendChild(li)//akn add hoise

//main e korte gele ager sob comment out koro or new file theke koro
const main=document.getElementById('container')
const section=document.createElement('section')
section.innerHTML=`
<h1>my dynamic created section</h1>
<p>Extra tag is added inside paragraph</p>
<ul>
<li>My first </li>
<li>My second</li>
<li>My third </li>
<li>My last </li>
</ul>
`;
main.appendChild(section);

