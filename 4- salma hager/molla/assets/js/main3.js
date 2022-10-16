let divTitle = document.querySelector(".div-size-title");
let divNumber = document.querySelector(".div-size-number");

divTitle.addEventListener("click", show);

function show(){
    divNumber.classList.toggle ("hide");
}

let divColorTitle = document.querySelector (".div-color-title");
let colors = document.querySelector (".colors");

divColorTitle.addEventListener("click", showDiv);

function showDiv(){
    colors.classList.toggle ("hide")
}

let here = document.querySelector(".here");
let molla = document.querySelector(".molla");

here.addEventListener("click", showHere);
function showHere(){
    molla.classList.toggle ("hide");
}

let theprice = document.querySelector(".theprice");
let pricee = document.querySelector(".pricee");

theprice.addEventListener("click", showHeree);
function showHeree(){
    pricee.classList.toggle ("hide");
}