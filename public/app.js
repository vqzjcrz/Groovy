document.addEventListener('DOMContentLoaded', () => {



var elements = document.querySelectorAll('.nav-items');



for(let i = 0; i < elements.length; i++){

    elements[i].addEventListener('click', () => alert('This is not yet functional.'))

}



document.querySelector('.menu-bttn').addEventListener('click', () => {



    var menu = document.querySelector('.nav');



    var arrow = document.querySelector('.msvg');



    if(menu.style.transform == "translateY(0%)"){

        menu.style.transform = "translateY(-100%)";

        arrow.style.transform = "rotate(0deg) translateZ(0)";

    }else{

        menu.style.transform = "translateY(0%)";

        arrow.style.transform = "rotate(-180deg) translateZ(0)";

    }



})





var array;



fetch("./public/data.json").then(res => res.json()).then(j => array = j).then(() => {



    var elements = document.querySelectorAll('.imgs');



    var shuffle = [];



    for(let i = 0; i < elements.length; i++){

        var url = array[Math.floor(Math.random()*array.length)];



        if(shuffle.includes(url)){

            i--;

        }else{

            shuffle.push(url);

        }



    }



    for(let i = 0; i < elements.length; i++){

        elements[i].setAttribute('src', `./public/${shuffle[i]}`);

        elements[i].addEventListener('click', () => alert(shuffle[i]));

    }



});



});





window.scrollTo(0,0);

console.log('ass');


