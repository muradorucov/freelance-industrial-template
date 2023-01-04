const body = document.querySelector("body")
const responsiveBn = document.querySelector(".responsive-btn")
const menu = document.querySelector(".menu-list")
const closeBtn = document.querySelector(".close-btn");
const menuLi = document.querySelectorAll(".menu-list li")
const counterList = document.querySelectorAll(".number span")
let topBtn = document.querySelector(".top-btn");


// <<<<<<<<<<<<<<< RESPONSIVE MENU >>>>>>>>>>>>>>>
function getMenuShow() {
    menu.classList.add("responsive-menu")
}

function getMenuDisabled() {
    menu.classList.remove("responsive-menu")
}
responsiveBn.addEventListener("click", getMenuShow)
closeBtn.addEventListener("click", getMenuDisabled)

menuLi.forEach((item) => {
    item.onclick = () => {
        //menu item click scroll to section
        sectionOffset = document.querySelector(`${item.title}`).offsetTop - 60
        window.scrollTo({ top: sectionOffset, behavior: "smooth" })
        // menu disabled
        getMenuDisabled()
    }
})

// <<<<<<<<<<<<<<<Statistics Section counter >>>>>>>>>>>>>>>

window.addEventListener('scroll', () => {
    const counterList = document.querySelectorAll(".number span")
    let sectionInnerHeight = window.innerHeight / 1;
    let sectionPositionTop = counterList[0].getBoundingClientRect().top;
    function counter(id, start, end) {
        let obj = document.getElementById(id),
            current = start,
            increment = end > start ? 1 : -1,
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, 250);
    }
    if (sectionInnerHeight > sectionPositionTop) {
        counter("count1", 0, 8);
        counter("count2", 0, 2);
        counter("count3", 0, 1);
        counter("count4", 0, 9);
    }
})

//Btn click scroll to window top
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
window.onscroll = () => window.scrollY > 500 ? topBtn.style.opacity = 1 : topBtn.style.opacity = 0