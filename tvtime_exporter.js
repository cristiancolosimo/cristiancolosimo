const elements = [...document.querySelectorAll('.show')];


const animeList = elements.map(el=>{
    const progress = el.querySelector(".progress-bar").style.width;
    const name = el.querySelector(".poster-details h2 a").textContent.trim();
    console.log(progress);
    return {
        progress,
        name
    }
});

const animeWatched = animeList.filter((el)=>{
    return el.progress == "100%";
})

const format = animeWatched.map(el=>{
    return el.name;
}).join("\n");



const myBlob = new Blob([format], {type : 'application/text'});
const url = URL.createObjectURL(myBlob);

console.log(url);
