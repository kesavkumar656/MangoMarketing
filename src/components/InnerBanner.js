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
import ArrowDown from "@/../public/img/assets/ArrowDown.png";

// Initialize gsap plugin
gsap.registerPlugin(ScrollTrigger);

/** Inner Banner component */
function InnerBanner({
	desktopImage = DefaultBanner.src,
	mobileImage = DefaultBannerMob.src,
}) {
	const bannerImgRef = useRef(null);

	useEffect(() => {
		const bannerImg = bannerImgRef.current;
		const isDesktop = window.innerWidth > 1199;

		const imageAnimation = gsap.timeline();

		if (isDesktop) {
			imageAnimation.to(bannerImg, { scale: 1.5 });

			ScrollTrigger.create({
				animation: imageAnimation,
				trigger: "banner_image",
				start: "top top",
				toggleActions: "restart pause reverse pause",
				pin: true,
				scrub: 1,
				end: "+=300px",
				markers: true,
			});
		}
	}, []);

	// Add hover or click event to trigger

	return (
		<section>
			<div className={`${styles.inner_banner_wrap}  container`}>
				<div className={styles.banner_image_wrapper}>
					{/* Banner Image */}
					<div className={styles.banner_image} ref={bannerImgRef}>
						<picture>
							<source srcSet={desktopImage} media="(min-width:767px)" />
							<img
								// className={styles.banner_image
								// }
								src={mobileImage}
								alt="Banner Image"
							/>
						</picture>
					</div>
				</div>
				{/* Banner Content */}
			</div>
		</section>
	);
}

export default InnerBanner;
