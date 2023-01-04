//scrollto
// let navlinks =document.querySelectorAll(".menu-list .scrollto")


//responsive-menu
const body = document.querySelector("body")
const responsiveBn = document.querySelector(".responsive-btn")
const menu = document.querySelector(".menu-list")
const closeBtn = document.querySelector(".close-btn");


responsiveBn.addEventListener("click", function () {
    menu.style.display = "block";
})


closeBtn.addEventListener("click", function () {
    menu.style.display = "none";
})



//counter
window.addEventListener('scroll', () => {
    const counterList = document.querySelectorAll(".number span")
    let sectionInnerHeight = window.innerHeight / 1;
    let sectionPosition = counterList[0].getBoundingClientRect().top;
    let counter = 0
    if (sectionInnerHeight > sectionPosition) {
        setInterval(() => {
            if (counter == 9) {
                clearInterval();
            } else {
                counter += 1;
                counterList[0].textContent = counter;

                if (counter <= 8) {
                } else {
                    counterList[0].textContent = "8";
                }

                if (counter <= 2) {
                    counterList[1].textContent = counter;
                } else {
                    counterList[1].textContent = "2";
                }

                if (counter <= 1) {
                    counterList[2].textContent = counter;
                } else {
                    counterList[2].textContent = "1";
                }

                if (counter <= 9) {
                    counterList[3].textContent = counter;
                } else {
                    counterList[3].textContent = "9";
                }
            }
        }, 250);
    }
})


//scroll to top
// Get the element
let topBtn = document.querySelector(".top-btn");
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
window.onscroll = () => window.scrollY > 500 ? topBtn.style.opacity = 1 : topBtn.style.opacity = 0


const menuLi = document.querySelectorAll(".menu-list li")
services = document.querySelector("#services")
menuLi.forEach((item) => {
    item.onclick = () => {
        console.log();
        // menu.style.display = "none";
        window.scrollTo({ top: document.querySelector(`${item.title}`).offsetTop-60, behavior: "smooth" })
        console.log({ top: document.querySelector(`${item.title}`).offsetTop-60, behavior: "smooth" });
    }
})
