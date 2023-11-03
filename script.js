let menuIcon = document.getElementById("openMenu");
let menu = document.querySelector(".menu");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-times");
  menu.classList.toggle("active");
};

let header = document.getElementById("header");

window.onscroll = () => {
  if (this.scrollY >= 200) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

var swiper = new Swiper(".home-slide", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  spaceBetween: 0,
  centerSlides: true,
  autoplay: {
    delay: 3000,
    diableOnInteraction: false,
  },
  loop: true,
});

let menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("menu-tab-item") &&
    !e.target.classList.contains("active")
  ) {
    const target = e.target.getAttribute("data-target");

    menuTabs.querySelector(".active").classList.remove("active");

    e.target.classList.add("active");

    let menuSection = document.querySelector(".menu-section");

    menuSection
      .querySelector(".menu-tab-content.show")
      .classList.remove("show");

    menuSection.querySelector(target).classList.add("show");
  } else {
    return;
  }
});

var swiper = new Swiper(".slide-content", {
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  autoplay: {
    delay: 3000,
    diableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    660: {
      slidesPerView: 1,
    },
    850: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 2,
    },
  },
});
