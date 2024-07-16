// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true,
// 	multiplier: 2,
// 	smoothMobile:true,
// });
// locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
 
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });




function adjustHeight() {
  const oneHeight = document.querySelector('.navbar').offsetHeight;
  document.querySelector('.head_wrapper').style.height = `calc(100vh - ${oneHeight}px)`;
}
function adjustHeight() {
  const oneHeight = document.querySelector('.cstit').offsetHeight;
  document.querySelector('.head_wrapper').style.height = `calc(100vh - ${oneHeight}px)`;
}

window.addEventListener('resize', adjustHeight);
window.addEventListener('load', adjustHeight);


document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const close = document.getElementById('cross');
  const aside = document.getElementById('aside');
  const modal = document.querySelector('.modal');
  const sidenav = document.getElementById('sidenav');
  const body = document.body; 

  const toggleAside = (show) => {
    if (show) {
      gsap.to(aside, {
        duration: 0.5,
        top: 0, // Bring the aside down from the top
        opacity: 1,
        ease: 'power2.inOut',
        onStart: () => {
          aside.classList.add('show');
          body.classList.add('no-scroll');
        }
      });
      gsap.to(modal, {
        duration: 0.8,
        y: 0, // Bring the modal up into view
        ease: 'power2.inOut',
  
      });

      gsap.to(sidenav, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: 'power2.inOut',
        onStart: () => {
          sidenav.classList.add('show_text');
        }
      });
    } else {
      gsap.to(sidenav, {
        duration: 0.5,
        opacity: 0,
        y: 100,
        ease: 'power2.inOut',
        onComplete: () => {
          sidenav.classList.remove('show_text');
          gsap.to(modal, {
            duration: 0.8,
            y: '-120%',
            ease: 'power2.inOut',
            onComplete: () => {
              gsap.to(aside, {
                duration: 0.5,
                // top: '-100%',
                opacity: 0,
                ease: 'power2.inOut',
                onComplete: () => {
                  aside.classList.remove('show');
                  body.classList.remove('no-scroll');
                }
              });
            }
          });
        }
      });
    }
  };

  hamburger.addEventListener('click', function () {
    if (!aside.classList.contains('show')) {
      toggleAside(true);
    }
  });
  close.addEventListener('click', function () {
    if (aside.classList.contains('show')) {
      toggleAside(false);
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('inner_pg');
  const close = document.getElementById('cross1');
  const aside = document.getElementById('asideinn');
  const modal = document.getElementById('modal1');
  const sidenav = document.getElementById('sidenav1');
  const body = document.body; 

  const toggleAside = (show) => {
    if (show) {
      gsap.to(aside, {
        duration: 0.5,
        top: 0, // Bring the aside down from the top
        opacity: 1,
        ease: 'power2.inOut',
        onStart: () => {
          aside.classList.add('show');
          body.classList.add('no-scroll');
        }
      });
      gsap.to(modal, {
        duration: 0.8,
        y: 0, // Bring the modal up into view
        ease: 'power2.inOut',
  
      });

      gsap.to(sidenav, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: 'power2.inOut',
        onStart: () => {
          sidenav.classList.add('show_text');
        }
      });
    } else {
      gsap.to(sidenav, {
        duration: 0.5,
        opacity: 0,
        y: 100,
        ease: 'power2.inOut',
        onComplete: () => {
          sidenav.classList.remove('show_text');
          gsap.to(modal, {
            duration: 0.8,
            y: '-120%',
            ease: 'power2.inOut',
            onComplete: () => {
              gsap.to(aside, {
                duration: 0.5,
                // top: '-100%',
                opacity: 0,
                ease: 'power2.inOut',
                onComplete: () => {
                  aside.classList.remove('show');
                  body.classList.remove('no-scroll');
                }
              });
            }
          });
        }
      });
    }
  };

  hamburger.addEventListener('click', function () {
    if (!aside.classList.contains('show')) {
      toggleAside(true);
    }
  });
  close.addEventListener('click', function () {
    if (aside.classList.contains('show')) {
      toggleAside(false);
    }
  });
});



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
// tl.to(".navbar", {
//     y: -150,
// }, "anim")
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
  

var hamt1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page2", 
      start: "top 50%", 
      end: "bottom bottom", 
      scrub: 3, 
      // markers: true 
    }
  });
  
  hamt1.to(".inner_pg", {
    opacity: 1,
    duration: 1 
  });


var t3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".p3_text", 
      start: "20% 60%", 
      end: "70% bottom", 
      scrub: 3, 
      // markers: true 
    }
  });
  
  t3.to(".p3_text", {
    opacity: 1,
    duration: 1 
  });
  t3.to(".anim_up h2", {
    y: 0,
    duration: 0.5 ,
  });

  if (document.querySelector('.cstdy')) {
  let sections = gsap.utils.toArray(".cstdycontainer");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".cstdy",
      pin: true,
      scrub: 5,
      snap: 1 / (sections.length - 1),
      end: () => "+=" + document.querySelector(".cstdy").offsetWidth
    }
  });
  }



if (document.querySelector('.career')) {
  var t4 = gsap.timeline({
      scrollTrigger: {
          trigger: ".career",
          start: "top 30%",
          end: "bottom bottom",
          backgroundColor: "#151515",
          // markers: true,
          scrub: 0.1,
      }
  });
  t4.to("#main", {
      backgroundColor: "#151515",
      duration: 0.1,
  });
}


if (document.querySelector('.red_aft')) {
  var t5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".red_aft",
        start: "top 30%",
        end: "90% bottom",
        backgroundColor: "#151515",
        markers:true,
        scrub: 0.1,
        
    }
})

t5.to("#main", {
  backgroundColor: "#151515",
  duration: 0.1,
})
}
if (document.querySelector('.heading_serv')) {
  var t6 = gsap.timeline({
    scrollTrigger: {
        trigger: ".heading_serv",
        start: "50% bottom",
        end: "90% 10%",
        markers:true,
        scrub: 0.1,
        
    }
})

t6.to(".heading_serv h2", {
  x: -250,
}, "anim")

}





