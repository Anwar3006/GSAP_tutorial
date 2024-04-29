// get all elements
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
const moonWatch = document.getElementById("moonWatch");

// add event listener
document.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

var screenWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

if (screenWidth <= 576) {
  console.log(screenWidth);
  moonWatch.innerHTML = "Moon</br>watch.";
} else {
  moonWatch.innerHTML = "Moonwatch.";
}

// GSAP Animations
gsap.from([".logo", ".year"], 1, {
  opacity: 0,
  x: -30,
  ease: Expo.easeInOut,
});

gsap.from(".primaryNav a", 1, {
  opacity: 0,
  x: -30,
  stagger: 0.08,
  ease: Power3.easeInOut,
});

gsap.from(".search", 1, {
  opacity: 0,
  y: -30,
  delay: 0.5,
  ease: Expo.easeInOut,
});

// Animation for image
const images = [
  // Add more image URLs as needed
  "https://res.cloudinary.com/daffqurhi/image/upload/v1714417026/minimalist_watch/jo4ykm87a9ppvusgnl2d.png",
  "https://res.cloudinary.com/daffqurhi/image/upload/v1714417024/minimalist_watch/bsnlcqjveg6bndnbw6ie.png",
  "https://res.cloudinary.com/daffqurhi/image/upload/v1714417025/minimalist_watch/iwwqeixkrbtrwfchiemy.png",
  "https://res.cloudinary.com/daffqurhi/image/upload/v1714417024/minimalist_watch/dcepjiio25npyfk1ft3j.png",
  "https://res.cloudinary.com/daffqurhi/image/upload/v1714417024/minimalist_watch/pfinhzrfj9bm8smdugch.png",
  "https://res.cloudinary.com/daffqurhi/image/upload/v1714417024/minimalist_watch/k5q4c0eekcony4vmdfry.png",
  "https://res.cloudinary.com/daffqurhi/image/upload/v1714417023/minimalist_watch/dehimlayutwj9sldhybc.png",
  "https://res.cloudinary.com/daffqurhi/image/upload/v1714417023/minimalist_watch/rbtxr9wi4wvnwfly2hc9.png",
  "https://res.cloudinary.com/daffqurhi/image/upload/v1714417023/minimalist_watch/hyzfc696qsuebakhq9km.png",
  "https://res.cloudinary.com/daffqurhi/image/upload/v1714417023/minimalist_watch/muwn0cjbevudx91fier9.png",
];

let currentIndex = 0;

function changeImage() {
  // Reset image properties
  gsap.set("#watchImage", { opacity: 0, y: -800 });

  // Change image source
  document.getElementById("watchImage").src = images[currentIndex];

  // Animate new image
  gsap.to("#watchImage", {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: Expo.easeInOut,
    onComplete: () => {
      // Increment index or reset to 0 if at the end
      currentIndex = (currentIndex + 1) % images.length;

      // Repeat the process every few seconds (adjust delay as needed)
      gsap.delayedCall(4, changeImage);
    },
  });
}

// Initial call to start the animation
changeImage();
// Animation for image end

gsap.from(".line-1", 1, {
  opacity: 0,
  delay: 0.8,
  y: -800,
  ease: Expo.easeInOut,
});
gsap.from(".line-2", 1, {
  opacity: 0,
  delay: 1,
  y: -800,
  ease: Expo.easeInOut,
});

gsap.from(".title", 1, {
  opacity: 0,
  delay: 1.2,
  y: 40,
  stagger: 0.08,
  ease: Power3.easeInOut,
});
gsap.from(".order", 1, {
  opacity: 0,
  delay: 1.4,
  y: 40,
  stagger: 0.08,
  ease: Power3.easeInOut,
});

gsap.from(".socials", 1, {
  opacity: 0,
  delay: 2.4,
  y: 40,
  stagger: 0.08,
  ease: Power3.easeInOut,
});
