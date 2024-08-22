// MODULES //
import { useEffect } from "react";
import gsap from "gsap";

// COMPONENTS //
import Image from "next/image";
// h1S //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/ScrollEffect.module.scss";

// IMAGES //
import Img1 from "@/../public/img/assets/scrollEffectImg.png";

// DATA //

/** ScrollEffect Component */
export default function ScrollEffect({ gsap, ScrollTrigger }) {
	useEffect(() => {
		const container = document.querySelector(`.${styles.ScrollEffect}`);
		const h1s = container.querySelectorAll("h1");

		h1s.forEach((h1, index) => {
			gsap.to(h1, {
				autoAlpha: 1,
				scrollTrigger: {
					trigger: h1,
					start: "top bottom-=100",
					toggleActions: "play none none reverse",
					// markers: true
				},
			});

			ScrollTrigger.create({
				trigger: h1,
				start: "top center",
				end: "+=50px",
				toggleActions: "play reverse none reverse",
				toggleClass: { targets: h1, className: "PrimaryColor" },
				// markers: true,
			});
		});
	}, []);

	return (
		<div className={`${styles.ScrollEffect}`}>
			<div>
				<h1>Brand Strategy</h1>
				<h1>Social Media Marketing</h1>
				<h1>Influencer Marketing</h1>
				<h1>Public Relations</h1>
				<h1>Content Relations</h1>
				<h1>Promotional Staffing</h1>
				<h1>Brand Strategy</h1>
				<h1>Brand Strategy</h1>
				<h1>Brand Strategy</h1>
				<h1>Brand Strategy</h1>
			</div>
		</div>
	);
}
