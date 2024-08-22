// MODULES //
import { useEffect, useRef } from "react";
// COMPONENTS //
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
// STYLES //
import styles from "@/styles/components/InnerBanner.module.scss";

// IMAGES //
import DefaultBanner from "@/../public/img/banner/defaultDesktopBanner.jpg";
import DefaultBannerMob from "@/../public/img/banner/defaultDesktopBanner.jpg";

// Initialize gsap plugin
gsap.registerPlugin(ScrollTrigger);

/** Inner Banner component */
function InnerBanner({
	desktopImage = DefaultBanner.src,
	mobileImage = DefaultBannerMob.src,
}) {
	const bannerImgRef = useRef(null);
	const contentRef = useRef(null);

	useEffect(() => {
		const bannerImg = bannerImgRef.current;
		const isDesktop = window.innerWidth > 1199;

		const imageAnimation = gsap.timeline();

		if (isDesktop) {
			imageAnimation.to(bannerImg, { scale: 1.5 }, "first" );

			ScrollTrigger.create({
				animation: imageAnimation,
				trigger: ".banner_image",
				start: "top top",
				scrub: true,
				pin: true,
				end: "+=500px",
				// markers: true,
			});
		}
	}, []);

	return (
		<div className={styles.inner_banner_wrap}>
			<div className={styles.banner_image_wrapper}>
				{/* Banner Image */}
				<div className={styles.banner_image} ref={bannerImgRef}>
					<picture>
						<source srcSet={desktopImage} media="(min-width:767px)" />
						<img
							className={styles.banner_image}
							src={mobileImage}
							alt="Banner Image"
						/>
					</picture>
				</div>
			</div>
			{/* Banner Content */}
		</div>
	);
}

export default InnerBanner;
// // MODULES //
// import { useEffect } from "react";
// // COMPONENTS //
// import gsap from "gsap";
// import Image from "next/image";
// // STYLES //
// import styles from "@/styles/components/InnerBanner.module.scss";

// // PLUGINS //

// // IMAGES //
// import DefaultBanner from "@/../public/img/banner/defaultDesktopBanner.jpg";
// import DefaultBannerMob from "@/../public/img/banner/defaultDesktopBanner.jpg";
// // UTILS //

// /** Inner Banner component */
// function InnerBanner({
// 	desktopImage,

// 	mobileImage,
// 	gsap,
// 	ScrollTrigger,
// }) {
// 	useEffect(() => {
// 		const bannerImg = document.querySelector(".inner_banner_wrap");

// 		const isDesktop = window.innerWidth > 1199;

// 		const imageAnimation = gsap.timeline();

// 		// Do the animation only on desktops
// 		if (isDesktop) {
// 			// Animate image from full width to left and content to right
// 			imageAnimation.to(
// 				bannerImg,
// 				{
// 					scale: 1.5,
// 				},

// 				"first"
// 			);

// 			// Initialize ScrollTrigger
// 			ScrollTrigger.create({
// 				animation: imageAnimation,
// 				trigger: ".hero_banner_wrap",
// 				start: "top top",
// 				end: "+=500px",
// 				scrub: true,
// 				pin: true,
// 				markers: true,
// 			});
// 		}
// 	}, []);
// 	return (
// 		<div className={`${styles.inner_banner_wrap} `}>
// 			<div className={`${styles.container1}`}>
// 				<div className={`${styles.banner_image} inner_banner_wrap `}>
// 					<picture>
// 						<source
// 							srcSet={desktopImage ? desktopImage : DefaultBanner.src}
// 							media="(min-width:767px)"
// 						/>
// 						<img
// 							className={`${styles.zoom_element}`}
// 							src={mobileImage ? mobileImage : DefaultBannerMob.src}
// 							alt="mobileImage"
// 							media="(max-width:1367px)"
// 						/>
// 					</picture>
// 				</div>
// 			</div>
// 			{/* Banner Image */}

// 			{/* Banner Content */}
// 		</div>
// 	);
// }

// export default InnerBanner;
