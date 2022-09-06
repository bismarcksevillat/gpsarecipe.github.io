gsap.from('.bun', { 
    duration: 1, 
    y: '-100%' 
})

gsap.from('.sausage', { 
    duration: 1, 
    delay: 0.5, 
    y: '-100%', 
    autoAlpha: 0 
})

gsap.from('.relish span', {
  duration: 1,
  delay: 1,
  y: '-100%',
  autoAlpha: 0,
  stagger: 0.1,
})
