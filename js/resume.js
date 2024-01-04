(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#sideNav",
  });
})(jQuery); // End of use strict

// Add event listeners to all buttons with class "toggleSection"
var toggleButtons = document.querySelectorAll(".toggleSection");
toggleButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var section = this.parentNode.nextElementSibling;
    if (section.style.display === "none" || section.style.display === "") {
      section.style.display = "block";
      this.textContent = "Hide Project Demo";
    } else {
      section.style.display = "none";
      this.textContent = "Display Project Demo";
    }
  });
});

// Lazy load images with 'lazy' class using Intersection Observer
var lazyImages = document.querySelectorAll(".lazy");
var observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      var img = entry.target;
      img.src = img.getAttribute("data-src");
      observer.unobserve(img);
    }
  });
});

lazyImages.forEach(function (img) {
  observer.observe(img);
});
