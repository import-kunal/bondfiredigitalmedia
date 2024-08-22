// Prevent right-click and specific key events (e.g., F12, Ctrl+U, Ctrl+C, Ctrl+V)
document.oncontextmenu = (e) => {
  e.preventDefault(); // Prevent default right-click behavior
  alert("Right click is disabled");
  return false;
};

document.onkeydown = (e) => {
  if (e.key === "F12" || (e.ctrlKey && ["u", "c", "v"].includes(e.key))) {
      e.preventDefault();
      alert("This action is disabled");
      return false;
  }
};

// Selecting the 'prev' and 'next' div elements
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Adding event listeners to log messages on click
if (prevButton) {
  prevButton.addEventListener('click', () => {
      console.log('Previous button clicked');
  });
}

if (nextButton) {
  nextButton.addEventListener('click', () => {
      console.log('Next button clicked');
  });
}

// Function to update the viewport size display
function updateViewportSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  const widthElement = document.getElementById('widthofviewport');
  const heightElement = document.getElementById('heightofviewport');
  
  if (widthElement && heightElement) {
      widthElement.innerText = `Width: ${width}px`;
      heightElement.innerText = `Height: ${height}px`;
  }
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
          
          if (displayElement) displayElement.style.display = "none"; // Hide all sections
          if (loaderElement) {
              loaderElement.style.transition = "none";  // Disable transition for instant reset
              loaderElement.style.width = index < step ? "100%" : "0%"; // Set progress bars
          }
      });

      // Show the current section and fill its progress bar
      const currentSection = sections[step];
      const displayElement = document.querySelector(currentSection.display);
      const loaderElement = document.querySelector(currentSection.loader);
      
      if (displayElement) displayElement.style.display = "block"; // Display the current section
      setTimeout(() => {
          if (loaderElement) {
              loaderElement.style.transition = "";  // Re-enable transition
              loaderElement.style.width = "100%"; // Fill the progress bar
          }
      }, 50);

      // Set up auto-slide to the next section after 15 seconds
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
  if (nextButton) nextButton.addEventListener('click', nextStep);
  if (prevButton) prevButton.addEventListener('click', prevStep);

  // Initial activation
  updateSection(currentStep);
});

// Canvas drawing functionality with touch support
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

      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const y = e.touches ? e.touches[0].clientY : e.clientY;

      ctx.lineWidth = 5;
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#FFDD00';

      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, y);

      console.log('Drawing at:', x, y);
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

  // Touch events for mobile devices
  canvas.addEventListener('touchstart', startDrawing);
  canvas.addEventListener('touchend', endDrawing);
  canvas.addEventListener('touchmove', draw);

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

// Functionality for disabling/enabling scroll
document.addEventListener("DOMContentLoaded", function () {
  function disableScroll() {
      document.body.style.overflow = "hidden";
  }

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

  // Handle text rotation
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

  // Video modal functionality
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
  }
});
