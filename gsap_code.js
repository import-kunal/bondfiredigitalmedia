document.addEventListener("DOMContentLoaded", function () {
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
        .to(".head_top", { x: -500 }, "anim")
        .to(".head_one", { x: -25, y: -25 }, "anim")
        .to(".head_two", { x: 50 }, "anim")
        .to(".head_three", { x: -25, y: 25 }, "anim")
        .to(".head_three h5", { x: 500 }, "anim")
        .to(".split_one", { height: "100vh" }, "anim");

      // ====================================================PAGE 2 HAMBURGER MENU  =================================================

      var gridshow = gsap.timeline({
        scrollTrigger: {
          trigger: ".page2",
          start: "-50% 50%",
          end: "bottom bottom",
          scrub: 3,
          // markers:true,
        },
      });
      gridshow.to(".gridhoverbg", {
        opacity: 1,
        duration: 0.1,
        // markers: true,
        onStart: function () {
          gsap.set(".gridhoverbg", { display: "grid" });
        },
        onReverseComplete: function () {
          gsap.set(".gridhoverbg", { display: "none", immediateRender: true });
        },
      });

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
        // markers: true,
        onStart: function () {
          gsap.set(".inner_pg", { display: "flex" });
        },
        onReverseComplete: function () {
          gsap.set(".inner_pg", { display: "none", immediateRender: true });
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
      if (document.querySelector("#loadcontroller")) {
        gsap.to(".p3r", {
          scrollTrigger: {
            trigger: ".p3l",
            pin: true,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            markers: true,
            onUpdate: (self) => {
              const progress = self.progress;
        
              gsap.to("#loadcontroller", {
                height: `${progress * 100}%`, 
                ease: "none" 
              });
            }
          }
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
            onStart: () => gsap.to(".h6-hosp", { color: "white" }),
            onReverseComplete: () => gsap.to(".h6-hosp", { color: "#424242" }),
          },
          "anim"
        );

        t7.to(
          ".realst",
          {
            y: "-60vh",
            stagger: 0.5,
            onStart: () => gsap.to(".h6-realst", { color: "white" }),
            onReverseComplete: () =>
              gsap.to(".h6-realst", { color: "#424242" }),
          },
          "anim2"
        );

        t7.to(
          ".fintech",
          {
            y: "-120vh",
            stagger: 0.5,
            onStart: () =>
              gsap.to(".h6-fintech", { color: "white", delay: 0.5 }),
            onReverseComplete: () =>
              gsap.to(".h6-fintech", { color: "#424242" }),
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
          .to("#col2", { x: "100%", duration: 1 }, 1);
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
              // markers: true,
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
            immediateRender: false,
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
            duration: 2,
            ease: "power1.inOut",
            immediateRender: false,
          },
          1
        );
        colimg.to(
          ".imgroll2",
          {
            transform:
              "translate3d(0, -10vh, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            duration: 2,
            ease: "power1.inOut",
            immediateRender: false,
          },
          1
        );
        colimg.to(
          ".imgroll3",
          {
            transform:
              "translate3d(0, 10vh, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            duration: 2,
            ease: "power1.inOut",
            immediateRender: false,
          },
          1
        );
        colimg.to(
          ".imgroll4",
          {
            transform:
              "translate3d(0, -15vh, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            duration: 2,
            ease: "power1.inOut",
            immediateRender: false,
          },
          1
        );

        // Ensure ScrollTrigger recalculates on page load
        window.addEventListener("load", () => {
          ScrollTrigger.refresh();
        });
      }

      if (document.querySelector(".cstdy")) {
        let sections = gsap.utils.toArray(".cstdycontainer");

        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".cstdy",
            pin: true,
            scrub: 2,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + document.querySelector(".cstdy").offsetWidth,
          },
        });
      }

      if (document.getElementById("prev")) {
        const slides = document.querySelectorAll(".swiper-slide");
        const prevButton = document.getElementById("prev");
        const nextButton = document.getElementById("next");

        let currentIndex = 2;

        function updateSlides() {
          // Reset all classes and reflection backgrounds
          slides.forEach((slide, index) => {
            slide.classList.remove("card1", "card2", "card3", "card4", "card5");
            const reflection = slide.querySelector(".reflection");
            const imageSrc = slide.querySelector("img").getAttribute("src");
            reflection.style.backgroundImage = `url(${imageSrc})`;
          });

          // Assign classes based on currentIndex
          slides[
            (currentIndex + slides.length - 2) % slides.length
          ].classList.add("card1");
          slides[
            (currentIndex + slides.length - 1) % slides.length
          ].classList.add("card2");
          slides[currentIndex].classList.add("card3");
          slides[(currentIndex + 1) % slides.length].classList.add("card4");
          slides[(currentIndex + 2) % slides.length].classList.add("card5");
        }

        prevButton.addEventListener("click", () => {
          currentIndex = (currentIndex + slides.length - 1) % slides.length;
          updateSlides();
        });

        nextButton.addEventListener("click", () => {
          currentIndex = (currentIndex + 1) % slides.length;
          updateSlides();
        });

        // Initialize
        updateSlides();
      }

      // =========================================================SERIVES ==============================================================

      if (document.querySelector(".service_page")) {
        var t4 = gsap.timeline({
          scrollTrigger: {
            trigger: ".service_page",
            start: "-25% top",
            end: "20% bottom",
            scrub: 1,
            // markers:true,
          },
        });
        t4.to("#main", { backgroundColor: "#151515", duration: 2 });
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
        .to(".head_top", { x: -500 }, "anim")
        .to(".head_one", { x: -25, y: -25 }, "anim")
        .to(".head_two", { x: 50 }, "anim")
        .to(".head_three", { x: -25, y: 25 }, "anim")
        .to(".head_three h5", { x: 500 }, "anim")
        .to(".split_one", { height: "100vh" }, "anim")
        .to(".split_two", { height: "100vh" }, "anim");

      // ====================================================PAGE 2 HAMBURGER MENU  =================================================
      var gridshow = gsap.timeline({
        scrollTrigger: {
          trigger: ".page2",
          start: "-50% 50%",
          end: "bottom bottom",
          scrub: 3,
          markers:true,
        },
      });

      gridshow.to(".gridhoverbg", {
        opacity: 1,
        duration: 0.1,
        // markers: true,
        onStart: function () {
          gsap.set(".gridhoverbg", { display: "grid" });
        },
        onReverseComplete: function () {
          gsap.set(".gridhoverbg", { display: "none", immediateRender: true });
        },
      });

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
          gsap.set(".inner_pg", { display: "none", immediateRender: true });
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

      if (document.querySelector(".p_g3")) {
        let caseStudies = gsap.utils.toArray(".casestudy");
    
        // Create a timeline for better control over multiple animations
        let timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".p_g3",
                pin: ".p_g3container", // Pin the container while scrolling
                scrub: 1, // Scrub value controls the smoothness of the scroll
                snap: 1 / (caseStudies.length - 1), // Snap to each section
                start: "top top",
                end: () => "+=" + document.querySelector(".p3r").offsetWidth
            }
        });
    
        // Animate the horizontal scroll of the case studies
        timeline.to(caseStudies, {
            xPercent: -100 * (caseStudies.length - 1),
            ease: "none"
        });
    
        // Animate the width of the load controller
        timeline.to("#loadcontroller", {
            width: "100%", // Animate width from 0% to 100%
            ease: "none"
        }, 0); // Start this animation at the same time as the scroll
    }
    

      if (document.querySelector(".cstdy")) {
        let sections = gsap.utils.toArray(".cstdycontainer");
        let delayStart = 2; // Delay at the start in seconds
        let delayEnd = 2; // Delay at the end in seconds

        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".cstdy",
            pin: true,
            scrub: 5,
            snap: 1 / (sections.length - 1),
            start: "top top+=" + delayStart * 100, // Adjust start to include initial delay
            end: () =>
              "+=" +
              (document.querySelector(".cstdy").offsetWidth + delayEnd * 100), // Adjust end to include final delay
            onUpdate: ({ progress }) => {
              if (progress === 0) {
                gsap.to(sections, { delay: delayStart });
              }
            },
            onComplete: () => {
              gsap.to(sections, { delay: delayEnd });
            },
          },
        });
      }

      // =======================Industry expertise animation =================================================

      if (document.querySelector(".wk")) {
        var t7 = gsap.timeline({
          scrollTrigger: {
            trigger: ".wk",
            start: "top top",
            end: "bottom bottom",
            scrub: 2.5,
            pin: true,
            pinSpacing: false,
            // markers: true,
          },
        });

        t7.to(
          ".hosp",
          {
            y: "0%",
            stagger: 1,
            onStart: () => gsap.to(".h6-hosp", { color: "#ffa700" }),
            onReverseComplete: () => gsap.to(".h6-hosp", { color: "white" }),
          },
          "anim"
        );

        t7.to(
          ".realst",
          {
            y: "-40vh",
            stagger: 2,
            onStart: () => gsap.to(".h6-realst", { color: "#ffa700" }),
            onReverseComplete: () => gsap.to(".h6-realst", { color: "white" }),
          },
          "anim2"
        );

        t7.to(
          ".fintech",
          {
            y: "-80vh",
            stagger: 3,
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
            // markers: true,
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
            // markers: true,
          },
        });
        t4.to("#main", { backgroundColor: "#151515", duration: 0.1 });
      }
    },
  });
});
