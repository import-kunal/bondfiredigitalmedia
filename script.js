// // Prevent right click
// document.oncontextmenu = () => {
//   alert("Don't try right click");
//   return false;
// }

// /* Still anyone can inspect elements by F12 key. View page source by
// Ctrl + U key. Copy by Ctrl + C key. Paste by Ctrl + V key. Let's prevent these */

// document.onkeydown = e => {
//   // Prevent F12 key
//   if (e.key == "F12") {
//       alert("Don't try to inspect element");
//       return false;
//   }

//   // Prevent showing page source by Ctrl + U
//   if (e.ctrlKey && e.key == "u") {
//       alert("Don't try to view page sources");
//       return false;
//   }

//   // Prevent copying anything from the page
//   if (e.ctrlKey && e.key == "c") {
//       alert("Don't try to copy page element");
//       return false;
//   }

//   // Prevent paste anything from other sources
//   if (e.ctrlKey && e.key == "v") {
//       alert("Don't try to paste anything to page");
//       return false;
//   }
// }

document.addEventListener('DOMContentLoaded', function () {
  // Function to disable scrolling
  function disableScroll() {
    document.body.style.overflow = 'hidden';
  }

  // Function to enable scrolling
  function enableScroll() {
    document.body.style.overflow = '';
  }
  // =======================================Earth===========================

  // var svgObject = document.getElementById('svg_earth');
        
  // svgObject.addEventListener('load', function() {
  //     var svgDoc = svgObject.contentDocument;
  //     var svgElement = svgDoc.querySelector('svg');

      
      
  //     // Apply CSS styles
  //     var ellipse = svgElement.querySelector('ellipse');
  //     if (ellipse) {
  //         ellipse.style.fill = '#222222';
         
  //     }
     
  // });

  // ====================================Handle text rotation==============================================
  const textElement = document.querySelector('.p2conn p');
  if (textElement) {
    textElement.innerHTML = textElement.innerText.split("")
      .map((char, i) => `<span style="transform:rotate(${i * 7.5}deg)">${char}</span>`)
      .join("");
  }

  // ===================Video modal functionality===========================================================

  const thumbnails = document.querySelectorAll('.thumbnails');
  const modal = document.getElementById('videoModal');
  const videoContainer = modal.querySelector('.video_container video');
  const customControls = modal.querySelector('.custom-video__controls');
  const closeModal = modal.querySelector('.close');

  function openModal(videoUrl) {
    videoContainer.src = videoUrl;
    modal.style.display = 'flex';
    videoContainer.pause();
    videoContainer.muted = true;
    customControls.style.display = 'flex';
    disableScroll();
  }

  function closeModalFunc() {
    modal.style.display = 'none';
    videoContainer.pause();
    videoContainer.src = '';
    videoContainer.muted = false; // Unmute video on close
    customControls.style.display = 'none';
    enableScroll();
  }

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function () {
      const videoUrl = this.getAttribute('data-video-url');
      openModal(videoUrl);
    });
  });

  closeModal.addEventListener('click', closeModalFunc);

  videoContainer.addEventListener('click', function () {
    if (videoContainer.paused) {
      videoContainer.play();
      videoContainer.muted = false;
      customControls.style.display = 'none';
    } else {
      videoContainer.pause();
      videoContainer.muted = true;
      customControls.style.display = 'flex';
    }
  });

  customControls.addEventListener('click', function () {
    if (videoContainer.paused) {
      videoContainer.play();
      videoContainer.muted = false;
      customControls.style.display = 'none';
    } else {
      videoContainer.pause();
      videoContainer.muted = true;
      customControls.style.display = 'flex';
    }
  });

  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeModalFunc();
    }
  });

  // FAQ accordion functionality
  const faqContainers = document.querySelectorAll('.faq_container');
  faqContainers.forEach(container => {
    const plus = container.querySelector('.plus');
    const minus = container.querySelector('.minus');
    const answerContainer = container.querySelector('.faq_answer_container');

    plus.addEventListener('click', () => {
      answerContainer.style.maxHeight = answerContainer.scrollHeight + 'px';
      plus.style.display = 'none';
      minus.style.display = 'block';
      answerContainer.style.marginTop = '2rem';
    });

    minus.addEventListener('click', () => {
      answerContainer.style.maxHeight = '0';
      plus.style.display = 'block';
      minus.style.display = 'none';
      answerContainer.style.marginTop = '0rem';
    });
  });

  // Adjust height for header wrapper
  function adjustHeight() {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const cstitHeight = document.querySelector('.cstit').offsetHeight;
    const maxHeight = Math.max(navbarHeight, cstitHeight);
    document.querySelector('.head_wrapper').style.height = `calc(100vh - ${maxHeight}px)`;
  }

  window.addEventListener('resize', adjustHeight);
  window.addEventListener('load', adjustHeight);

  // Toggle aside and modal
  const toggleAside = (aside, modal, sidenav, body, show) => {
    if (show) {
      gsap.to(aside, {
        duration: 0.5,
        top: 0,
        opacity: 1,
        ease: 'power2.inOut',
        onStart: () => {
          aside.classList.add('show');
          body.classList.add('no-scroll');
        },
      });
      gsap.to(modal, {
        duration: 0.8,
        y: 0,
        ease: 'power2.inOut',
      });
      gsap.to(sidenav, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: 'power2.inOut',
        onStart: () => {
          sidenav.classList.add('show_text');
        },
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
                opacity: 0,
                ease: 'power2.inOut',
                onComplete: () => {
                  aside.classList.remove('show');
                  body.classList.remove('no-scroll');
                },
              });
            },
          });
        },
      });
    }
  };

  // Toggle events setup
  const toggleEvents = [
    {
      hamburger: 'hamburger',
      close: 'cross',
      aside: 'aside',
      modal: '.modal',
      sidenav: 'sidenav',
    },
    {
      hamburger: 'inner_pg',
      close: 'cross1',
      aside: 'asideinn',
      modal: '#modal1',
      sidenav: 'sidenav1',
    },
  ];

  toggleEvents.forEach(event => {
    const hamburger = document.getElementById(event.hamburger);
    const close = document.getElementById(event.close);
    const aside = document.getElementById(event.aside);
    const modal = document.querySelector(event.modal);
    const sidenav = document.getElementById(event.sidenav);
    const body = document.body;

    hamburger.addEventListener('click', () => toggleAside(aside, modal, sidenav, body, true));
    close.addEventListener('click', () => toggleAside(aside, modal, sidenav, body, false));
  });
});


