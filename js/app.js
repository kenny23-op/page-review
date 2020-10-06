// UI Variables

// initial value set to 0 
let currentSlide = 0;
// create variable names to hold the slide and dot arrays
const slides = document.querySelectorAll('.slide')
const dots = document.querySelectorAll('.dot') 

// initialize to loop through the arrays
const start = function (current) {	
    slides.forEach((slide) => {
         slide.style.display = 'none'		
         dots.forEach((dot) => {			
             dot.classList.remove('active')		
            })	
        })	
        slides[current].style.display = 'block'	
        dots[current].classList.add('active')
    }

     // function will run when the next button is clicked
     const next = () => {
          currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++ 
          start(currentSlide)
        }
       
        // function will run when prev button is clicked
        const prev = () => {
             currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide-- 
             start(currentSlide)
            } 

// will automatically run slides every 8secs
setInterval(() => {
     next()
    }, 8000);

// Loop through the dots and adds next, prev click functionalities
dots.forEach((dot, index) => {
     dot.addEventListener("click", () => {
          start(index)
           currentSlide = 1
        })
   }) 
   
// Event Listeners for HTML Loaded content and next. prev buttons
document.addEventListener('DOMContentLoaded', start(currentSlide));
document.querySelector(".next").addEventListener('click', next);
document.querySelector(".prev").addEventListener('click', prev);