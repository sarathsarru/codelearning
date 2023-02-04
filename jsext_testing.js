// let name1 = 'I\'sarath';
// //name1 = `sarru`;
// const message =`hi, I am ${name1}.`;
// console.log(message);
// if(7 < 9){
//     const message = 6
// console.log(message);
// }else if(7 < 9){
//     const message = 10
//     console.log(message);
// }else{
//     console.log(message);
// }
// //console.log(message);

// let name1 = 'sarath';
// let str1 = 'hello ' + name1;
// let str2 = `hello ${name1}`;
// console.log(str1);
// console.log(str2);


// // += operator

// let className = 'i am';
// className += ' sarath';
// className += ' sarru';
// console.log(className);

// let status2 = false; //declare a variable & initialize with boolean
// let str = status2.toString(); //convert variable to string
// let back = Boolean(str);  //convert string back to boolean

// //comparing strings
// let result = 'a' < 'b';
// console.log(result);  //op//true

// let result1 = 'a' < 'B';
// console.log(result1); //op//false


//javascript objects
//unordered collection of key-value pairs;
//each key-value pair is called property.
//let objectName = {key : 'value',    };
//key of a property can be a string
//value of a property can be any value, string, number, array,function


// //object literal notation
// let empty = {};
// let person = {
//     name : 'sarath',
//     // full name : 'sarath sarru', //spaces not allowed in key
//     'full name' : 'sarath kokkiligadda',
//     age : 29
// };
// console.log(person);
// console.log(person.name); //objectName.propertyname
// console.log(person['name']); //objectName['propertyName']
// console.log(person['full name']); //only array bracket allowed when there are spaces in key
// //console.log(person.full name); //error
// person.name = 'sarath sarru'; //modifying property
// console.log(person);
// person.city = 'hyderabad'; //adding property
// console.log(person);
// delete person.city; //deleting property
// console.log(person);
// console.log('name' in person); //checking property existence // op=>true
// //format => propertyName in objectname //in operator checks property existence





//static data is data whose size is fixed at compile time
//static data - primitive values(null,undefined,boolean,number,string,symbol,bigint)
//static data - reference values that refers to objects
//js primitive values vs reference values
//primitive values are atomic pieces of data
//reference values are objects that might consist of multiple values
//stack & heap memory - when variables are declared, js engine allocates memory 
//for them on two locations:stack & heap
//strings are primitive values in js unlike, java,c#
//property can be added to a reference value, primitive value cannot have properties


// let name2 = 'sarath';
// name2.alias = 'sarru';
// console.log(name2.alias); //op=>undefined bcoz name2 is string; object is not defined

// let age = 29;
// let newAge = age;
// console.log(newAge);

// let a = 29;
// let b = a;
// b = b +1;
// let c = b;
// console.log(c);  //op=>30

// let person = {
//     name : 'sarath',
//     age : 29,
//     prof : 'designer'
// };
// let member = person;
// member.city = 'hyderabad';

// console.log(person);
// console.log(member);





//js arrays - an ordered list of values, 
//each value is called element specified by an index
//array can hold a values of mixed types.
//size of array is dynamic & autogrowing

// let scores = new Array();
// let scores2 = Array(10); 
// //js allows you to omit the "new" operator when you use array() cosntructor
// let scores3 = new Array(9,8,7,6);
// let athletes = new Array(3);
// let scores4 = new Array('red', 'blue');

// let arrayName = ['element1', 'element2', 4, 'red', 'blue']; //most used method to create array
// console.log(arrayName[2]);  //op=>2  // arrayName[index]

// //modify value of the element in an array
// let arrayName2 = [1, 2, 3, 'red', 'blue'];
// console.log(arrayName2);
// arrayName2[4] = 'orange';
// console.log(arrayName2);

// //getting array size
// let arrayName3 = [1, 2, 3, 'red', 'blue'];
// console.log(arrayName3.length);  //op=>5

// //adding an element into an array 
// let arrayName4 = [1, 2, 3, 'red', 'blue'];
// arrayName4.push('orange');  //use push() method //arrayName.push('newElement');
// console.log(arrayName4);

// //adding an element to beginnning of an array 
// let arrayName5 = [1, 2, 3, 'red', 'blue'];
// arrayName5.unshift('yellow'); //use unshift() method //arrayName.unshift('newElement');
// console.log(arrayName5); //op=>['yellow', 1, 2, 3, 'red', 'blue']

// //Removing an element from end of an array -outputs only last element
// let arrayName6 = [1, 2, 3, 'red', 'blue'];
// const lastElement = arrayName6.pop() //use pop() method 
// //declare last element & initialize value by using pop
// console.log(lastElement);  //op=>blue

// //Removing an element from beginning of an array -outputs only first element
// let arrayName7 = [1, 2, 3, 'red', 'blue'];
// const firstElement = arrayName7.shift() //use shift() method 
// //declare last element & initialize value by using pop
// console.log(firstElement);  //op=>1

// //finding an index of an element in an array
// let arrayName8 = [1, 2, 3, 'red', 'blue'];
// let index = arrayName8.indexOf(3);  //use indexOf() method 
// console.log(index);
// //index of not existed elements of array gives output -1

