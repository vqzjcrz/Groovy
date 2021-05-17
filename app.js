var imgs = document.querySelectorAll(".imgs");

var json;

fetch("https://api.reddit.com/r/UHDnsfw/random.json").then(res => res.json()).then(j => json = j).then( () => {
console.log(json);
var images = json.data.children;
console.log(images);
for(let i = 0; imgs.length; i++){

    imgs[i].setAttribute("src", images[i].data.url);

}

});