ScrollTrigger.matchMedia({
  //High DeskView
  "(min-width: 1400px)": function () {


    var onsplitscreen = gsap.timeline({
      scrollTrigger: {
        trigger: ".header-content",
        start: "60% 50%",
        end: "50% 0",
        // markers: true,
        scrub: 1,
      },
    });
    onsplitscreen
      .to(".navbar", { y: -150 }, "anim")
      .to(".head_one", { x: -25, y: -25 }, "anim")
      .to(".head_two", { x: 50 }, "anim")
      .to(".head_three", { x: -25, y: 25 }, "anim")
      .to(".split_one", { height: "100vh" }, "anim")
      .to(".split_two", { height: "100vh" }, "anim");

    // ====================================================PAGE 2 HAMBURGER MENU  =================================================

    var p2_menu = gsap.timeline({
      scrollTrigger: {
        trigger: ".page2",
        start: "top 70%",
        end: "bottom bottom",
        scrub: 3,
      },
    });

    p2_menu.to(".inner_pg", {
      opacity: 1,
      duration: 0.2,
      markers:true,
      onStart: function () {
        gsap.set(".inner_pg", { display: "flex" });
      },
      onReverseComplete: function () {
        gsap.set(".inner_pg", { display: "none", immediateRender: true,});
      },
    });

    gsap.to(".p2conn span", {
      rotation: "+=360", 
      duration: 30, 
      repeat: -1, 
      ease: "linear",
    });
    gsap.to(".logo", {
      rotation: "+=360", 
      duration: 30, 
      repeat: -1, 
      ease: "linear",
    });
    // ========================================================CASE STUDIES ========================================================================

    if (document.querySelector(".cstdy")) {
      let sections = gsap.utils.toArray(".cstdycontainer");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".cstdy",
          pin: true,
          scrub: 5,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + document.querySelector(".cstdy").offsetWidth,
        },
      });
    }

    // ========================================================== SERVICES =================================================================================
    if (document.querySelector(".heading_serv")) {
      var t6 = gsap.timeline({
        scrollTrigger: {
          trigger: ".heading_serv",
          start: "50% bottom",
          end: "90% 10%",
          scrub: 0.1,
          // markers: true,
        },
      });
      t6.to(".heading_serv h2", { x: -250 }, "anim");
    }

