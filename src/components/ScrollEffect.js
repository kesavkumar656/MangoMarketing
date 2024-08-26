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
		const span = container.querySelectorAll("span");

		span.forEach((span, index) => {
			gsap.to(span, {
				autoAlpha: 1,
				scrollTrigger: {
					trigger: span,
					start: "top bottom-=100",
					toggleActions: "play none none reverse",
					// markers: true
				},
			});

			ScrollTrigger.create({
				trigger: span,
				start: "top center",
				end: "+=50px",
				toggleActions: "play reverse none reverse",
				toggleClass: { targets: span, className: "PrimaryColor" },
				// markers: true,
			});
		});
	}, []);

	return (
		<div className={`${styles.ScrollEffect}`}>
			<div>
				<span>
					<h3>Brand Strategy</h3>
				</span>

				<span>
					<h3>Influencer Marketing</h3>
				</span>
				<span>
					<h3>Public Relations</h3>
				</span>
				<span>
					
					<h3>Content Relations</h3>
				</span>
				<span>
					<h3>Promotional Staffing</h3>
				</span>

				<span>
					<h3>Brand Strategy</h3>
				</span>
				<span>
					<h3>Brand Strategy</h3>
				</span>
				<span>
					<h3>Brand Strategy</h3>
				</span>
			</div>
		</div>
	);
}
