let a=7;
let b=3;
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);
console.log("a ** b=",a**b);

// assignment operator =,+=,-+,*=,%=,**=

a+=4;
console.log("a=",a);//9
console.log("a-=4",a-=4);//5
console.log("a*=4",a*=4);//20
console.log("a**=4",a**=4);

//comparison operator ==,===,!=,!==

let d=7;
let e=5;
let f="7";
console.log("d==e",d==e);
console.log("d!=e",d!=e);
console.log("d==f",d==f);//f ke string hisebe dekhe na
console.log("d===f",d===f);//ebar datatype o check korbe

//logical operator && ,||,!

let v=9;
let y=4;
let cond1=v>y;
let cond2=v==9;
console.log("cond1 && cond2",cond1 && cond2);
