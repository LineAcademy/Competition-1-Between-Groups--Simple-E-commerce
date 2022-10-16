//flip card bg
let products=document.querySelectorAll(".gallery-card .card-content");
//console.log(products);
products.forEach((product)=>
{
    let front=product.firstElementChild.getAttribute("hover-front");
    let back=product.firstElementChild.getAttribute("hover-back");
    product.addEventListener("mouseover", (e)=>
    {
        e.preventDefault();
        (back)? product.firstElementChild.style.backgroundImage=back:"";

       
    });
    product.addEventListener("mouseleave", (e)=>
    {
        e.preventDefault();
        (front)? product.firstElementChild.style.backgroundImage= front : "";
    });
     
});

//testimonials -------------------------------------------------------------------
let items = document.querySelectorAll('.testimonials .carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 3
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
});

//slide up button ---------------------------------------------------
var slide_btn = document.getElementById('slide_up_button');
var frstH=document.querySelector('.first-header-section');
window.onscroll=function() {
  if (window.scrollY > 200) {
        slide_btn.classList.add('show');
        frstH.classList.add('hide');

    } 
    else
    {
        slide_btn.classList.remove('show');
        frstH.classList.remove('hide');
    }
};

slide_btn.onclick=function(){
    window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth",
    })
};


// toggle menu
let btn=document.querySelector(".header .dropdown-toggle");
let dropMenu=document.querySelector(".header .dropdown .dropdown-menu");
btn.addEventListener("click",(e)=>{
    e.preventDefault();
  dropMenu.classList.toggle("show");
});