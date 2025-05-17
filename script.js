var a=20;
var b=10;
console.log(a+b)

var a=2;
var b=5;
console.log(a-b)

var a=4;
var b=2;
console.log(a*b)

var a=2;
var b=2;
console.log(a/b)
console.log(a+b)
console.log(b-b)
console.log(a>b)
console.log(a<=b)
console.log(a>=b)
console.log(a!=b)
console.log(a==b)
console.log(a*b)
console.log(a/b)
console.log(a+b)
console.log(a-b)

function addd(){
    var a=10;
    var b=30;
    console.log(a+b);
}
addd()
function add(a, b){
    console.log(a)
}
add("deepika")

console.log(5=="five")
console.log(3!="three")
console.log(5!="five")

var a=10;
var b=20;
console.log(`${a}+${b}=${a+b}`)

var n=10
if (n%2==0) 
{
console.log("even numvber") 
}
 else 
{
console.log("odd number")    
}

for(n=1;n<=10;n++){var n=10
if (n%2==0) 
{
console.log(`${n}is even`) 
}
else 
{
console.log(`${n} is odd`)    
}
}

for(n=1;n<=10;n++){var n=10
if (n%2==0) 
{
console.log("even") 
}
else 
{
console.log("odd")    
}
}

n=1;
while(n <=10)
{
if (n%2==0) {
console.log(`${n}is even`) 
}
else 
{
console.log(`${n} is odd`)    
}    
n++;
}

n=1;
do{
    if(n%2===0){
        console.log(`${n} is even`)
    }
    else{
        console.log(`${n} is odd`)
    }
    n++;
}while(n<=10);

n=6;
switch(n){
    case 1:
        console.log("sunday")
    break;
    case 2:
        console.log("monday")
    break;
    case 3:
        console.log("tuesday")
    break;
    case 4:
        console.log("wednesday")
    break;
    case 5:
        console.log("thursday")
    break;
    case 6:
        console.log("friday")
    break;
    case 7:
        console.log("saturday")
        break;
    default:
                console.log("enter the valid number")
}

var sum=()=>{
    console.log(10+20)
}
sum()

n=10
var result=(n%2===0)?"even":"odd"
console.log(result)
var sum1=0
for(n=1;n<10;n++){
if(n%2===0){
sum1=sum1+n;
}
}
console.log("sum of even num from 1 to 10",sum1); 

