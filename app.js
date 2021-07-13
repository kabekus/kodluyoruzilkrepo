let firstName= prompt("Enter the you First Name");

let nameOutput= document.querySelector("span#myName");
nameOutput.innerHTML=firstName;


let dayName;
let h = "";
let m = "";
let s = "";
function now(){

let liveDate = new Date();
let today = liveDate.getDay();
let hour =liveDate.getHours();
let minute = liveDate.getMinutes();
let second = liveDate.getSeconds();

if(today == 0){
    dayName = "Sunday"
}else if(today == 1){
	dayName = "Monday";
}else if(today == 2){
	dayName = "Tuesday";
}else if(today == 3){
	dayName = "Wedneday";
}else if(today == 4){
	dayName = "Thursday";
}else if(today == 5){
	dayName = "Friday";
}else if(today == 6){
	dayName = "Saturday";
 }

if(hour<10){
	h="0";
}
if(minute<10){
	m="0";
}
if(second<10){
	s="0";
}
 
let divDom =document.querySelector("div#myClock");
divDom.innerHTML = `${h}${hour}:${m}${minute}:${s}${second}  ${dayName}`;
 
}

window.setInterval("now()",1000);