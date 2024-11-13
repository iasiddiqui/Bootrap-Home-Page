// ----------------------------latest job on workisy----------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const carouselContainer = document.getElementById("cards-container-latest-job-on-workisy");
  const scrollThumb = document.getElementById("scroll-indicator-latest-job-on-workisy");
  const scrollTrack = document.querySelector(".custom-scrollbar");

  if (carouselContainer && scrollThumb && scrollTrack) {
    function updateScrollThumb() {
      const scrollRatio =
        carouselContainer.scrollLeft /
        (carouselContainer.scrollWidth - carouselContainer.clientWidth);
      const thumbMaxPosition =
        scrollTrack.clientWidth - scrollThumb.clientWidth;
      scrollThumb.style.left = scrollRatio * thumbMaxPosition + "px";
    }

    carouselContainer.addEventListener("scroll", updateScrollThumb);

    // Initial call to position the scroll thumb correctly
    updateScrollThumb();
  } else {
    console.error('One or more elements not found.');
  }
});


// -------------------------work from home--------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const carouselContainer = document.getElementById("cards-container-work-from-home");
  const scrollThumb = document.getElementById("scroll-indicator-work-from-home");
  const scrollTrack = document.querySelector(".work-from-hm-container");

  if (carouselContainer && scrollThumb && scrollTrack) {
    function updateScrollThumb() {
      const scrollRatio =
        carouselContainer.scrollLeft /
        (carouselContainer.scrollWidth - carouselContainer.clientWidth);
      const thumbMaxPosition =
        scrollTrack.clientWidth - scrollThumb.clientWidth;
      scrollThumb.style.left = scrollRatio * thumbMaxPosition + "px";
    }

    carouselContainer.addEventListener("scroll", updateScrollThumb);

    // Initial call to position the scroll thumb correctly
    updateScrollThumb();
  } else {
    console.error('One or more elements not found.');
  }
});


// --------------------------------part times------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const carouselContainer = document.getElementById("cards-container-part-times");
  const scrollThumb = document.getElementById("scroll-indicator-part-time");
  const scrollTrack = document.querySelector(".part-times-pt");

  if (carouselContainer && scrollThumb && scrollTrack) {
    function updateScrollThumb() {
      const scrollRatio =
        carouselContainer.scrollLeft /
        (carouselContainer.scrollWidth - carouselContainer.clientWidth);
      const thumbMaxPosition =
        scrollTrack.clientWidth - scrollThumb.clientWidth;
      scrollThumb.style.left = scrollRatio * thumbMaxPosition + "px";
    }

    carouselContainer.addEventListener("scroll", updateScrollThumb);

    // Initial call to position the scroll thumb correctly
    updateScrollThumb();
  } else {
    console.error('One or more elements not found.');
  }
});

// --------------------------------full time--------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const carouselContainer = document.getElementById("cards-container-full-times");
  const scrollThumb = document.getElementById("scroll-indicator-full-times");
  const scrollTrack = document.querySelector(".full-times-ft");

  if (carouselContainer && scrollThumb && scrollTrack) {
    function updateScrollThumb() {
      const scrollRatio =
        carouselContainer.scrollLeft /
        (carouselContainer.scrollWidth - carouselContainer.clientWidth);
      const thumbMaxPosition =
        scrollTrack.clientWidth - scrollThumb.clientWidth;
      scrollThumb.style.left = scrollRatio * thumbMaxPosition + "px";
    }

    carouselContainer.addEventListener("scroll", updateScrollThumb);

    // Initial call to position the scroll thumb correctly
    updateScrollThumb();
  } else {
    console.error('One or more elements not found.');
  }
});

// ----------------------------------freelance---------------------------------------


document.addEventListener("DOMContentLoaded", function () {
  const carouselContainer = document.getElementById("cards-container-freelances");
  const scrollThumb = document.getElementById("scroll-indicator-freelances");
  const scrollTrack = document.querySelector(".freelances-fce");

  if (carouselContainer && scrollThumb && scrollTrack) {
    function updateScrollThumb() {
      const scrollRatio =
        carouselContainer.scrollLeft /
        (carouselContainer.scrollWidth - carouselContainer.clientWidth);
      const thumbMaxPosition =
        scrollTrack.clientWidth - scrollThumb.clientWidth;
      scrollThumb.style.left = scrollRatio * thumbMaxPosition + "px";
    }

    carouselContainer.addEventListener("scroll", updateScrollThumb);

    // Initial call to position the scroll thumb correctly
    updateScrollThumb();
  } else {
    console.error('One or more elements not found.');
  }
});




// -----------------------------Job Location----------------------------

const carouselContainer = document.getElementById("carouselContainer");
const scrollThumb = document.getElementById("scrollThumb");
const scrollTrack = document.querySelector(".hiring-companies-based-scroll-track");

function updateScrollThumb() {
  const scrollRatio =
    carouselContainer.scrollLeft /
    (carouselContainer.scrollWidth - carouselContainer.clientWidth);
  const thumbMaxPosition =
    scrollTrack.clientWidth - scrollThumb.clientWidth;
  scrollThumb.style.left = scrollRatio * thumbMaxPosition + "px";
}

carouselContainer.addEventListener("scroll", updateScrollThumb);

// Initial call to position the scroll thumb correctly
updateScrollThumb();



// --------------Jobs by location----------------

function scrollCarouselLocation(direction) {
  const container = document.getElementById('carouselContainer');
  const scrollAmount = 200; 

  if (direction === 'left') {
    container.scrollLeft -= scrollAmount;
  } else if (direction === 'right') {
    container.scrollLeft += scrollAmount;
  }
}




// <!-- Latest jobs  Workisy start--------------------------------------------------------- -->



function scrollCarousel(direction,section) {
  // Get the container of the carousel cards based on the section
  const container = document.getElementById(`cards-container-${section}`);
  
  // Get the width of a single card
  const cardWidth = container.querySelector('.card').offsetWidth;
  
  // Set the scroll amount based on direction
  if (direction === 'left') {
    container.scrollBy({
      left: -cardWidth,
      behavior: 'smooth'
    });
  } else if (direction === 'right') {
    container.scrollBy({
      left: cardWidth,
      behavior: 'smooth'
    });
  }
}

