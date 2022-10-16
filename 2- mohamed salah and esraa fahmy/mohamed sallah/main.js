// bar in header in small width
document.querySelector('.bar-icon-links').addEventListener('click',()=>{
    document.querySelector('.bar-icon-links').classList.toggle('bar-icon-links-close')
})
// BAR CATOGERY IN HEADER CATOGERY
document.querySelector('.header-categories .bar-icon').addEventListener('click',()=>{
    document.querySelector('.bar-categories').classList.toggle('bar-categories-open')
    document.querySelector('.header-categories .bar-icon').classList.toggle('active')
})
document.querySelector('#main').addEventListener('click',()=>{
    document.querySelector('.bar-categories').classList.remove('bar-categories-open')
    document.querySelector('.header-categories .bar-icon').classList.remove('active')
})
// images in main page
let images=document.querySelectorAll('.main-hero .left section img');
let mainImage=document.querySelector('.main-box img');
images.forEach(img=>{
    img.addEventListener('click',(eo)=>{
        images.forEach((img)=>{
            img.classList.remove('active')
        })
        img.classList.add('active')
        mainImage.src=img.src;
    })
})
let i=1;
let arrImg=[`images/1.jpg`,`images/2.jpg`,`images/3.jpg`];
let prev=document.getElementById('prev');
let next=document.getElementById('next');
next.onclick=()=>{
    mainImage.src=arrImg[i];
    i++
    if(i>2){
        i=0;
    }
}
prev.onclick=()=>{
    mainImage.src=arrImg[i];
    i--
    if(i<0){
        i=2;
    }
}
// count in right page
let mince=document.getElementById('mince');
let plus=document.getElementById('plus');
let count=document.getElementById('value')
let price=document.querySelector('main #price span')
plus.onclick=()=>{
    count.innerHTML= +count.innerHTML+1;
    price.innerHTML= price.dataset.price*+count.innerHTML;
}
mince.onclick=()=>{
    count.innerHTML= +count.innerHTML-1;
    price.innerHTML= +price.innerHTML-+price.dataset.price;
    if(count.innerHTML<1){
        count.innerHTML=1;
        price.innerHTML=price.dataset.price;
    }
}
// INFORMATION PAGE CATOGERY
let infoCatogery=document.querySelectorAll('.information .info-catogery li');
let infoCatogeryPara=document.querySelectorAll('.information .info-hero');
infoCatogery.forEach((li)=>{
    li.addEventListener('click',(e)=>{
        infoCatogery.forEach(li=>{
            li.classList.remove('active')
        })
        li.classList.add('active');
        console.log(e.target.dataset.name)
        infoCatogeryPara.forEach((o)=>{
            o.style.opacity="0"
            o.style.height="0"
            o.style.position="absolute"
        })
        let activeInfo=document.querySelector(`.${e.target.dataset.name}`);
        activeInfo.style.opacity="1"
        activeInfo.style.height="fit-content"
        activeInfo.style.position="relative"
    })
})
// FOOTER LINKS
let footerLinks=document.querySelectorAll('footer .right .title .click')
footerLinks.forEach(link=>{
    link.addEventListener('click',(e)=>{
        e.target.parentElement.parentElement.classList.toggle('open-link')
    })
})

// WHEN SCROLL
let up=document.getElementById('up')
up.onclick=()=>{
    scrollTo(0,0)
}
window.onscroll=()=>{
    if(scrollY>=400){
        up.classList.add('up-show')
    }
    else{
        up.classList.remove('up-show')
    }
}