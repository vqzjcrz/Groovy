var imgs = document.querySelectorAll(".imgs");

var json;

fetch("https://api.reddit.com/r/uhdnsfw/random.json").then(res => res.json()).then(j => json = j).then( () => {

var images = json.data.children;

for(let i = 0; imgs.length; i++){

    imgs[i].setAttribute("src", images[i].data.url);

}

});
