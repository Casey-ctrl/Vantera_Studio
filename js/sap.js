// JS TYPOGRAPHY
gsap.registerPlugin(TextPlugin);

const phrases = [
  "short-form retainers.",
  "commercial cuts.",
  "cinematic documentaries."
];

// Master timeline that loops infinitely
let masterTl = gsap.timeline({ repeat: -1 });

phrases.forEach((phrase) => {
  let phraseTl = gsap.timeline({ 
    repeat: 1, 
    yoyo: true, 
    repeatDelay: 1.8 // How long the word stays fully typed before deleting
  });
  
  phraseTl.to("#typewriter", { 
    duration: phrase.length * 0.06, // Smart speed scaling based on string length
    text: phrase, 
    ease: "none" 
  });
  
  masterTl.add(phraseTl);
});

/* AOS PLUGIN */
  AOS.init();


  // COUNT.JS
  let valueDisplays = document.querySelectorAll(".counter");
  let interval = 900;

  valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-target"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function(){
    startValue += 1;
    valueDisplay.textContent = startValue;
    if(startValue === endValue) {
      clearInterval(counter);
    }
  }, duration)
  });

  