// /*console.log(a);
// let a = 10;
// let b = 20;*/

// var a = 100;
// let b = 150;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// // console.log(a);
// //     console.log(b);
// //     console.log(c);

//     const c = 20;
//     function x(){
//         const c = 100;
//         console.log(c);
//     }

// //array method - includes
// const availableSize = ["s", "m", "l", "xl", "2xl"];
// const readlineSync = require("readline-sync");
// const userSize = readlineSync.question("which size you want (s/m/l/xl/2xl) - ");
// const isSizeAvailable = availableSize.includes(userSize);
// if(isSizeAvailable){
//     console.log("size is available");
// }else{
//     console.log("size not available")
// }
   

// //array method - sort
// const fruits = ["lemon", "cherry", "grapes", "mango"];
// fruits.sort();
// console.log(fruits);

// const numbers = [1,2,11,3,25,4,32];
// function sortInAscendingOrder(a,b){
//     return a-b
// }
// function sortInDescendingOrder(a,b){
//     return b-a
// }
// numbers.sort(sortInAscendingOrder);
// console.log(numbers);



// //split & join
// const inputStr = "madam";
// console.log(inputStr);
// const arrOfChar = inputStr.split("");
// arrOfChar.reverse();
// const reversedStr = arrOfChar.join("");
// console.log(reversedStr);


// //spread array
// const arr1 = [1,2,3,4,5];
// const arr2 = [6,7,8,9];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);
// const arr4 = [...arr1, ...arr2, 10, 11];
// console.log(arr4);


// //destructing array
// const numbers = [1,2,3,4, ["html", "css", "js"]];
// //const [a,b,c,d,e] = [1,2,3,4, ["html", "css", "js"]];
// const [,,,,e] = numbers;

// console.log(e);


// //swap number
// let a = 5;
// let b = 10;
// [a,b]=[b,a];
// console.log("A-",a);
// let name = "sarath";
// let value = "29";
// let id = 
// const {name,value,id}=data;

// let temp = ["Geeks", "for", "Geeks"];
// for (let i=0; i<temp.length; i++){
//     if(temp[i]=="Geeks"){
//         console.log(i);
// }
// }



// //create an object
// const obj = {
//     name :"sarath",
//     age : 29,
//     job : "coder"
// };  //object literal
// //property is kade of key & value
// console.log(obj);
// console.log(obj.name);
// console.log(obj["name"]);


// //functions as property
// const obj = {
//     name : "sarath",
//     greetMessage : function(){
//         console.log("Hello Sarath welcome")
//     },
//     bye(){
//         console.log("tata bye bye");
//     }
// }
// obj.greetMessage();
// obj.bye();

//computed properties
// const readlineSync = require("readline-sync");
// const key = readlineSync.question("what do you want to know -");
// const courses = readlineSync.question("which course you want to learn -");
// const obj = {
//     name : "sarath",
//     age : 29
//    // [courses]: "course not available"
// };
// const isPropertyFound = "name" in obj;
// console.log(isPropertyFound);
// // obj.city = "hyd";
// // obj.state = "AP";
// // console.log(obj[courses]);
// // console.log(obj["name"]);
// for(let item in obj){
//     console.log(item);
// }



// //object reference & shallow copy
// const person1 = {
//     name : "sarath",
//     age : 29,
//     address : {
//         city : "mumbai",
//         state : "MH"
//     }
//};
// //shallow copy
// const person2 = Object.assign({}, person1);
// console.log(person2);
// person2.name = "kiyara";
// person2.address.city = "delhi";
// person2.address.state = "delhi";
// console.log(person1);
// console.log(person2);

// //deep copy
// console.log(person1);
// const person2 = person1;
// person2.name = "kiyara";
// console.log(person1);
// console.log(person2);


// //deep copy
// const obj = {
//         name : "sarath",
//         age : 29,
//         address : {
//             city : "mumbai",
//             state : "MH"
//             }
//         }
// // let key = "pincode";
// // obj[key] = "523155";   
// console.log(obj);

// // console.log(Object.keys(obj));
// function getCopiedObject(source){
//     const targetObj = {};
//     const keys = Object.keys(source);   //[city, state]
//     for (let key of keys){
//         if(typeof source[key] === "object"){
//             targetObj[key] = getCopiedObject(source[key])
//         }else{
//         targetObj[key] = source[key]
//         }
//     }
//     return targetObj;
// }
// const copiedObj = getCopiedObject(obj);
// copiedObj.name = "kiyara";
// copiedObj.address.city = "hyd";
// copiedObj.pincode = "123456";
// console.log(copiedObj);

// const copiedObj = {...obj, address: {...obj.address}}; //for nested objects
// copiedObj.name = "kiyara";
// console.log(obj);
// copiedObj.address.city = "delhi";
// console.log(obj);
// console.log(copiedObj);




// //optional chaining
// const user = {
//     name : "sarath",
//     age : 29,
//     address : {   //optional for user to enter
//         city : "mumbai",
//         state : "MH"
//         },
//     likes : "eat sleep drink repeat",
// // method2
//     getDisplayMessage : function () {
//     console.log("welcome sarath");
//     }
// }
// user.getDisplayMessage();
// console.log(user.getDisplayAddress?.());

//  method1
// console.log(user.address?.city);
  
// if (user.address !== undefined){
//     console.log(user.address.city);
// }else{
//     console.log("address not found")
// }



// //destructuring object
// let obj = {
//     name : "sarath",
//     age : 29,
//     address : {   //optional for user to enter
//         city : "mumbai",
//         state : "MH"
//         },
//     courses : ['html', 'css', 'js', ' react'],
// }
// let {name, address, courses} = obj;
// // console.log(name);
// // console.log(name, ...rest);

// let {name : userName} = obj;
// console.log(userName);
// console.log(name);

// let{address: {city, state}} = obj;
// console.log(city);



//property shorthand
// function getObjects(name, city){
//     // return{
//     //     name : name,
//     //     city : city
//     // }
//     return{
//         name,
//         city
//     }
// }
// const obj = getObjects("prakash","mumbai");
// console.log(obj);


// const student = "kiyara";
// const course = "upsc";
// console.log({student, course});
// console.log(student, course);



// //this keyword
// const user1 = {
//     name : "sarath",
//     age : 29,
//     showInfo(){
//         // console.log(name);  //name is not defined in function scoop
//         console.log(this.name);
//     }
// }
// user1.showInfo();
// console.log(user1.age);

// const user2 = {
//     name : "kiyara",
//     age : 29,
//     // displayMessage: () => {
//     //     console.log(this.age);
//     // },    //arrow function doesn't have this
// }
// user2.showInfo = user1.showInfo;
// user2.showInfo();
// // user2.displayMessage();








//Function borrowing - call & Apply
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/sarathsarru/codelearning.git
// git push -u origin main
