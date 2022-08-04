const title = document.querySelector("h1");
const parrafo = document.querySelector("p");
const classParrafo = document.querySelector(".parrafo");
const idParrafo = document.querySelector("#pid");
const input = document.querySelector("input");

print(title);
print(parrafo);
print(classParrafo);
print(idParrafo);
print(input)

function print(text){
    console.log(text)
}

title.innerHTML = "Patito <br> Feo";
//title.innerText = "Patito <br> Feo";

//Get
print(title.getAttribute("titleh1"));
//Set
title.setAttribute("class","Rojo")
//Add Remove
title.classList.add("Verde");
//title.classList.remote("Rojo");

input.value = "Digrutt"


print(document.createElement("span"));
//Create
const image = document.createElement("img");
//Add Atribute
image.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9xqsZF_yYunSeg9vuq2UBWCGuuID6B7T1DCX2UQP&s")
//Add to idParrafo
idParrafo.append(image);

print(image);