// scroll between divs
const scrollToDiv = (destination) => {
    event.preventDefault()
    const yOffset = -45; 
    const element = document.getElementById(destination);
    const yAxis = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: yAxis, behavior: 'smooth'});
}

// listening to window scroll
window.addEventListener("scroll", () =>{
    const element = document.getElementById('fixedbutton')
    let scrollPosition = window.top.scrollY
    if(scrollPosition > 625){
        element.style.opacity = "1";
        element.style.transition = "0.3s";
    } else {
        element.style.opacity = "0";
        element.style.transition = "0.3s";
    }
})

// slider
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");

const prevSlide = () => {
    event.preventDefault()
    const slidesContainer = document.getElementById("slides-container");
    const slide = document.querySelector(".slide");
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
}

const nextSlide = () => {
    event.preventDefault()
    const slidesContainer = document.getElementById("slides-container");
    const slide = document.querySelector(".slide");
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
}