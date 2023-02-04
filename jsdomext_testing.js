// js DOM
//DOM is an API for manipulating HTML documents
//DOM is cross platform & language independent ways of manipulating HTML, XML documents
//DOM tree: document =root node>child node(<html>)(document element)
//Each node in DOM tree is identified by node type. 
//js uses integer numbers to determine node types.


//constant = Node.ELEMENT_NODE, value =1, an element node like <p> or <div>
//Node.TEXT_NODE, 3, the actual text inside an element or attr
// Node.CDATA_SECTION_NODE, 4, A CDATASection such as <!CDATA[[..]]>
// Node.PROCESSING_INSTRUCTION_NODE, 7, <?xml-stylesheet..?>
// Node.COMMENT_NODE, 8, <!...>
// Node.DOCUMENT_NODE, 9, A document node
// Node.DOCUMENT_TYPE_NODE, 10, <!DOCTYPE html>
// Node.DOCUMENT_FRAGMENT_NODE, 11, A document fragment node

// Node.nodeType //to get type of node
//if(node.nodeType == Node.ELEMENT_NODE){
//     let name = node.nodeName;
// }


// nodeName & nodeValue
// if node type is element node, 
// node name is always same as element's tag name, node value is null

//Node & Element

//Node is a generic name of any object in DOM tree. can be any built-in
//DOM element such as document, or it can be any HTML tag specified in HTML
//document like <div> or<p>

//Element is a node with a specific node type, Node.ELEMENT_NODE, which equal to 1

// getElementById() & querySelector() returns an object with element type
//getElementByTagName() or querySelectorAll() retuns NodeList which is collection of nodes

//<body> is child node of <html> //<html> is parent node of <body> node
//<body> node is sibling of <head> node; both share same parent <html>







//Selecting Elements


//js getElementById() method
const elementt = document.getElementById('#id');
//js getElementByName() method
// const element2 = document.getElementByName('name2');

//for html file(jsdomext_testing.html), external js, getElementByName()
let btn = document.getElementById('btnRate');
let output = document.getElementById('output');

btn.addEventListener('click', () => {
    let rates = document.getElementsByName('rate');
    rates.forEach((rate) => {
        if(rate.checked){
            output.innerText = `You selected: ${rate.value}`;  //{name.value}
        }
        });
});
//getElementByName() returns a live NodeList of elements with specified name.
//NodeList is an array-like object, not an array object


// js- getElementByTagName() method 
//accepts a tag name & returns a  live HTML collection of elements  with 
//matching tag name in the order which they appear in document. eg.<h1>,<p>,<div>
//HTML collection is an array-like object, like arguments object of function

let btn2 = document.getElementById('btnCount2');
btn2.addEventListener('click', () =>{
    let headings = document.getElementsByTagName('h2');
    alert(`The number of H2 tags: ${headings.length}`);
});


// js- getElementByClassName() method 
let menu = document.getElementById('menu');
let items = menu.getElementsByClassName('item');
let data = [].map.call(items, item => item.textContent);
console.log(data); 


//js querySelector() & querySelectorAll() methods
//querySelector() used to find first element that matches 1 or more CSS selectors.
//querySelectorAll() used to find all elements that matches 1 a CSS selector or group of css selectors.
//querySelectorAll() returns a static NodeList of elements that matches css selector
//querySelector() is method of element interface.
//querySelector() method is available on the document object or any element object
// let element = parentNode.querySelector('selector');

//NodeList is an array like object, not an array object.
//To convert NOdeList to array, you use Array.from() method
// let nodeList =  document.querySelectorAll(selector);
// let elements = Array.from(nodeList);

//universal selector(*) - matches all elements of any time
let element6 = document.querySelector('*');
let element7 = document.querySelectorAll('*');

//type selector - to select elements by node name .eg.a selects all <a> elements
let firstHeading = document.querySelector('h1');

//class selector - to find element with given css class (.classname)
let note2 = document.querySelector('.menu-item');

//id selector - to select element based on value of its id (#id)
let logo = document.querySelector('#logo');

//attribute selector - select all elements that have a given attribute
//[attribute] , [attribute=value] , [attribute~=value] ,,,, =,~=,|=,$=,*$*
let autoplay = document.querySelector('[autoplay]');

//grouping selector - to group multiple selectors (selector, selector, ...)
let elements7 = document.querySelectorAll('div, p');



//Combinators
//descendant combinator - use space( )descendant ,,
// to find descendant of the node (selector selector)
let links = document.querySelector('p a');

//child combinator(>) - finds all elements that are direct child of first element
//syntax: selector > selector
let listItems = document.querySelectorAll('ul > li');  //('ul.nav > li')

//general sibling combinator(~) - selects siblings that share same parent
// syntax: selector ~ selector
let links2 = document.querySelectorAll('p ~ a');

