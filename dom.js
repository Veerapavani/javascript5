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

for(let i=0; i<=img.length; i++){
    console.log(img[i]);
    img[i].style.height = "200px"
    img[i].style.width = "200px"
    img[i].style.borderRadius = "100%"
    img[i].alt = "image"
}