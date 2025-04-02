const left = document.getElementsByClassName("left");
const right = document.getElementsByClassName("right");
const collectionitems = document.querySelector(".collection_items"
);

left.addEventListeners("click", ()=>{
    collectionitems.scrollBy({left:-200, behaviour:"smooth"});
});

right.addEventListeners("click", ()=>{
    collectionitems.scrollBy({left:10, behaviour:"smooth"});
});