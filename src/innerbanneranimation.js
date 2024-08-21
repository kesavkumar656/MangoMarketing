// import gsap from "gsap";
// gsap.registerPlugin(createZoomScrollTrigger);

// function createZoomScrollTrigger({
// 	containerId,
// 	scale = 2,
// 	scrub = 0.5,
// 	start = "top center",
// 	end = "bottom center",
// }) {
// 	// Create the ScrollTrigger animation
// 	gsap.to(`#${containerId}`, {
// 		scale: scale,
// 		scrollTrigger: {
// 			trigger: `#${containerId}`,
// 			scrub: scrub,
// 			start: start,
// 			end: end,
// 			markers: markers,
// 		},
// 	});
// }

// // Example of using the zoom ScrollTrigger
// createZoomScrollTrigger({
// 	containerId: "zoomDiv",
// 	scale: 3, // Zoom in to 3x
// 	scrub: 1, // Smooth scrolling
// 	start: "top 80%", // Start when the top of the element hits 80% of the viewport height
// 	end: "bottom 20%", // End when the bottom of the element hits 20% of the viewport height
// 	markers: true, // Show markers
// });