// ====================================================Industry expertise animation =================================================

    if (document.querySelector(".wk")) {
      var t7 = gsap.timeline({
        scrollTrigger: {
          trigger: ".wk",
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
          pin: true,
          pinSpacing: false,
          // markers: true,
        },
      });

      t7.to(
        ".hosp",
        {
          y: "0%",
          stagger: 0.5,
          onStart: () => gsap.to(".h6-hosp", { color: "#ffa700" }),
          onReverseComplete: () => gsap.to(".h6-hosp", { color: "white" }),
        },
        "anim"
      );

      t7.to(
        ".realst",
        {
          y: "-60vh",
          stagger: 0.5,
          onStart: () => gsap.to(".h6-realst", { color: "#ffa700" }),
          onReverseComplete: () => gsap.to(".h6-realst", { color: "white" }),
        },
        "anim2"
      );

      t7.to(
        ".fintech",
        {
          y: "-120vh",
          stagger: 0.5,
          onStart: () =>
            gsap.to(".h6-fintech", { color: "#ffa700", delay: 0.5 }),
          onReverseComplete: () => gsap.to(".h6-fintech", { color: "white" }),
        },
        "anim3"
      );
    }

    // ==============================================================HOW WE DO IT ANIMATION================================================================
    if (document.querySelector(".p3_sticky_inner")) {

      var how_we_do_it = gsap.timeline({
        scrollTrigger: {
          trigger: ".p3_sticky_inner",
          start: "top top",
          end: "200% top",
          scrub: 4,
          pin: ".p3_sticky_inner",
          // markers: true,
        },
      });
      how_we_do_it
        .to("#col1", { top: "0%", duration: 1 }, 0)
        .to("#col2", { top: "0%", duration: 1 }, 0)
        .to("#col3", { top: "0%", duration: 1 }, 0)
        .to("#col3", { x: "200%", duration: 1 }, 1)
        .to("#col2", { x: "100%", duration: 1 }, 1)

    }


    var how_we_do_it_para = gsap.timeline({
      scrollTrigger: {
        trigger: ".p3_text",
        start: "20% 60%",
        end: "70% bottom",
        scrub: 3,
      },
    });
    how_we_do_it_para
      .to(".p3_text", { opacity: 1, duration: 1 })
      .to(".anim_up h2", {
        y: 0,
        duration: 0.5,
      });
// ================================================Testimonial-Homepage =-=================================================

// ========================================CAREER PAGE ====================================================================

    if (document.querySelector(".career")) {
      var t4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".career",
          start: "top 30%",
          end: "bottom bottom",
          scrub: 0.1,
        },
      });
      t4.to("#main", { backgroundColor: "#151515", duration: 0.1 });
    }

    // =================================== WORK PAGE ==============================================================================
    if (document.querySelector(".work_sect")) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".work_sect",
            start: "-25% top",
            end: "10% bottom",
            scrub: 2,
            markers: true,
          },
        })
        .to("#main", { backgroundColor: "#151515", duration: 0.1 });

      var t5 = gsap.timeline({
        scrollTrigger: {
          trigger: ".work_sect",
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
          // markers: true,
          pin: ".txtwk",
        },
      });
      t5.to(
        ".tra_section",
        {
          transform:
            "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          duration: 4,
          ease: "power1.inOut",
        },
        1
      );
      t5.to(
        ".txtwk",
        {
          width: "0vw",
          duration: 4,
          ease: "power1.inOut",
        },
        1
      );
 

      var colimg = gsap.timeline({
        scrollTrigger: {
          trigger: ".work_sect",
          start: "top top",
          end: "115% bottom",
          scrub: 2,
          // markers: true,
        },
      });

      colimg.to(
        ".imgroll1",
        {
          transform:
            "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          duration: 2, // Extended duration for smoothness
          ease: "power1.inOut", // Easing function for smooth animation
        },
        1
      );
      colimg.to(
        ".imgroll2",
        {
          transform:
            "translate3d(0, -10vh, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          duration: 2, // Extended duration for smoothness
          ease: "power1.inOut", // Easing function for smooth animation
        },
        1
      );
      colimg.to(
        ".imgroll3",
        {
          transform:
            "translate3d(0, 10vh, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          duration: 2, // Extended duration for smoothness
          ease: "power1.inOut", // Easing function for smooth animation
        },
        1
      );
      colimg.to(
        ".imgroll4",
        {
          transform:
            "translate3d(0, -15vh, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          duration: 2, // Extended duration for smoothness
          ease: "power1.inOut", // Easing function for smooth animation
        },
        1
      );
    }
    // =========================================================SERIVES ==============================================================

    if (document.querySelector(".service_page")) {
      var t4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".service_page",
          start: "-25% top",
          end: "10% bottom",
          scrub: 0.1,
        },
      });
      t4.to("#main", { backgroundColor: "#151515", duration: 0.1 });
    }
  },





  //=======================Mobile Animations================================================================================== 
  //=======================300px  - 480px ================================================================================== 
  "(min-width: 300px) and (max-width: 480px)": function () {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".header-content",
        start: "80% 40%",
        end: "100% 0",
        // markers: true,
        scrub: 1,
      },
    });
    tl.to(".navbar", { y: -150 }, "anim")
      .to(".head_one", { x: -25, y: -25 }, "anim")
      .to(".head_two", { x: 50 }, "anim")
      .to(".head_three", { x: -25, y: 25 }, "anim")
      .to(".split_one", { height: "100vh" }, "anim")
      .to(".split_two", { height: "100vh" }, "anim");


       // ====================================================PAGE 2 HAMBURGER MENU  =================================================

    var p2_menu = gsap.timeline({
      scrollTrigger: {
        trigger: ".page2",
        start: "top 70%",
        end: "bottom bottom",
        scrub: 3,
        // markers:true,
      },
    });

    p2_menu.to(".inner_pg", {
      opacity: 1,
      duration: 0.2,
      onStart: function () {
        gsap.set(".inner_pg", { display: "flex" });
      },
      onReverseComplete: function () {
        gsap.set(".inner_pg", { display: "none", immediateRender: true,});
      },
    });

    gsap.to(".p2conn span", {
      rotation: "+=360", 
      duration: 30, 
      repeat: -1, 
      ease: "linear",
    });
    gsap.to(".logo", {
      rotation: "+=360", 
      duration: 30, 
      repeat: -1, 
      ease: "linear",
    });


