const slides = [
  {
    imgMobile: "/images/mobile-image-hero-1.jpg",
    imgDesktop: "/images/desktop-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    desc: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    imgMobile: "/images/mobile-image-hero-2.jpg",
    imgDesktop: "/images/desktop-image-hero-2.jpg",
    title: "We are available all across the globe",
    desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    imgMobile: "/images/mobile-image-hero-3.jpg",
    imgDesktop: "/images/desktop-image-hero-3.jpg",
    title: "Manufactured with the best materials",
    desc: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

const prevButton = document.querySelector(".button-prev");
const nextButton = document.querySelector(".button-next");
const slideImg = document.querySelector(".slide-img");
const slideTitle = document.querySelector(".slide-title");
const slideDescription = document.querySelector(".slide-description");
const hamburgerBtn = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-button");
let currentSlide = 0;

function updateSlide() {
  const screenWidth = window.innerWidth;
  const slide = slides[currentSlide];

  slideImg.src = screenWidth <= 639 ? slide.imgMobile : slide.imgDesktop;

  slideTitle.innerText = slide.title;
  slideDescription.innerText = slide.desc;
}

updateSlide();

window.addEventListener("resize", updateSlide);

prevButton.addEventListener("click", () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = 2;
    updateSlide();
  } else {
    updateSlide();
  }
});

nextButton.addEventListener("click", () => {
  currentSlide++;
  if (currentSlide > 2) {
    currentSlide = 0;
    updateSlide();
  } else {
    updateSlide();
  }
});

hamburgerBtn.addEventListener("click", () => {
  overlay.classList.add("open");
  overlay.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("open");
  overlay.classList.add("hidden");
});
