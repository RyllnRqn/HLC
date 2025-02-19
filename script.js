const tagLine = document.querySelector('.tag');
//const butt = document.querySelector('.butt')


document.addEventListener('scroll', function(){
   // console.log('scrolled!')
   let value = window.scrollY
   tagLine.style.marginTop = value * 1.2 + 'px'
   //butt.style.marginTop = value * 1 + 'px'

});


const slider = document.querySelector('.container');
let isDown = false;
let startX;
let scrollLeft;


slider.addEventListener('mousedown', (e) =>{
   isDown = true;
   slider.classList.add('active');
   startX = e.pageX - slider.offsetLeft;
   scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
   isDown = false;
   slider.classList.remove('active');
});

slider.addEventListener('mouseup', () =>{
   isDown = false;
   slider.classList.remove('active');
} );

slider.addEventListener('mousemove' , (e) => {
   if(!isDown) return;
   e.preventDefault();
   const x = e.pageX - slider.offsetLeft;
   const walk = (x - startX) * 1;
   slider.scrollLeft = scrollLeft - walk;
});


/*balik.addEventListener("click", function(event){     event.preventDefault()
document.getElementsById("church").style.display = "none";});*/

function hideChurch(){
   event.preventDefault()

   document.getElementById("church").style.display = "none";
}

function switchSection(showSection, hideSection){
   hideSection.forEach((section) => {
      section.classList.add(style="display: none")
   })
   showPerformance.classList.add(style="display: block");
}

.addEventListener("click", function(event){
   event.preventDefault()
   switchSection(balikBayan, [Musi, cFo])

})

himig.addEventListener("click", function(event){
   event.preventDefault()
   switchSection(Musi, [cFo, balikBayan])

})

evM.addEventListener("click", function(event){
   event.preventDefault()
   switchSection(cFo, [balikBayan, Musi])

})