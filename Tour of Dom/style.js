const sections=document.querySelectorAll('section')
//console.log(section)
for(const section of sections){
    section.style.border='2px solid black'
    section.style.margin="3px"
    section.style.borderRadius='10px'
    section.style.padding='20px'
    section.style.backgroundColor='lightgreen'
}
const placecontain=document.getElementById('places')
placecontain.style.backgroundColor='lightgrey'
const lifeclass=document.getElementById('lifes')

lifeclass.classList.add('big-text')//make a style in css and added that using js 
lifeclass.classList.remove('text-all')//kono class er css er kaj remove kora
