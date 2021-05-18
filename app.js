var arr;

fetch("/images").then(res => res.json()).then(r => arr = r).then( () => {
var elements = document.querySelectorAll(".imgs");
console.log(arr);

for(let i = 0; i < elements.length; i++){
elements[i].setAttribute("src" , `./images/${arr[i]}`);
}

});
