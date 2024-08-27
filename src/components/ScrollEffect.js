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
		const h3 = container.querySelectorAll("h3");

		h3.forEach((h3, index) => {
			gsap.to(h3, {
				autoAlpha: 1,
				scrollTrigger: {
					trigger: h3,
					start: "top bottom-=100",
					toggleActions: "play none none reverse",
					markers: true
				},
			});

			ScrollTrigger.create({
				trigger: h3,
				start: "top center",
				end: "+=50px",
				toggleActions: "play reverse none reverse",
				toggleClass: { targets: h3, className: "AnimationGsap" },
				// markers: true,
			});
		});
	}, []);

	return (
		<div className={`${styles.ScrollEffect} `}>
			<div>
				<h3>Brand Strategy</h3>
				<h3>Influencer Marketing</h3>

				<h3>Public Relations</h3>

				<h3>Content Relations</h3>

				<h3>Promotional Staffing</h3>

				<h3>Brand Strategy</h3>

				<h3>Brand Strategy</h3>

				<h3>Brand Strategy</h3>
			</div>
		</div>
	);
}
