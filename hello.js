// const albums = document.getElementsByClassName('albums')[0];

// const button = document.getElementById("addAlbum");
// console.log(button);

// button.addEventListener('click', function(e){
//     e.preventDefault();
    
//   const imageUrl = document.getElementById("img").value;
//   console.log(imageUrl);

// const description = document.getElementById("description").value;
// console.log(description);

// const album = createAlbum(imageUrl, description);
// albums.appendChild(album);
// })

// function createAlbum(imageUrl, description){

// const albumDiv = document.createElement('div');
// albumDiv.className = 'album';

// const image = document.createElement('img');
// image.setAttribute('src', imageUrl);

// const para = document.createElement('p');
// para.textContent = description;

// const albumFooter = document.createElement('div');
// albumFooter.className = 'albumFooter';

// const buttonDiv = document.createElement('div');
// const button1 = document.createElement('button');
// const button2 = document.createElement('button');

// buttonDiv.appendChild(button1);
// buttonDiv.appendChild(button2);

// const timeElement = document.createElement('span');
// timeElement.textContent = "9 mins";

// albumFooter.appendChild(buttonDiv);
// albumFooter.appendChild(timeElement);

// albumDiv.appendChild(image);
// albumDiv.appendChild(para);
// albumDiv.appendChild(albumFooter);

// return albumDiv;
// }






// // 4feb class
// //arrray methods -map, filter, reduce
// const numb = [1, 2, 5, 7, 9];
// //double/square the content of array
// function double(numb){
//   return numbers * 2;
// }
// //call back function - method passed inside another function
// const doubleArray = numb.map(function(numb){
//   return numb * 2;
// })
// console.log(doubleArray);

// //filter
// //greater than 5
// const greater = numb.filter(function(numb){
//   return numb > 5;
// })
// console.log(greater);

// //reduce
// //find sum of all numbers of array
// function findSum(numb){
//   let sum = 0;

//   for(let i=0; i<numb.length; i++){
//     sum = sum + numb[i];
//   }

//   return sum;
// }
// console.log(findSum(numb));

// const sumOfNumb = numb.reduce(function(sum, curr){
//   sum = sum + curr;
//   return sum;
// },0)
// console.log(sumOfNumb);

// //find largest number
// function findMax(numb){
//   let max = 0;
//   for(let i=0; i<numb.length; i++){
//     if (numb[i] > max){
//       max = numb[i];
//     }
//   }
//   return max;
// }
// console.log(findMax(numb));

// const greatestNumber = numb.reduce(function(max, curr){
//   if (curr > max){
//     max = curr;
//   }
//   return max;
// },0)

// //even greatest number
// const even1 = numb.filter(function(numb){
//   return numb % 2 === 0;
// }).reduce(function(max, curr){
//   if (curr > max){
//     max = curr;
//   }
//   return max;
// },0);
// console.log(even1);

// const users = [
//   {firstName : "sarath", lastName : "sarru", age : 29},
//   {firstName : "kiyara", lastName : "malhotra", age : 26},
//   {firstName : "vandana", lastName : "sharma", age : 28},
//   {firstName : "sara", lastName : "sar", age : 25},
//   {firstName : "sas", lastName : "sas", age : 30}
// ];
//  //list of full names
//  const fullNames = users.map(function(x){
//   return x.firstName + " " + x.lastName;
//  });
//  console.log(fullNames);

//  //find first names of all people who age is less than 29
//  const firstNames = users.filter(function(user){
//   return user.age < 29
//  }).map(function(x){
//   return x.firstName;
//  })
//  console.log(firstNames);



//  //promises
//  //asynchronous - not in order
//  console.log("hi");

//  setTimeout(function(){
//   console.log("hello");
//  },5000)

//  console.log("bye");
//  //callbacks has provided facility to implement asynchronous code

//  const cart = ["books", "toys", "shoes"];
 //1.create an order > 2.make payment > 3.show order summary > 4.update wallet
 
//  createOrder()
//  makePayment()

//  api.createOrder(cart, function(){
//   makePayment(function(){
//     api.orderSummary(function(){
//        api.updateWallet
//     })
//   })
//  })

// //pyramid of doom
// //callback hell
// //inversion of control
// //promise is object which defines eventual state of async operation
// const promise = createOrder(user);
// {Data: response}
// // promise states  --->[pending, fulfilled, rejected]
// //attaching callback functions to promise object
// promise.then(function(){
//   makePayment()
// }).then(function(){
//   showOrderSummary()
// }).then(function(){
//   updateWallet()
// })
// //objects are immutable



const api = "https://api.github.com/users/sarathsarru/";
const userDetails = fetch(api); //fetch is function provided by js
console.log(userDetails);

userDetails.then(function(data){
  console.log(data);
})

//creating promise
const promise =createOrder(cart);
promise.then(function(orderid){
  console.log(orderId);
}).catch(function(err){
  console.log(err.message);
})
function createOrder(cart){
  const promise = new promise(function(resolve, rejct){
if(!validateCart){
  const err = new Error("Error in creating cart");
}else{
  const orderId = "12345";
  setTimeout(function(){
    resolve(orderId);
  },5000);
 
}
  })
  return promise
}

function validateCart(){
  return true;
}