//adjacent sibling combinator(+) - selects adjacent siblings
//syntax: selector + selector
let links3 = document.querySelector('h1 + a');



//pseudo
//psuedo-classes(:) - matches elements based on their states
// syntax-   element:state
// let listItem = document.querySelectorAll('li:nth-child');

//pseudo-elements(::) - represent entities that are not included in document
// let links7 = document.querySelector('p::first-line');





// js get the parent element parentNode
//let parent =node.parentNode;  //parentNode is read-only
//document & documentFragment nodes do not have a parent, so parentNode is always null

let note = document.querySelector('.note');
console.log(note.parentNode);


//js get the child elements of a node
let menu2 = document.getElementById('menu');
let children = menu2.children;
console.log(children);




//js siblings - syntax - nextElementSibling
// let nextSibling = currentNode.nextElementSibling;
let current = document.querySelector('.current');
let nextSibling = current.nextElementSibling;
console.log(nextSibling);
//to get all the next siblings
while(nextSibling){
    console.log(nextSibling);
    nextSibling = nextSibling.nextElementSibling;
}


// let prevSiblings = currentNode.prevElementSibling;
let current2 =document.querySelector('.current');
let prevSiblings = current2.previousElementSibling;
console.log(prevSiblings);
//to get all the next siblings
while(prevSiblings){
    console.log(prevSiblings);
    prevSiblings = current2.previousElementSibling;
}


// //get all the siblings
// let getSiblings = function(e){
//     //for collecting siblings
//     let siblings =[];
//     //if no parent, return no sibling
//     if(!e.parentNode){
//         return siblings;
//     }
//     //first child of the parent node
//     let sibling = e.parentNode.firstChild;
//     //collecting siblings
//     while(sibling){
//         if (sibling.nodeType === 1 && sibling !== e){
//             siblings.push(sibling);
//         }
//         sibling = sibling.nextSibling;
//     }
//     return siblings;
// }
// let siblings = getSiblings(document.querySelector('.current'));
// siblingText = siblings.map(e => e.innerHTML);
// console.log(siblingText);






//Manipulating elements

//createElement() - creates a new element
// let element = document.createElement(htmlTag);
//creating a new div example
let div = document.createElement('div');
// adding an id to div
div.id='content';
// adding a class to div
div.className='note';
//add html snippet
div.innerHTML = '<p>CreateElement example</p>';
//adding text to div
let text = document.createTextNode('createElement example');
div.appendChild(text);
//adding element to div
let h2 = document.createElement('h2');
h2.textContent = 'Add h2 element to the div';
div.appendChild(h2);
//creating a new list of items
let li = document.createElement('li');
li.textContent = 'Products';
menu.appendChild(li);

li = document.createElement('li');
li.textContent = 'About Us';

//select the ul menu element
const menu3 = document.querySelector('#menu');
menu.appendChild(li);

// attach div to document, you use appendChild() method
document.body.appendChild(div);

//creating a script element example eg. /hello.js
let script = document.createElement('script');
script.src = 'class.js';
document.body.appendChild(script);

function loadJS(url){
    let script = document.createElement('script');
    script.src = 'url';
    document.body.appendChild(script);
}
function loadJSAsync(url){
    let script = document.createElement('script');
    script.src = 'url';
    script.async = true;
    document.body.appendChild(script);
}







// js appendChild() method
// parentNode.appendChild(childNode);

//simple appendChild() example
function createMenuItem (name){
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}
//get the ul#menu5
const menu5 = document.querySelector('#menu5');
//add menu item
menu5.appendChild(createMenuItem('Home'));
menu5.appendChild(createMenuItem('Services'));
menu5.appendChild(createMenuItem('About Us'));


//moving a node within the document example
const firstList = document.querySelector('#first-list');
const everest = firstList.firstElementChild;
const secondList = document.querySelector('#second-list');
secondList.appendChild(everest);







//js textContent
// syntax:  let text = node.textContent
// let note = document.getElementById('note');
// console.log(note.textContent);


//textContent vs innerText
// let note = document.getElementById('note');
// console.log(note.innerText);
//innerText takes the css style into account & returns only human readable text
// Node.textContent = nexText;
// let note = document.getElementById('note');
// note.textContent = 'This is a note';






//js innerHTML - property of element that allows you to get or set the HTML markup
//contained within the element.
// element.innerHTML = 'new content';
// element.innerHTML;
//reading innerHTML property of an element
//syntax:  let content = element.innerHTML;
let menu6 = document.getElementById('#menu6');
console.log(menu6.innerHTML);


//setting innerHTML property of an element
//syntax : element.innerHTML = newHTML; ..this setting will replace the existing 
//content of an element with the new content.
//syntax: document.body.innerHTML = '';  ..can remove the entire contents of document
//by clearing the contents of the document.body element.

//HTML% specifies <script> tag inserted with innerHTML should not execute.








//js innerHTML vs createElement

