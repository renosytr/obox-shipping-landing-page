// scroll between divs
function scrollToDiv(destination){
    event.preventDefault()
    const yOffset = -45; 
    const element = document.getElementById(destination);
    const yAxis = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: yAxis, behavior: 'smooth'});
}

// slider
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");

function prevSlide(){
    event.preventDefault()
    const slidesContainer = document.getElementById("slides-container");
    const slide = document.querySelector(".slide");
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
}

function nextSlide(){
    event.preventDefault()
    const slidesContainer = document.getElementById("slides-container");
    const slide = document.querySelector(".slide");
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
}