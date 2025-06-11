gsap.to("nav",{
  
  backgroundColor: "#000",
  height :"95px",
  duration:0.5, 
  scrollTrigger:{
    
    trigger :"nav",
    scoller:"body",
    
    start:"top -10%",
    end:"top -11%",
    scrub:1
    
    
  }
  
  
  
  
  
})



gsap.to(".main" , {
  
  backgroundColor: "#000",
  scrollTrigger:{
    
    trigger:".main",
    scoller:"body",
    
    start:"top -20%",
    end: "top -60%",
    scrub:2
    
    
  }
  
})



gsap.from(".aboutus img, .about-us-in", {
  
  y:90,
  opacity : 0, 
  duration:1, 
  
  scrollTrigger:{
    
    trigger:".aboutus",
    scoller:"body",
    
    start: "top 70%",
    end:"top 65%",
    scrub:2,
    
  }
  
  
})

gsap.from(".card", {
  
  scale:0.8,
  opacity : 0, 
  duration:.2, 
  
  scrollTrigger:{
    
    trigger:".card",
    scoller:"body",
    
    start: "top 70%",
    end:"top 65%",
    scrub:0.2,
    
  }
  
  
})


gasp.from("#colon1", {
  
  y:-70,
  x:-70,
  
  scrollTrigger :{
    
    trigger: "#colon1",
    scroller:"body",
    start:"top 55%",
    end:"top 45%",
    scrub:2
  }
  
  
  
})

gasp.from("#colon2", {
  
  y:70,
  x:70,
  
  scrollTrigger :{
    
    trigger: "#colon2",
    scroller:"body",
    start:"top 55%",
    end:"top 45%",
    scrub:2
  }
  
  
  
})

gsap.from(".page4 h1",{
  
  y:50,
  scrollTrigger :{
    
    trigger: "#page4 h1",
    scroller:"body",
    start:"top 75%",
    end:"top 70%",
    scrub:2
  }
  
})

