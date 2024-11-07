const categoriesInfoInternships = [
  { category: "Big brands", info: [1, 2, 3, 4, 5, 6, 7, 8] },
  { category: "Work from home", info: ["one", "two"] },
  { category: "Part-time", info: [1, 2, 3, 4] },
  { category: "MBA", info: [1, 2, 3, 4] },
  { category: "Engineering", info: [1, 2, 3, 4] },
  { category: "Media", info: [1, 2, 3, 4] },
  { category: "Design", info: [1, 2, 3, 4] },
  { category: "Data science", info: [1, 2, 3, 4] },
];

const categoriesInfoJobs = [
  { category: "Full-time", info: [1, 2, 3, 4] },
  { category: "Part-time", info: ["one", "two"] },
  { category: "Remote", info: [1, 2, 3, 4] },
  { category: "Engineering", info: [1, 2, 3, 4] },
  { category: "Management", info: [1, 2, 3, 4] },
  { category: "Sales", info: [1, 2, 3, 4] },
];

let activeCategoryIndexInternships = 0;
let activeCategoryIndexJobs = 0;

$(document).ready(function () {
  const $categoryButtonsInternships = $("#category-buttons-internships");
  const $cardsContainerInternships = $("#cards-container-internships");
  const $scrollIndicatorInternships = $("#scroll-indicator-internships");

  const $categoryButtonsJobs = $("#category-buttons-jobs");
  const $cardsContainerJobs = $("#cards-container-jobs");
  const $scrollIndicatorJobs = $("#scroll-indicator-jobs");

  // Render categories for internships
  function renderCategoriesInternships() {
    categoriesInfoInternships.forEach((category, index) => {
      const button = `<button class="btn category-button ${
        index === 0 ? "active" : ""
      }" data-index="${index}">${category.category}</button>`;
      $categoryButtonsInternships.append(button);
    });
  }

  // Render cards for internships
  function renderCardsInternships(index) {
    $cardsContainerInternships.empty();
    categoriesInfoInternships[index].info.forEach((card) => {
      const cardHtml = `
            <div class="card">
                <div>
                    <h6 style="color:#096eb6; font-size:.9rem;">Appit Software Solutions</h6>
                    <div class="d-flex align-items-center">
                        <h6 style="font-size:1.2rem; font-weight:bold;">Tableau Developer</h6>
                        <span class="ml-2 badge badge-primary"><i class="fas fa-bolt"></i></span>
                    </div>
                    <div class="job-info">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Pune</span>
                    </div>
                    <div class="job-info">
                        <i class="fas fa-calendar-alt"></i>
                        <span>1 day ago</span>
                    </div>
                    <div class="job-info">
                        <i class="fas fa-briefcase"></i>
                        <span>10+ Years</span>
                    </div>
                </div>
                <div class="d-flex align-items-center skills">
                    <span class="mr-2">Skills:</span>
                    <div class="d-flex">
                        <span class="badge badge-secondary">Mysql</span>
                        <span class="badge badge-secondary">Javascript</span>
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="salary-info">
                        <span>15 Lacs-26 Lacs</span>
                        <span>/year</span>
                    </div>
                    <a href="#" class="btn btn-light btn-card">Temporary/Contractual</a>
                </div>
            </div>
            `;
      $cardsContainerInternships.append(cardHtml);
    });
  }

  // Render categories for jobs
  function renderCategoriesJobs() {
    categoriesInfoJobs.forEach((category, index) => {
      const button = `<button class="btn category-button ${
        index === 0 ? "active" : ""
      }" data-index="${index}">${category.category}</button>`;
      $categoryButtonsJobs.append(button);
    });
  }

  // Render cards for jobs
  function renderCardsJobs(index) {
    $cardsContainerJobs.empty();
    categoriesInfoJobs[index].info.forEach((card) => {
      const cardHtml = `
            <div class="card">
                <div>
                    <h6 style="color:#096eb6; font-size:.9rem;">TechCorp Solutions</h6>
                    <div class="d-flex align-items-center">
                        <h6 style="font-size:1.2rem; font-weight:bold;">Software Engineer</h6>
                        <span class="ml-2 badge badge-primary"><i class="fas fa-bolt"></i></span>
                    </div>
                    <div class="job-info">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Bangalore</span>
                    </div>
                    <div class="job-info">
                        <i class="fas fa-calendar-alt"></i>
                        <span>3 days ago</span>
                    </div>
                    <div class="job-info">
                        <i class="fas fa-briefcase"></i>
                        <span>5+ Years</span>
                    </div>
                </div>
                <div class="d-flex align-items-center skills">
                    <span class="mr-2">Skills:</span>
                    <div class="d-flex">
                        <span class="badge badge-secondary">Java</span>
                        <span class="badge badge-secondary">Spring</span>
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="salary-info">
                        <span>12 Lacs-20 Lacs</span>
                        <span>/year</span>
                    </div>
                    <a href="#" class="btn btn-light btn-card">Full-time</a>
                </div>
            </div>
            `;
      $cardsContainerJobs.append(cardHtml);
    });
  }

  // Update scroll indicator
  function updateScrollIndicator($scrollContainer, $scrollIndicator) {
    const scrollLeft = $scrollContainer.scrollLeft();
    const scrollWidth =
      $scrollContainer[0].scrollWidth - $scrollContainer[0].clientWidth;
    const scrollPercent = (scrollLeft / scrollWidth) * 100;
    $scrollIndicator.css("left", `${scrollPercent}%`);
  }

  // Category button click handling for internships
  $categoryButtonsInternships.on("click", ".category-button", function () {
    const index = $(this).data("index");
    $(".category-button").removeClass("active");
    $(this).addClass("active");
    activeCategoryIndexInternships = index;
    renderCardsInternships(index);
  });

  // Category button click handling for jobs
  $categoryButtonsJobs.on("click", ".category-button", function () {
    const index = $(this).data("index");
    $(".category-button").removeClass("active");
    $(this).addClass("active");
    activeCategoryIndexJobs = index;
    renderCardsJobs(index);
  });

  // Scroll event for internships
  $cardsContainerInternships.on("scroll", function () {
    updateScrollIndicator(
      $cardsContainerInternships,
      $scrollIndicatorInternships
    );
  });

  // Scroll event for jobs
  $cardsContainerJobs.on("scroll", function () {
    updateScrollIndicator($cardsContainerJobs, $scrollIndicatorJobs);
  });

  // Initial rendering
  renderCategoriesInternships();
  renderCategoriesJobs();
  renderCardsInternships(activeCategoryIndexInternships);
  renderCardsJobs(activeCategoryIndexJobs);
});

// ----------------------------------------Featured Companies----------------------------------------------------------------



const scrollContainer = document.getElementById("companyCarousel");

// function scrollLeft() {
//   scrollContainer.scrollBy({ left: -180, behavior: 'smooth' });
// }

// function scrollRight() {
//   scrollContainer.scrollBy({ left: 180, behavior: 'smooth' });
// }

// Auto-scroll every 3 seconds
let scrollInterval = setInterval(() => {
  // Check if we're at the end, reset to the beginning if true
  if (
    scrollContainer.scrollLeft >=
    scrollContainer.scrollWidth - scrollContainer.clientWidth
  ) {
    scrollContainer.scrollLeft = 0;
  } else {
    scrollContainer.scrollBy({ left: 180, behavior: "smooth" });
  }
}, 2000);
