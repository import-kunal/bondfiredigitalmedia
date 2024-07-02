// function init() {
//     gsap.registerPlugin(ScrollTrigger);

//     const locoScroll = new LocomotiveScroll({
//         el: document.querySelector("#main"),
//         smooth: true
//     });
//     locoScroll.on("scroll", ScrollTrigger.update);

//     ScrollTrigger.scrollerProxy("#main", {
//         scrollTop(value) {
//             return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//         }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//         getBoundingClientRect() {
//             return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//         },
//         pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
//     });


//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//     ScrollTrigger.refresh();

// }

// init()



gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".header-content",
        // markers:true,
        start: "60% 50%",
        end: "50% 0",
        scrub: 1
    }
})
tl.to(".navbar", {
    y: -150,
}, "anim")
tl.to(".head_one", {
    x: -25,
    y: -25,

}, "anim")
tl.to(".head_two", {
    x: 50
}, "anim")
tl.to(".head_three", {
    x: -25,
    y: 25,
}, "anim")
tl.to(".split_one", {
    height:"100vh"
}, "anim")
tl.to(".split_two", {
    height:"100vh"
}, "anim")



var t2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".p3_sticky_inner",
      start: "top top",
      end: "200% top",   // Scroll duration to 200% to split evenly
      scrub: 4,
      pin: ".p3_sticky_inner", 
      // markers: true
    }
  });
  
  t2.to("#col1", { top: "0%", duration: 1 }, 0)
    .to("#col2", { top: "0%", duration: 1 }, 0)
    .to("#col3", { top: "0%", duration: 1 }, 0);
  
  t2.to("#col3", { x: "200%", duration: 1 }, 1) 
    .to("#col2", { x: "100%", duration: 1 }, 1);
  

var t3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".p3_text", 
      start: "top 50%", 
      end: "80% bottom", 
      scrub: 2, 
      // markers: true 
    }
  });
  
  t3.to(".p3_text", {
    opacity: 1,
    duration: 1 
  });
  t3.to(".anim_up h2", {
    y: 0,
    duration: 1 ,
  });