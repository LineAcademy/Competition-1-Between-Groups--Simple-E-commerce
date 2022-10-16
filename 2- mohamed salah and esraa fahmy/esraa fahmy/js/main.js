
$(".colorCh li").eq(0).css("background-color","blue");
$(".colorCh li").eq(1).css("background-color","brown");
$(".colorCh li").eq(2).css("background-color","blue");
$(".colorCh li").eq(3).css("background-color","blueviolet");
$(".colorCh li").eq(4).css("background-color","yellow");
$(".colorCh li").eq(5).css("background-color","black");
$(".colorCh li").eq(6).css("background-color","navajowhite");
$(".colorCh li").eq(7).css("background-color","cadetblue");
$(".colorCh li").eq(8).css("background-color","chocolate");
$(".colorCh li").eq(9).css("background-color","grey");
$(".colorCh li").eq(10).css("background-color","green");
// ==================
$(".colorCh li").eq(11).css("background-color","magenta");
$(".colorCh li").eq(12).css("background-color","mediumvioletred");
$(".colorCh li").eq(13).css("background-color","lightcoral");
$(".colorCh li").eq(14).css("background-color","blueviolet");
$(".colorCh li").eq(15).css("background-color","lawngreen");
$(".colorCh li").eq(16).css("background-color","khaki");
$(".colorCh li").eq(17).css("background-color","wheat");
$(".colorCh li").eq(18).css("background-color","firebrick");
$(".colorCh li").eq(19).css("background-color","plum");
$(".colorCh li").eq(20).css("background-color","peru");
$(".colorCh li").eq(21).css("background-color","peachpuff");
// =============

// =====================================

let bordUp  = document.querySelector(".bordUp");

onscroll =function(){
    // console.log(scrollY)

    if(scrollY >=105){
        bordUp.classList.remove("d-none")
    }else{
        bordUp.classList.add("d-none")

    }
}


bordUp.onclick = function(){
    scroll({
        top:0 ,
        behavior:"smooth"
    })
}


// =============================

let iconChange = document.querySelector(".iconChange");
let sectionLayer = document.querySelector(".sectionLayer");

let iconBars = document.getElementById('iconBars')
let closeIcon =document.getElementById('closeIcon'); 
let btnShowing =document.getElementById('btnShowing'); 

iconBars.onclick = function(){
    // if(Screen > '1000px'){
    //     console.log("k")
    // }
    //  if(<"1000px"){
    //     console.log("o")
    // }
    sectionLayer.style.cssText ='display: flex !important';

}

closeIcon.onclick =function(){

    sectionLayer.style.cssText ='display: none !important';

}

btnShowing.onclick =function(){

    sectionLayer.style.cssText ='display: none !important';

}