// ===============================CASE STUDIES=======================================
    
    if (document.querySelector(".cstdy")) {
      let sections = gsap.utils.toArray(".cstdycontainer");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".cstdy",
          pin: true,
          scrub: 5,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + document.querySelector(".cstdy").offsetWidth,
        },
      });
    }

    // ====================================================Industry expertise animation =================================================

    if (document.querySelector(".wk")) {
      var t7 = gsap.timeline({
        scrollTrigger: {
          trigger: ".wk",
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
          pin: true,
          pinSpacing: false,
          // markers: true,
        },
      });

      t7.to(
        ".hosp",
        {
          y: "0%",
          stagger: 0.5,
          onStart: () => gsap.to(".h6-hosp", { color: "#ffa700" }),
          onReverseComplete: () => gsap.to(".h6-hosp", { color: "white" }),
        },
        "anim"
      );

      t7.to(
        ".realst",
        {
          y: "-40vh",
          stagger: 0.5,
          onStart: () => gsap.to(".h6-realst", { color: "#ffa700" }),
          onReverseComplete: () => gsap.to(".h6-realst", { color: "white" }),
        },
        "anim2"
      );

      t7.to(
        ".fintech",
        {
          y: "-80vh",
          stagger: 0.5,
          onStart: () =>
            gsap.to(".h6-fintech", { color: "#ffa700", delay: 0.5 }),
          onReverseComplete: () => gsap.to(".h6-fintech", { color: "white" }),
        },
        "anim3"
      );
    }



       // ==============================================================HOW WE DO IT ANIMATION================================================================
       if (document.querySelector(".p3_sticky_inner")) {

        var how_we_do_it = gsap.timeline({
          scrollTrigger: {
            trigger: ".p3_sticky_inner",
            start: "top top",
            end: "200% top",
            scrub: 2,
            pin: ".p3_sticky_inner",
            // markers:true,
          },
        });
        how_we_do_it
        .to("#col1", { x: "-200%", duration: 1, ease: "power1.inOut" }, 0)
        .to("#col2", { x: "-150%", duration: 1, ease: "power1.inOut" }, 0)
        .to("#col3", { x: "-100%", duration: 1, ease: "power1.inOut" }, 0)
        .to("#col1", { top: "0%", duration: 1, ease: "power1.inOut" }, 1)
        .to("#col2", { top: "0%", duration: 1, ease: "power1.inOut" }, 1);

      }
  
  
      var how_we_do_it_para = gsap.timeline({
        scrollTrigger: {
          trigger: ".p3_text",
          start: "-20% 80%",
          end: "60% bottom",
          scrub: 3,
          // markers:true,
        },
      });
      how_we_do_it_para
        .to(".p3_text", { opacity: 1, duration: 1 })
        .to(".anim_up h2", {
          y: 0,
          duration: 0.5,
        });


// ==========================SERVICE PAGE ================================================
        
if (document.querySelector(".service_page")) {
  var t4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".service_page",
      start: "-40% top",
      end: "10% bottom",
      scrub: 0.1,
      // markers:true,
    },
  });
  t4.to("#main", { backgroundColor: "#151515", duration: 0.3 });
}
// ========================================CAREER PAGE ====================================================================

if (document.querySelector(".career")) {
  var t4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".career",
      start: "-30% 30%",
      end: "bottom bottom",
      scrub: 0.1,
      markers: true,
    },
  });
  t4.to("#main", { backgroundColor: "#151515", duration: 0.1 });
}




  },
});
