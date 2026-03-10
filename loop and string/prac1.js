// //even odd
// for(i=1;i<=100;i++){
//     if(i%2==0){
//         console.log("num=",i)//even number
//     }
// }
//game
let gamenum=25;
let usernum=prompt("Guess the number=");
while(usernum!=gamenum){
    usernum=prompt("you entered wrong number.Gusess again:");

}
console.log("you entered write number,congrats!")
