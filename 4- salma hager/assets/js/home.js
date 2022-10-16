//li if clicked -> class selected 
let size_lis = document.querySelectorAll("#size-select li");
size_lis.forEach((li)=>
{
    li.addEventListener("click", (e) => {
        size_lis.forEach((li) => {
          li.classList.remove("selected");
        });
    e.currentTarget.classList.add("selected");
    });
});


//swap product gallery
let product_imgs=document.querySelectorAll(".product-images-list li");
let writableElement = document.querySelector('.lightbox');
product_imgs.forEach((img) => {
    img.addEventListener("click", (e)=>
    {
      product_imgs.forEach((img)=> img.classList.remove("product-selected"));
      writableElement.innerHTML=img.innerHTML;
      img.classList.add("product-selected");
      writableElement.style.backgroundImage=`url(${img.children[0].src})`;
      writableElement.children[0].classList.remove("molla-img");
        
       
    });
  });

//zoom effect
function zoom(e){
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX/zoomer.offsetWidth*50
    y = offsetY/zoomer.offsetHeight*50
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
  }

// toggle color menu
let color_btn=document.getElementById("color-select");
let color_dropMenu=document.getElementById("color-dropdown");
color_btn.addEventListener("click",()=>{
  color_dropMenu.classList.toggle("show");
});

//quatity
let minus=document.getElementsByClassName("qtyminus")[0];
let plus=document.getElementsByClassName("qtyplus")[0];
let qtyInput=document.getElementById("qty-product");
minus.addEventListener("click",(e)=>
{
  e.preventDefault();
  (qtyInput.value == 1 )? qtyInput.value=1 : qtyInput.value=parseInt(qtyInput.value)-1
});
plus.addEventListener("click",(e)=>{ 
  e.preventDefault();
  qtyInput.value=parseInt(qtyInput.value)+1
});

//slider maxmize button
let maxbtn=document.getElementById("maxmize-btn");
maxbtn.addEventListener("click",()=>{
  let maxModal = document.getElementById('maxmizeModal');
  let vv= document.querySelector("#maxmizeModal .modal-body");
  console.log(vv);
  console.log(writableElement.innerHTML);
  vv.innerHTML=writableElement.innerHTML;
  console.log(vv.innerHTML);
});


