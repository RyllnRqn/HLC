const tagLine = document.querySelector('.tag');
//const butt = document.querySelector('.butt')


document.addEventListener('scroll', function(){
   // console.log('scrolled!')
   let value = window.scrollY
   tagLine.style.marginTop = value * 1.2 + 'px'
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

const state = {};
const carouselList = document.querySelector('.carousel__list');
const carouselItems = document.querySelectorAll('.carousel__item');
const elems = Array.from(carouselItems);

carouselList.addEventListener('click', function (event) {
  var newActive = event.target;
  var isItem = newActive.closest('.carousel__item');

  if (!isItem || newActive.classList.contains('carousel__item_active')) {
    return;
  };
  
  update(newActive);
});

const update = function(newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const first = elems.find((elem) => elem.dataset.pos == -2);
  const last = elems.find((elem) => elem.dataset.pos == 2);
  
  current.classList.remove('carousel__item_active');
  
  [current, prev, next, first, last].forEach(item => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos)
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 2) {
    return -current
  }

  return diff;
}