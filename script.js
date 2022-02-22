// var xhr = new XMLHttpRequest();
// xhr.open('GET',url);
// xhr.send();
// xhr.onload=function(){}
//Q.How to compare two JSON have the same properties without order?
//  a.var obj1 = { name: "Person 1", age:5 };
//  b.var obj2 = { age:5, name: "Person 1" };
//Anscode:
var obj1={
  name:"person1",
  age:5
};
var obj2={
  age:5,
  name:"person1"
};

let s1=JSON.stringify(obj1);
let s2=JSON.stringify(obj2);
console.log(s1===s2);

//Q.Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console
//Anscode:
var xhr=new XMLHttpRequest();
xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.onload=function()
{
  let data=JSON.parse(this.response);
   for(let i=0;i<data.length;i++)
 {
    let country=data[i];
        console.log(country.flag);
 }
}
xhr.send();

//Q.Use the same rest countries and print all countries name, region, sub region and population
//Anscode:
var xhr=new XMLHttpRequest();
xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.onload=function()
{
  let data=JSON.parse(this.response);
   for(let i=0;i<data.length;i++)
 {
    let country=data[i];
       console.log(country.name);
       console.log(country.region);
       console.log(country.subregion);
       console.log(country.population);
 }
}
xhr.send();