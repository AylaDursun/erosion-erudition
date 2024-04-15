// // let player = document.getElementById("firstLottie");

// // player.addEventListener("ready", () => {
// //   LottieInteractivity.create({
// //         mode:"scroll",
// //         player: "#firstLottie",
// //         actions: [
// //         {
// //             visibility:[0, 1.0],
// //             type: "seek",
// //             frames: [0, 300],
// //         },
// //         ]
// //       });
// // });

// document.addEventListener('DOMContentLoaded', function () {
//   // Initialize Lottie animation
//   const animationContainer = document.getElementById('animation-container');
//   const animationData = {
//       container: animationContainer,
//       renderer: 'svg',
//       loop: false, // Change as needed
//       autoplay: false, // Animation will be controlled by scroll
//       path: 'https://lottie.host/b8308eda-6af5-4176-9301-dde286e84677/wykv3gdXRC.json' // Path to your Lottie animation JSON file
//   };
//   const anim = lottie.loadAnimation(animationData);

//   // Function to control animation based on scroll
//   function handleScroll() {
//       const scrollTop = window.scrollY;
//       const animationOffset = animationContainer.offsetTop; // Adjust as needed
//       const animationHeight = animationContainer.offsetHeight;
//       const windowHeight = window.innerHeight;

//       if (scrollTop > animationOffset - windowHeight && scrollTop < animationOffset + animationHeight) {
//           // Play animation if it's in the viewport
//           anim.play();
//       } else {
//           // Pause animation if it's out of the viewport
//           anim.pause();
//       }
//   }

//   // Attach scroll event listener
//   window.addEventListener('scroll', handleScroll);

//   // Initial call to handleScroll in case the animation is already in view
//   handleScroll();
// });