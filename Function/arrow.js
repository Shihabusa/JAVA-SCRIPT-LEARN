// Normal style:
const gunKori = function(num1, num2) {
    return num1 * num2;
};
//Arrow Function style (Ekdom smart!):
const arrow=(a,b)=>{
    return a+b;
}
const suparrow=(c,d)=>c+d;
console.log(arrow(30,44))
console.log(suparrow(22,44))
//default parameter
function welcomeMessage(name="guest") {//jodi kono nam na diye function call koro tokhon tmake guest dakbe
    console.log("Welcome to our website, " + name + "!");
}
welcomeMessage("Shihab"); // Tumi nam diyecho, tai asbe: "Welcome to our website, Shihab!"

welcomeMessage();//nam na dileo just massage ta asbe
