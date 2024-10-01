let search = document.querySelector(".search");

document.querySelector("#search-btn").onclick = () => {
  search.classList.toggle("active");
  shopping.classList.remove("active");
  login.classList.remove("active");
  nav.classList.remove("active");
};

let shopping = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
  shopping.classList.toggle("active");
  search.classList.remove("active");
  login.classList.remove("active");
  nav.classList.remove("active");
};

let login = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
  login.classList.toggle("active");
  search.classList.remove("active");
  shopping.classList.remove("active");
  nav.classList.remove("active");
};
let nav = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  nav.classList.toggle("active");
  search.classList.remove("active");
  shopping.classList.remove("active");
  login.classList.remove("active");
  
};

window.onscroll = () => {
  search.classList.remove("active");
  shopping.classList.remove("active");
  login.classList.remove("active");
  nav.classList.remove("active");
};

var swiper = new Swiper(".product-slider", {
  loop:true,
  spaceBetween: 20,
  autoplay: {
    deley:7500,
    disableOnInteraction:false,
  },
  centeredSlides: true,
   breakpoints: {
    0: {
      slidesPerView: 1,
    
    },
    768: {
      slidesPerView: 2,
      
    },
    1020: {
      slidesPerView: 3,
    
    },
  },
});
var swiper = new Swiper(".review-slider", {
  loop:true,
  spaceBetween: 20,
  autoplay: {
    deley:7500,
    disableOnInteraction:false,
  },
  centeredSlides: true,
   breakpoints: {
    0: {
      slidesPerView: 1,
    
    },
    768: {
      slidesPerView: 2,
      
    },
    1020: {
      slidesPerView: 3,
    
    },
  },
});
