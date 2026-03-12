//includes()
let bazar = ["Alu", "Potol", "Dim", "Peyaj"];
console.log(bazar.includes("Dim"))//treue
console.log(bazar.includes("Mangsho"));//false
//indexof()
let friends = ["Sakib", "Tamim", "Mushfiq", "Mahmudullah"];
console.log(friends.indexOf("Mushfiq"));//output: 2
console.log(friends.indexOf("Messi")); // Output: -1
//slice()

let numbers = [10, 20, 30, 40, 50, 60];
let part = numbers.slice(1, 4);//1 theke suru kore 4 er ag porjonto print korbe
console.log(part);
console.log(numbers);
//splice()
let colors=["red","green","blue","yellow"]
colors.splice(1, 2);// 1 number index theke shuru kore 2 to item kete felo
console.log(colors);//real array thekei kete fele
