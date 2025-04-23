const tagLine = document.querySelector('.tag');
//const butt = document.querySelector('.butt')


document.addEventListener('scroll', function(){
   // console.log('scrolled!')
   let value = window.scrollY
   tagLine.style.marginTop = value * 1.2 + 'px';
   //butt.style.marginTop = value * 1 + 'px'

});

/*
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
document.getElementsById("church").style.display = "none";});

function hideChurch(){
   event.preventDefault()

   document.getElementById("church").style.display = "none";
}*/

function switchSection(showSection, hideSection){
   hideSection.forEach((section) => {
      section.classList.add("hidden");
   })
   showSection.classList.remove("hidden");
}

balik.addEventListener("click", function(event){
   event.preventDefault()
   switchSection(bayan, [musi, church])

})

himig.addEventListener("click", function(event){
   event.preventDefault()
   switchSection(musi, [church, bayan])

})

evm.addEventListener("click", function(event){
   event.preventDefault()
   switchSection(church, [bayan, musi])
})


 
 // Search functionality
document.getElementById('search').addEventListener('input', function() {
   let searchQuery = this.value.toLowerCase();
   let members = document.querySelectorAll('.member-card');
   
   members.forEach(member => {
       let name = member.querySelector('.member-name').textContent.toLowerCase();
       let position = member.querySelector('.position').textContent.toLowerCase();
       
       if (name.includes(searchQuery) || position.includes(searchQuery)) {
           member.style.display = 'block';
       } else {
           member.style.display = 'none';
       }
   });
});

// Modal functionality
let modal = document.getElementById("memberModal");
let cards = document.querySelectorAll(".member-card");
let closeModal = document.getElementsByClassName("close")[0];

// Add click event for each member card
cards.forEach(card => {
   card.addEventListener('click', function() {
       modal.style.display = "block";
       // You can dynamically change the modal content based on the card clicked
       let memberName = card.querySelector('.member-name').textContent;
       let pos = card.querySelector('.position').textContent;
       let bio = card.querySelector('.biography').textContent;
       let pic = card.querySelector('img').src;
       modal.querySelector('h2').textContent = memberName +" - " + pos; // Customize this as needed
       modal.querySelector('p').textContent = bio;
       modal.querySelector('img').src = pic;
   });
});

// Close modal when the close button is clicked
closeModal.addEventListener('click', function() {
   modal.style.display = "none";
});

// Close modal if clicked outside of the modal content
window.onclick = function(event) {
   if (event.target == modal) {
       modal.style.display = "none";
   }
};

function scrollLeft() {
   const container = document.getElementById('members');
   container.scrollBy({ left: -100, behavior: 'smooth' });
 }
 
 function scrollRight() {
   const container = document.getElementById('members');
   container.scrollBy({ left: 100, behavior: 'smooth' });
 }