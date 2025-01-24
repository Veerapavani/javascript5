console.log(window);
console.log(document);
console.log(document.URL);
console.log(document.doctype);
console.log(document.head);
console.log(document.title);
document.title = "amazon"
console.log(document.body);


let image = document.images
console.log(img);
// console.log(img[0]);
// console.log(img[1]);
// console.log(img[2]);

// for(let i=0; i<=img.length; i++){
//     console.log(img[i]);
//     img[i].style.height = "200px"
//     img[i].style.width = "200px"
//     img[i].style.borderRadius = "100%"
//     img[i].alt = "image"
// }
// /document.getElementsByClassName
// let a1 = document.getElementsByClassName("demo1")
//     console.log(a1);
//     console.log(a1[0]);
//     console.log(a1[0].textContent);
//     a1[0].textContent = "hello world"
//     a1[0].style.color = "red"
//     console.log(a1[1]);

// let b = document.getElementsByTagName("ol")
// console.log(b);
// console.log(b[1]);
// b[1].style.backgroundcolor = "crimson"


// let c = document.getElementsByName("demo2")
// console.log(c);
// console.log(c[1]);

//document.querySelector
//-->value should be passes using css symbol

//document.querySelectorAll
//-->value should be passes using css symbol
//-->will return reference of node-list
let f = document.querySelector(".demo1")
console.log(f);

//document.querySelector
//-->value should be passes using css symbol
//-->will return reference of first element
let d = document.querySelector("#demo")
console.log(d);
//document.querySelectorAll
//-->value should be passes using css symbol
//-->will return reference of node-list
let e = document.querySelectorAll("#demo")
console.log(e);
console.log(e[0]);

let g = document.querySelectorAll(".demo1")
console.log(g);

// //events in doms 
// // --> types:-
// 1) KeyboardEvent
//     //key up
//     //key-down 
//     //key press
// 2)mouse -event
//   // onmouseover
//   // onmouseleave
//   //dbclick
// 3) form event 
//     //input
//     //focus
//     //blur
function event1()
{
    console.log("hello-world");
}