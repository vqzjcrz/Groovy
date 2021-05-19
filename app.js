var arr;

fetch("/images").then(res => res.json()).then(r => arr = r).then( () => {
var elements = document.querySelectorAll(".imgs");
console.log(arr);

function shuffleArray(a) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
var array = shuffleArray(arr);

for(let i = 0; i < elements.length; i++){
elements[i].setAttribute("src" , `./images/${array[i]}`);
}

});
