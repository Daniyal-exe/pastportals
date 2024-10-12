$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.top').addClass("sticky");
        }else{
            $('.top').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }

        // Site Map button show/hide script
        if(this.scrollY > 900){
            $('.side-menu-btn').addClass("site-show");
        }else{
            $('.side-menu-btn').removeClass("site-show");
        }

        // Site Map show/hide script
        if(this.scrollY > 900){
           $('#sidebar').addClass("sidebar-show");
        }else{
           $('#sidebar').removeClass("sidebar-show");
      }
    });


    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        // $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    $('#sidebar .list-items li a').click(function(){
      // applying again smooth scroll on menu items click
      $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.top .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });   
});


//Loader Script
$(document).ready(function(){
  var loader = $("#loader");
  setTimeout(function(){
    loader.css("opacity", "0");
  }, 5200);
});

$(document).ready(function() {
  if ($('#loader').length > 0) {
    setTimeout(function() {
      $('#loader').remove();
    }, 5800);
  }
});


//Travel Section Tab Switching Script
$(document).ready(function () {
  // Add active class on tab click
  $(".tab").on("click", function () {
    var categoryId = $(this).data("id");

    $(".tab, .tab-pane").removeClass("active");
    $(this).addClass("active");
    $("#" + categoryId).addClass("active");
  });
});


//Sitemap Menu Close on click Script
document.addEventListener("DOMContentLoaded", function() {
  var sidebar = document.getElementById("sidebar");
  var sidebarItems = sidebar.querySelectorAll(".list-items li a");
  for (var i = 0; i < sidebarItems.length; i++) {
    sidebarItems[i].addEventListener("click", function() {
      sidebar.classList.remove("sidebar-show");
      document.getElementById("btn").checked = false;
    });
  }
});


// video slider script

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
let currentSlide = 0;

var sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  // Play the video of the newly navigated slide
  slides[manual].play();

  currentSlide = manual;
};

const playNextSlide = function () {
  // Increment the currentSlide index and play the next video
  currentSlide = (currentSlide + 1) % slides.length;
  sliderNav(currentSlide);
};

slides.forEach((slide, i) => {
  // Add event listener to detect when a video has ended
  slide.addEventListener("ended", playNextSlide);
});

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

// Autoplay the first video when the page loads
window.addEventListener("load", () => {
  slides[currentSlide].play();
});



//Scroll Reveal Animation Script
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
}

//Discover Section
ScrollReveal().reveal(".discover-header",{
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover-subheader",{
  ...scrollRevealOption,
  interval: 500,
  delay: 200,
});

ScrollReveal().reveal(".discover-card",{
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover-card-content",{
  ...scrollRevealOption,
  interval: 500,
  delay: 200,
});

//About Section
ScrollReveal().reveal(".about-heading",{
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".about-image",{
  ...scrollRevealOption,
  interval: 500,
  delay: 300,
});

ScrollReveal().reveal(".about-content",{
  ...scrollRevealOption,
  interval: 500,
  delay: 500,
});

//Contact Section
ScrollReveal().reveal(".contact-container",{
  ...scrollRevealOption,
  interval: 500,
});

//Travel Section
ScrollReveal().reveal(".title-bg h1",{
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".travel-card",{
  ...scrollRevealOption,
  interval: 500,
  delay: 200,
});

//Gallery Section
ScrollReveal().reveal(".gallery-wrapper",{
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".gallery-heading",{
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".zone-gallery-heading",{
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".zone-gallery",{
  ...scrollRevealOption,
  interval: 500,
  delay: 200,
});

ScrollReveal().reveal(".download",{
  ...scrollRevealOption,
  interval: 500,
});

//Feedback Section
ScrollReveal().reveal(".feedback-heading",{
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".slide-container",{
  ...scrollRevealOption,
  interval: 500,
  delay: 300,
});

ScrollReveal().reveal(".show-modal",{
  ...scrollRevealOption,
  interval: 500,
  delay: 200,
});



// Gallery Section Script

const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".gallery-wrapper i");

const showHideIcons = () => {
// showing and hiding prev/next icon according to carousel scroll left value
let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
icon.addEventListener("click", () => {
  let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
  // if clicked icon is left, reduce width value from the carousel scroll left else add to it
  carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
  setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
});
});

// Lightbox Script

const lightbox = document.querySelector(".lightbox");
const lightboxCloseBtn = document.querySelector(".lightbox .close-icon");
const carouselImages = document.querySelectorAll(".carousel img");
const lightboxImage = document.querySelector(".lightbox .preview-img img");

carouselImages.forEach((img, index) => {
img.addEventListener("click", () => {
  showLightbox(index);
});
});

lightboxCloseBtn.addEventListener("click", () => {
closeLightbox();
});

function showLightbox(index) {
lightboxImage.src = carouselImages[index].src;
lightbox.style.display = "flex";
document.body.style.overflow = "hidden";
}

function closeLightbox() {
lightbox.style.display = "none";
document.body.style.overflow = "auto";
}



//Zone Gallery Script

const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".zone-gallery .image");

window.onload = () => {
filterItem.onclick = (selectedItem) => {
if (selectedItem.target.classList.contains("item")) {
// Remove "active" class from the currently active item
filterItem.querySelector(".active").classList.remove("active");

// Add "active" class to the selected item
selectedItem.target.classList.add("active");

// Get the data-name attribute value of the selected item
let filterName = selectedItem.target.getAttribute("data-name");

// Loop through each image in the zone-gallery
filterImg.forEach((image) => {
  // Get the data-name attribute value of the current image
  let filterImages = image.getAttribute("data-name");
  
  // Check if the selected item's data-name matches the image's data-name or if the selected item is "all"
  if ((filterImages == filterName) || (filterName == "all")) {
    image.classList.remove("hide");
    image.classList.add("show");
  } else {
    image.classList.add("hide");
    image.classList.remove("show");
  }
});
}
}

// Add click event to each image for preview
for (let i = 0; i < filterImg.length; i++) {
filterImg[i].setAttribute("onclick", "preview(this)");
}
}


const previewBox = document.querySelector(".preview-box"),
categoryName = previewBox.querySelector(".title p"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow");

function preview(element) {
// Disable scrolling on the body
document.querySelector("body").style.overflow = "hidden";

// Get the source and data-name of the clicked image
let selectedPrevImg = element.querySelector("img").src;
let selectedImgCategory = element.getAttribute("data-name");

// Set the preview image source and category name
previewImg.src = selectedPrevImg;
categoryName.textContent = selectedImgCategory;

// Show the preview box and shadow
previewBox.classList.add("show");
shadow.classList.add("show");

// Close preview on clicking the close icon
closeIcon.onclick = () => {
previewBox.classList.remove("show");
shadow.classList.remove("show");

// Enable scrolling on the body
document.querySelector("body").style.overflow = "auto";
}
}




// Swiper JS Script
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});


const section = document.querySelector(".feedback"),
  showBtn = document.querySelector(".show-modal"),
  closeBtn = document.querySelector(".close-btn");

// Create overlay element
const overlay = document.createElement("div");
overlay.classList.add("feedback-overlay"); // Set the class name to "feedback-overlay"

showBtn.addEventListener("click", () => {
  section.classList.add("active");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden"; // Disable scrolling
});

closeBtn.addEventListener("click", () => {
  section.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "auto"; // Enable scrolling
});

// Append overlay to the body
document.body.appendChild(overlay);

const stars = document.querySelectorAll(".stars i");

stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
    });
  });
});

// ****JAVASCRIPT ENDS HERE****