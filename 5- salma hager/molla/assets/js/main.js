let list = document.querySelectorAll(".list");
let details = document.querySelectorAll(".details");

for (let i=0; i<list.length; i++) {
    list[i].addEventListener("click", function (){
        for (let j=0; j<list.length; j++) {
            list[j].classList.remove("active");
            // list[j].classList.remove("show");
        }
        this.classList.add("active");
        // this.classList.add("show");

        let dataFilter = this.getAttribute("data-filter");

        for (let k=0; k<details.length; k++){
            details[k].classList.remove("active");
            details[k].classList.add("hide");
            details[k].style.display = "none";
            // details[k].classList.remove("show");

            if(details[k].getAttribute("data-item") == dataFilter){
                details[k].classList.remove("hide");
                details[k].classList.add("active");
                details[k].style.display = "block";
                details[k].style.color = "#000";
                // console.log(details[k]);

            } else if (dataFilter == "description") {
                document.getElementById("none1").style.display = "none";
                document.getElementById("none2").style.display = "none";
                document.getElementById("none3").style.display = "none";
                document.getElementById("none1").style.color = "#000";
                document.getElementById("none2").style.color = "#000";
                document.getElementById("none3").style.color = "#000";
            }
        }
    })
}