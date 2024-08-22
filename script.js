


function updateViewportSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  document.getElementById('widthofviewport').innerText = `Width: ${width}px`;
  document.getElementById('heightofviewport').innerText = `Height: ${height}px`;
}

// Call the function once to set the initial values
updateViewportSize();

// Optional: Update the size dynamically when the window is resized
window.addEventListener('resize', updateViewportSize);


document.addEventListener("DOMContentLoaded", function() {
  const sections = [
    { display: ".strategydisplay", loader: "#strategyprogress" },
    { display: ".designdisplay", loader: "#designprogress" },
    { display: ".developmentdisplay", loader: "#developmentprogress" }
  ];

  let currentStep = 0;
  let autoSlideTimeout;

  function updateSection(step) {
    clearTimeout(autoSlideTimeout); // Clear the previous auto slide timeout

    // Reset all sections and progress bars
    sections.forEach((section, index) => {
      const displayElement = document.querySelector(section.display);
      const loaderElement = document.querySelector(section.loader);
      
      displayElement.style.display = "none"; // Hide all sections
      loaderElement.style.transition = "none";  // Disable transition for instant reset
      loaderElement.style.width = index < step ? "100%" : "0%"; // Set progress bars
    });

    // Show the current section and fill its progress bar
    const currentSection = sections[step];
    const displayElement = document.querySelector(currentSection.display);
    const loaderElement = document.querySelector(currentSection.loader);
    
    displayElement.style.display = "block"; // Display the current section
    setTimeout(() => {
      loaderElement.style.transition = "";  // Re-enable transition
      loaderElement.style.width = "100%"; // Fill the progress bar
    }, 50);

    // Set up auto-slide to the next section after 10 seconds
    autoSlideTimeout = setTimeout(() => nextStep(), 15000);
  }

  function nextStep() {
    currentStep = (currentStep + 1) % sections.length; // Loop back to first section if at the end
    updateSection(currentStep);
  }

  function prevStep() {
    currentStep = (currentStep - 1 + sections.length) % sections.length; // Loop back to last section if at the start
    updateSection(currentStep);
  }

  // Attach event listeners to next and prev buttons
  document.querySelector('.next').addEventListener('click', nextStep);
  document.querySelector('.prev').addEventListener('click', prevStep);

  // Initial activation
  updateSection(currentStep);
});







const canvas = document.getElementById('drawingCanvas');

if (canvas) {
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let drawing = false;
    let drawingHistory = [];
    let currentIndex = -1;

    function startDrawing(e) {
        drawing = true;
        draw(e);
    }

    function endDrawing() {
        drawing = false;
        ctx.beginPath();
        saveState();  // Save the state when drawing ends
        console.log('Drawing ended. State saved.');
    }

    function draw(e) {
        if (!drawing) return;

        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#FFDD00';

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);

        console.log('Drawing at:', e.clientX, e.clientY);
    }

    function saveState() {
        // Save the current state of the canvas
        if (drawingHistory.length > 50) {
            drawingHistory.shift(); // Limit history size to 50 to prevent memory issues
        }
        currentIndex++;
        drawingHistory[currentIndex] = ctx.getImageData(0, 0, canvas.width, canvas.height);
        drawingHistory.length = currentIndex + 1; // Truncate any redo states
        console.log('State saved. Current index:', currentIndex);
    }

    function undoDrawing() {
        if (currentIndex > 0) {
            currentIndex--;
            ctx.putImageData(drawingHistory[currentIndex], 0, 0);
            console.log('Undo performed. Restored to state:', currentIndex);
        } else if (currentIndex === 0) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            console.log('Undo performed. Canvas cleared.');
        } else {
            console.log('No more undos available');
        }
    }

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', endDrawing);
    canvas.addEventListener('mousemove', draw);

    // Listen for Ctrl+Z or Cmd+Z for undo
    window.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
            console.log('Ctrl+Z or Cmd+Z detected');
            undoDrawing();
        }
    });

    // Log the initial state
    saveState();
}



// const cstit = document.querySelector(".cstit");
// if(cstit){
//   function adjustHeight() {
//     const navbarHeight = document.querySelector(".navbar").offsetHeight;
//     const cstitHeight = document.querySelector(".cstit").offsetHeight;
//     const maxHeight = Math.max(navbarHeight, cstitHeight);
//     document.querySelector(
//       ".head_wrapper"
//     ).style.height = `calc(100vh - ${maxHeight}px)`;
//   }

//   window.addEventListener("resize", adjustHeight);
//   window.addEventListener("load", adjustHeight);


// }