// //check if the value in the array or not
// let arrayName9 = [1, 2, 3, 'red', 'blue'];
// //use Array.isArray() method
// console.log(Array.isArray(arrayName9));  //op=>true







// js arithmetic operators


//addition operator(+)
// let sum = 10.12+20.28;
// console.log(sum);  //0p=>30.4
// let sum2 = '10.12'+'20.28'; 
// console.log(sum2); //op=>10.1220.28  //concatenate if both  or either values are strings
// //if either value is Nan, result is NaN
// //infinity+infinity=NaN
// //-infinity, -infinity = -infinity
// //infinity, -infinity = NaN
// //+0,+0 = +0
// //-0,+0 = +0
// //-0,-o =-0


// //subtraction operator(-)
// let result2 = 30-10;
// console.log(result2);  //op=>20
// //if either value is Nan, result is NaN
// //infinity+infinity=NaN
// //-infinity, -infinity = -infinity
// //infinity, -infinity = infinity
// //+0,+0 = +0
// //+0,-0 = -0
// //-0,-o = +0


// //multiplication operator(*)
// let result3 = 5*3;
// console.log(result3);  //op=>15
// let result4 = '5' * 3;
// console.log(result4);  //op=>15
// //if either value is NaN, result is NaN
// //infinity, 0, = NaN
// //infinity, positive number, = infinity
// //infinity, negative number, = -infinity
// //infinity, infinity, = infinity

// // Divide operator(/)
// let result5 = 7/2;
// console.log(result5);  //op=>3.5
// //if either values are NaN, result is NaN
// //a number, 0, = infinity
// //infinity, infinity, =NaN
// //0, 0, = NaN
// //infinity, a postive number, = infinity
// //infinity, a negative number,= -infinity


// //using js arithmetic operators with objects
// let energy = {
//     valueOf(){      //valueOf method
//         return 100;
//     },
// };
// let currentEnergy = energy - 10;
// console.log(currentEnergy);  //op=>90
// currentEnergy = energy + 100;
// console.log(currentEnergy);   //op=>200
// currentEnergy = energy / 2;
// console.log(currentEnergy);   //op=>50
// currentEnergy = energy * 1.5
// console.log(currentEnergy);   //op=>150

// let energyy = {
//     toString(){      //toString method
//         return 100;
//     },
// };
// let currentEnergyy = energyy - 10;
// console.log(currentEnergy);  //op=>90
// currentEnergy = energyy + 100;
// console.log(currentEnergy);   //op=>200
// currentEnergy = energyy / 2;
// console.log(currentEnergy);   //op=>50
// currentEnergy = energyy * 1.5
// console.log(currentEnergy);   //op=>150


//js reminder operator(%)
//sign of remainder is same as sign of dividend
// //using remainder operator with positive dividend
// let remainder = 10 % 3;
// console.log(remainder);  //op=>1
// //using remainder operator with negative dividend
// let remainder2 = -10 % -3;
// console.log(remainder2);  //op=>-1

// let remainder3 = Infinity % 2; //op=>NaN
// let remainder4 = 10 % 0; //op=>NaN
// let remainderr4 = 0 % 10; //op=>0
// let remainder5 = Infinity % infinity; //op=>NaN
// let remainder6 = 10 % Infinity; //op=>10

// //using remainder operator to check if number is odd even
// let numb = 14;
// if(numb % 2 == 0){
//     console.log(`${numb} is an even number`)
// }else{
//     console.log(`${numb} is an odd number`)
// }

// let num = 13;
// let isOdd = num % 2;
// function isOdd(num){
//     return num % 2;
// }

// const number = 13;
// const isOddo = (number) => num % 2;

// //remainder vs modular operator
// const mod = (dividend, divisor) =>((dividend%divisor)+divisor)%divisor;
// console.log('remainder: ', 10%3); //op=>1
// console.log('modulo: ', mod(10,3)); //op=>1
// console.log('modulo: ', mod(-10,3)); //op=>2
// console.log('modulo: ', mod(10,-3)); //op=>-2
// //Two values of the same sign, the two are equivalent, 
// // but when the operands are of different signs, 
// // the modulo result always has the same sign as the divisor, 
// // while the remainder has the same sign as the dividend



// // js assignment operators
// // let a = b;
// let counter = 0;
// counter = counter +1;
// let counter1 = 10;
// counter1 += 1;
// console.log(counter);  //op=>1
// console.log(counter1);  //op=>11

// a=b , a=b
// a+=b, a=a+b
// a-=b, a=a-b
// a*=b, a=a*b
// a/=b, a=a/b
// a%=b, a=a%b  //assigns result of modulo b to a
// a&=b, a=a%b //assigns result of a AND b to a
// a|=b, a=a|b  //assigns result of a OR b to a
// a<<=b, a=a<<b
// a>>>=b, a=a>>>b


// // chaining js assignment operators
// let a=10, b=20, c=30;
// a=b=c;   //all variables are 30 //js evaluates from right to left


// js Unary Operators explained
// 
