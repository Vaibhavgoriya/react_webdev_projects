// let arr = [1, 5, 8, 6, 5];
// const data = (arr) => {
//   return arr.map((e) => (e % 2 == 0 ? e * 1 : e * 3));
// };
// console.warn(data(arr));

// task 2 : given arr create even array

//let arr = [1, 5, 8, 6, 5];
//const data = (arr) => {
//  return arr.filter((e) => e % 2 == 0);
//};
//
//const data1 = (arr) => {
//  arr.forEach((element) => {
//    if (element % 2 == 0) {
//      console.log(element);
//    }
//  });
//};
//
//console.warn(data(arr));
//console.warn(data1(arr));




const express = require("express");
const app = express();
const port = 3000;

app.get("/",(req,res) => res.send("Hello World"));

app.get("/student",(req,res) => res.send("Vaibhav Goriya"));

app.get("/University",(req,res) => res.send("RK University"));

app.get("/Collage",(req,res) => res.send("SOE"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));



//create end point / student name display , / university name display , /collage name display