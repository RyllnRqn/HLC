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