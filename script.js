// Navbar scroll effect
window.addEventListener('scroll',()=>{
  const navbar=document.querySelector('.navbar');
  if(window.scrollY>50){navbar.classList.add('solid');navbar.classList.remove('transparent');}
  else{navbar.classList.add('transparent');navbar.classList.remove('solid');}
});

// Fade-in sections on scroll
const faders=document.querySelectorAll('.fade-in');
const appearOptions={threshold:0.2};
const appearOnScroll=new IntersectionObserver((entries,observer)=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
},appearOptions);
faders.forEach(fader=>appearOnScroll.observe(fader));
