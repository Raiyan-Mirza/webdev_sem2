const newParagraph=document.createElement("p");
newParagraph.textContent = "this is a dynamically created paragraph"
console.log(newParagraph);
// append the new element to the container
const container= document.getElementById("container");
container.appendChild(newParagraph);
// remove element
// remove the first paragraph of container
const rev= document.querySelector("#continer p");
console.log(rev)
// or (without variable)
document.querySelector("#container p").remove();

const image= document.createElement("img");
image.setAttribute("src","https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/1/15/Yoriichi_colored_body_2.png/revision/latest?cb=20210502001804");
image.setAttribute("alt","yoriichi");
const gallery=document.getElementById("gallery");
gallery.appendChild(image);
  