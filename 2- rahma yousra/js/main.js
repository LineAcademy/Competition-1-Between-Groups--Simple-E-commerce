// let myString='1,2,3,EE,l,z,e,r,o,_w,e,b,_,s,c,h,o,o,l,2,0,z';
let mainImg=document.getElementById('mainImg');
let video=document.getElementById('video');
let img1=document.getElementById('img1')
let imgs=Array.from(document.querySelectorAll('.threeImgs img'))
let clickLeft=document.getElementById('clickLeft');
let clickRight=document.getElementById('clickRight');
let currenIndex=0;
let closeSidebar=document.getElementById('closeSidebar');
let openSidebar=document.getElementById('openSidebar')
let sideBarNavs=document.querySelectorAll('.sideBar .navs .nav-item .nav-link');
console.log(sideBarNavs);


function removeMenu() {
    document.getElementById('itemListMenu').classList.add('d-none');
    document.getElementById('menu').classList.remove('active');
}

function removeCategory(){
    document.getElementById('itemListCategory').classList.add('d-none');
    document.getElementById('category').classList.remove('active');
}

sideBarNavs.forEach(function(ele){
    ele.onclick=function()
    {
        if(this.innerHTML=='Category')
        {
            removeMenu()
            document.getElementById('itemListCategory').classList.remove('d-none');
            document.getElementById('category').classList.add('active');
        }
        else{
            removeCategory()
            document.getElementById('itemListMenu').classList.remove('d-none');
            document.getElementById('menu').classList.add('active');
        }
    }
})

closeSidebar.onclick=function()
{
   document.getElementById('sideBar').style.left='-100%';
   document.getElementById('sideBar').style.transition='all 3s'
}

openSidebar.onclick=function()
{
    document.getElementById('sideBar').style.left='0px';
    document.getElementById('sideBar').style.transition='all 1s'
}

//start Loading page
window.onload=function()
{
    document.getElementById('one').classList.remove('d-none');
    document.getElementById('navOne').style.cssText="border-bottom: 2px solid #92b25a;";
    document.getElementById('navOneLink').style.cssText='color: #a6c76c !important';
    mainImg.classList.remove('d-none')
    mainVideo.classList.add('d-none')
    mainImg.src=img1.src;
    img1.style.cssText='border: 2px solid #a6c76c;'
}
// End loading page




// start add to cart
function hideBorder()
{
    imgs.forEach(function(ele){
        ele.style.cssText='border: none'
    })
}

imgs.forEach(function(ele){
    ele.onclick=function()
    {
    mainImg.classList.remove('d-none')
    mainVideo.classList.add('d-none')
    src=this.currentSrc;
    mainImg.src=src;
    hideBorder()
    this.style.cssText='border: 2px solid #a6c76c;'
    video.style.cssText='border: none'
    }

})
video.onclick=function()
{
    mainImg.classList.add('d-none')
    mainVideo.classList.remove('d-none')
    hideBorder()
    video.style.cssText='border: 2px solid #a6c76c;'
}


let increase=document.getElementById('increase');
let decrease=document.getElementById('decrease');
increase.onclick=function()
{
    let counter=document.getElementById('counter');
    counter.innerHTML++;
}
decrease.onclick=function()
{
    let counter=document.getElementById('counter');
    counter.innerHTML==0?decrease.setAttribute('disabled'):''
    counter.innerHTML--;
}


// start getNextImage && getPrevImage
clickRight.addEventListener('click',getNextImg)
function getNextImg()
{
  currenIndex++;

  if(currenIndex==imgs.length){
    mainImg.classList.add('d-none')
    mainVideo.classList.remove('d-none')
    hideBorder();
    video.style.cssText='border: 2px solid #a6c76c;';
  }
 
    mainImg.classList.remove('d-none')
    mainVideo.classList.add('d-none')
    src=imgs[currenIndex].currentSrc;
    mainImg.src=src;
    hideBorder()
    imgs[currenIndex].style.cssText='border: 2px solid #a6c76c;'
    video.style.cssText='border: none'

}

clickLeft.addEventListener('click',getPrevImg)
function getPrevImg()
{
    currenIndex--;
    if(currenIndex<0)
    {
        currenIndex=imgs.length-1;
        mainImg.classList.add('d-none')
        mainVideo.classList.remove('d-none')
        hideBorder();
        video.style.cssText='border: 2px solid #a6c76c;';
    }
    else{
        mainImg.classList.remove('d-none')
        mainVideo.classList.add('d-none')
        src=imgs[currenIndex].currentSrc;
        mainImg.src=src;
        hideBorder()
        imgs[currenIndex].style.cssText='border: 2px solid #a6c76c;'
        video.style.cssText='border: none'
    }
}

// end getNextImage && getPrevImage

// start mouseEvent
mainImg.onmousemove=function(e)
{
    var x=e.offsetX;
    var y=e.offsetY;
    console.log(x);
    console.log(y);
    mainImg.style.
    mainImg.style.backgroundPositionX= -x +"px";
    mainImg.style.backgroundPositionX= -y +"px";
}
// end mouseEvent


// end add to cart



// start Navs
let navs = document.querySelectorAll('#navs ul li a');
let divs = document.querySelectorAll('.content div');
function hideContent()
{
  divs.forEach(function(ele){
      
      ele.classList.add('d-none');
      document.getElementById('navOne').style.cssText="border-bottom: none;";
})
}  

navs.forEach(function(ele){
    hideContent()
    ele.onclick=function()
    {
      
      navs.forEach(function(ele)
        {
            ele.classList.remove('active');
            ele.style.cssText="color:black !important;border-bottom: none";
        })
        this.classList.add('active');
        this.style.cssText="color:#a6c76c !important;border-bottom: 2px solid #92b25a;";
        console.log(this.innerHTML);
        if(this.innerHTML=='Description')
        {
            hideContent();
            document.getElementById('one').classList.remove('d-none');
        }
        else if(this.innerHTML=='Addional Information')
        {
            hideContent();
            document.getElementById('two').classList.remove('d-none');
        }
        else if(this.innerHTML=='Shipping &amp; Returns')
        {
            hideContent();
            document.getElementById('three').classList.remove('d-none');
        }
        else{
            hideContent();
        }
    }
})
// End Navs
