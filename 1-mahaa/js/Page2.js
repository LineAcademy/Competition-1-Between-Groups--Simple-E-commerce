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
function removeavtive(arr, i) {
  arr.forEach((el) => {
    el.classList.remove("active");
  });
  arr[i].classList.add("active");
}

let text = document.querySelector(".headerbottom .category .text");
let links = document.querySelector(".headerbottom .category .links");

text.addEventListener("click", () => {
  text.classList.toggle("open");

  links.classList.toggle("open");
});

// Filtter

let openh2 = document.querySelectorAll(".content .filter > div ");
console.log(openh2);
openh2.forEach((e) => {
  if (e != openh2[0]) {
    e.addEventListener("click", () => {
      if (e.classList.contains("open")) {
        removeopen(e);
      } else {
        addopen(e);
      }
    });
  }
});

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

// page2 Script

let colors = document.querySelectorAll(".content .color span:first-of-type");
colors.forEach((e) => {
  let color = e.getAttribute("data-color");
  e.style.cssText = `
    background-color: ${color};
  `;
});

let filter = document.querySelector(".content .filter");

let filtericon = document.querySelector(".products .head .left a");
let closefiltericon = document.querySelector(".content .filter .head .span");
filtericon.addEventListener("click", () => {
  filter.classList.add("open");
});
closefiltericon.addEventListener("click", () => {
  filter.classList.remove("open");
});
