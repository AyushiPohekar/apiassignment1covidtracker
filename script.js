var container = document.createElement("container");
container.setAttribute("id", "container")
var form=document.createElement("form");
form.setAttribute("id","myform");

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");
input.setAttribute("required",true);

var sub=document.createElement("input");
sub.setAttribute("placeholder","Enter the name of country");
sub.setAttribute("type","submit");
sub.setAttribute("value","search");
form.append(input,sub);
document.body.append(form);

//code here create the div with id confirmed ,recovered here
//bootstrap card
let division1=document.createElement("div");
division1.setAttribute("id","confirmed");
document.body.append(division1);

let division2=document.createElement("div");
division2.setAttribute("id","recovered");
document.body.append(division2);

let division3=document.createElement("div");
division3.setAttribute("id","deaths");
document.body.append(division3);

let card = document.createElement("div");
card.setAttribute("class", "card");
let cardbody = document.createElement("div");
cardbody.setAttribute("class", "card-body");
card.append(cardbody);
cardbody.append(division1, division2, division3);
container.append(card);
document.body.append(container);

var formres=document.getElementById("myform");
formres.addEventListener("submit",(event)=>{
event.preventDefault();//to overcome default behaviour
var country=document.getElementById("country").value;
console.log(country);
var url=`https://api.covid19api.com/dayone/country/${country}`;

covid(url);
});

async function covid(url){
  
let response=await fetch(url);
console.log(response);
let data=await response.json();
console.log(data);
let index=data.length-1;

let confirmed=document.getElementById("confirmed");
let recovered=document.getElementById("recovered");
let deaths=document.getElementById("deaths");

confirmed.innerHTML="";
confirmed.append(`Total confirmed cases :${data[index].Confirmed}`);

recovered.innerHTML="";
recovered.append(`Total confirmed cases :${data[index].Recovered}`);

deaths.innerHTML="";
deaths.append(`Total confirmed cases :${data[index].Deaths}`);

}