// Navbar

let openNave = document.querySelector(".headerMeddle .image .i");
let hearerbottom = document.querySelector(".mediaheader");
let closeNave = document.querySelector(".mediaheader .close");

openNave.addEventListener("click", () => {
  hearerbottom.style.cssText = `  display: block;`;
});

closeNave.addEventListener("click", () => {
  hearerbottom.style.cssText = `  display: none;`;
});


let showmenu = document.querySelectorAll(".mediaheader .bar span");
let navbar = document.querySelector(".mediaheader .navbar ");
let cat = document.querySelector(".mediaheader .category ");

showmenu[0].addEventListener("click", () => {
  removeavtive(showmenu, 0);
  navbar.classList.add("open");
  cat.classList.remove("open");
});
showmenu[1].addEventListener("click", () => {
  removeavtive(showmenu, 1);
  navbar.classList.remove("open");
  cat.classList.add("open");
});

let showcont = document.querySelectorAll(".mediaheader .navbar .box .show");
let hidecont = document.querySelectorAll(".mediaheader .navbar .box .hide");
let content = document.querySelectorAll(".mediaheader .navbar .box .content");
for (let i = 0; i < 5; i++) {
  showcont[i].addEventListener("click", () => {
    content[i].classList.add("active");
    hidecont[i].classList.add("active");
    showcont[i].classList.remove("active");
  });
}
for (let i = 0; i < 5; i++) {
  hidecont[i].addEventListener("click", () => {
    content[i].classList.remove("active");
    showcont[i].classList.add("active");
    hidecont[i].classList.remove("active");
  });
}



// slidebar

let slideimage = document.querySelectorAll(
  ".home .left .control .images .image"
);
let slide = document.querySelectorAll(".home .left .slide .images .image");
let left_icon = document.querySelector(".left_icon");
let right_icon = document.querySelector(".right_icon");

slideimage.forEach((e, i = 0) => {
  e.addEventListener("click", () => {
    removeavtive(slideimage, i - 1);
    removeavtive(slide, i - 1);
  });
  let j = 1;
  right_icon.addEventListener("click", () => {
    if (j < 3) {
      if (j == 0) {
        removeavtive(slideimage, j + 1);
        removeavtive(slide, j + 1);
        j++;
      } else {
        removeavtive(slideimage, j);
        removeavtive(slide, j);
        j++;
      }
    } else {
      j = 3;
    }
  });
  left_icon.addEventListener("click", () => {
    if (j > 0) {
      j--;
      if (j == 2) {
        j--;
      }
      removeavtive(slideimage, j);
      removeavtive(slide, j);
    } else j = 0;
  });
  i++;
});

function removeavtive(arr, i) {
  arr.forEach((el) => {
    el.classList.remove("active");
  });
  arr[i].classList.add("active");
}

//footer

let link = document.querySelectorAll("footer .links .box ");
link.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.classList.contains("open")) {
      removeopen(e);
    } else {
      addopen(e);
    }
  });
});

function addopen(i) {
  i.classList.add("open");
}
function removeopen(i) {
  i.classList.remove("open");
}

// popup

let imgs = document.querySelectorAll(".home .slide .images .image img");
imgs.forEach((e) => {
  e.addEventListener("click", () => {
    let overlay = document.createElement("div");
    let popup = document.createElement("div");
    let popupimg = document.createElement("img");
    overlay.className = "overlay";
    popup.className = "popup";
    popupimg.src = "";
    document.body.appendChild(overlay);
    overlay.appendChild(popup);
    popup.appendChild(popupimg);
    popupimg.src = e.src;
    overlay.classList.add("open");
    overlay.addEventListener("click", (e) => {
      if (e.target.className !== "popup") {
        document.querySelector(".overlay").remove();
      }
    });
  });
});