document.addEventListener("DOMContentLoaded", function () {
  // Function to disable scrolling
  function disableScroll() {
    document.body.style.overflow = "hidden";
  }

  // Function to enable scrolling
  function enableScroll() {
    document.body.style.overflow = "";
  }

  const caseHover = document.querySelector(".case_hover");
  const caseHoverLink = document.getElementById("case-hover-link");
  const cstdycontainers = document.querySelectorAll(".cstdycontainer");

  const links = [
    "https://goole.com",
    "https://amazon.com/",
    "https://facebook.com/",
    "https://instagram.com/",
  ];

  // ====================================Handle text rotation==============================================
  const textElement = document.querySelector(".p2conn p");
  if (textElement) {
    textElement.innerHTML = textElement.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * 7.5}deg)">${char}</span>`
      )
      .join("");
  }

  // ===================Video modal functionality===========================================================
  if (document.querySelector(".thumbnails")) {
    const thumbnails = document.querySelectorAll(".thumbnails");
    const modal = document.getElementById("videoModal");
    const videoContainer = modal.querySelector(".video_container video");
    const customControls = modal.querySelector(".custom-video__controls");
    const closeModal = modal.querySelector(".close");

    function openModal(videoUrl) {
      videoContainer.src = videoUrl;
      modal.style.display = "flex";
      videoContainer.pause();
      videoContainer.muted = true;
      customControls.style.display = "flex";
      disableScroll();
    }

    function closeModalFunc() {
      modal.style.display = "none";
      videoContainer.pause();
      videoContainer.src = "";
      videoContainer.muted = false;
      customControls.style.display = "none";
      enableScroll();
    }

    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", function () {
        const videoUrl = this.getAttribute("data-video-url");
        openModal(videoUrl);
      });
    });

    closeModal.addEventListener("click", closeModalFunc);

    videoContainer.addEventListener("click", function () {
      if (videoContainer.paused) {
        videoContainer.play();
        videoContainer.muted = false;
        customControls.style.display = "none";
      } else {
        videoContainer.pause();
        videoContainer.muted = true;
        customControls.style.display = "flex";
      }
    });

    customControls.addEventListener("click", function () {
      if (videoContainer.paused) {
        videoContainer.play();
        videoContainer.muted = false;
        customControls.style.display = "none";
      } else {
        videoContainer.pause();
        videoContainer.muted = true;
        customControls.style.display = "flex";
      }
    });

    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeModalFunc();
      }
    });
  }

  // ///////////////////////////////////////////////////////////////////////////////FAQ accordion functionality
  const faqContainers = document.querySelectorAll(".faq_container");
  faqContainers.forEach((container) => {
    const plus = container.querySelector(".plus");
    const minus = container.querySelector(".minus");
    const answerContainer = container.querySelector(".faq_answer_container");

    plus.addEventListener("click", () => {
      answerContainer.style.maxHeight = answerContainer.scrollHeight + "px";
      plus.style.display = "none";
      minus.style.display = "block";
      answerContainer.style.marginTop = "2rem";
    });

    minus.addEventListener("click", () => {
      answerContainer.style.maxHeight = "0";
      plus.style.display = "block";
      minus.style.display = "none";
      answerContainer.style.marginTop = "0rem";
    });
  });


  // Toggle aside and modal
  const toggleAside = (aside, modal, sidenav, body, show) => {
    if (show) {
      gsap.to(aside, {
        duration: 0.5,
        top: 0,
        opacity: 1,
        ease: "power2.inOut",
        onStart: () => {
          aside.classList.add("show");
          body.classList.add("no-scroll");
        },
      });
      gsap.to(modal, {
        duration: 0.8,
        y: 0,
        ease: "power2.inOut",
      });
      gsap.to(sidenav, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: "power2.inOut",
        onStart: () => {
          sidenav.classList.add("show_text");
        },
      });
    } else {
      gsap.to(sidenav, {
        duration: 0.5,
        opacity: 0,
        y: 100,
        ease: "power2.inOut",
        onComplete: () => {
          sidenav.classList.remove("show_text");
          gsap.to(modal, {
            duration: 0.8,
            y: "-120%",
            ease: "power2.inOut",
            onComplete: () => {
              gsap.to(aside, {
                duration: 0.5,
                opacity: 0,
                ease: "power2.inOut",
                onComplete: () => {
                  aside.classList.remove("show");
                  body.classList.remove("no-scroll");
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
      hamburger: "hamburger",
      close: "cross",
      aside: "aside",
      modal: ".modal",
      sidenav: "sidenav",
    },
    {
      hamburger: "inner_pg",
      close: "cross1",
      aside: "asideinn",
      modal: "#modal1",
      sidenav: "sidenav1",
    },
  ];

  toggleEvents.forEach((event) => {
    const hamburger = document.getElementById(event.hamburger);
    const close = document.getElementById(event.close);
    const aside = document.getElementById(event.aside);
    const modal = document.querySelector(event.modal);
    const sidenav = document.getElementById(event.sidenav);
    const body = document.body;

    hamburger.addEventListener("click", () =>
      toggleAside(aside, modal, sidenav, body, true)
    );
    close.addEventListener("click", () =>
      toggleAside(aside, modal, sidenav, body, false)
    );
  });
});






