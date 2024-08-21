// MODULES //
import { useEffect } from "react";
// COMPONENTS //
import gsap from "gsap";
import Image from "next/image";
// STYLES //
import styles from "@/styles/components/InnerBanner.module.scss";

// PLUGINS //

// IMAGES //
import DefaultBanner from "@/../public/img/banner/defaultDesktopBanner.jpg";
import DefaultBannerMob from "@/../public/img/banner/defaultDesktopBanner.jpg";
// UTILS //

/** Inner Banner component */
function InnerBanner({
	desktopImage,

	mobileImage,
	gsap,
	ScrollTrigger,
}) {
	useEffect(() => {
		const bannerImg = document.querySelector(".inner_banner_wrap");
		const content = document.querySelector(".hero_content");
		const isDesktop = window.innerWidth > 1199;

		const imageAnimation = gsap.timeline();

		// Do the animation only on desktops
		if (isDesktop) {
			// Animate image from full width to left and content to right
			imageAnimation.to(
				bannerImg,
				{
					scale: 1.5,
				},

				"first"
			);

			// Initialize ScrollTrigger
			ScrollTrigger.create({
				animation: imageAnimation,
				trigger: ".hero_banner_wrap",
				start: "top top",

				scrub: true,
				pin: true,
				markers: true,
			});
		}
	}, []);
	return (
		<div className={`${styles.inner_banner_wrap}  ${styles.width100} `}>
			{/* Banner Image */}
			<div className={`${styles.banner_image} `}>
				<picture>
					<source
						srcSet={desktopImage ? desktopImage : DefaultBanner.src}
						media="(min-width:767px)"
					/>
					<img
						className={`${styles.zoom_element}`}
						src={mobileImage ? mobileImage : DefaultBannerMob.src}
						alt="mobileImage"
						media="(max-width:1367px)"
					/>
				</picture>
			</div>
			{/* Banner Content */}
		</div>
	);
}

export default InnerBanner;
