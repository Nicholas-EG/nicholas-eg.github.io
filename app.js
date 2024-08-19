const slides = document.querySelectorAll('.slide');

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});
let counter = 0;

setInterval(()=>{
    counter = (counter + 1) % 5;
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}, 3 * 1000);