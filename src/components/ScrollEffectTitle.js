// MODULES //
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// COMPONENTS //
import Image from "next/image";
import { useEffect } from "react";
// SECTIONS //
// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/ScrollEffectTitle.module.scss";

// IMAGES //
import Img1 from "@/../public/img/assets/scrollEffectImg.png";

// DATA //

gsap.registerPlugin(ScrollTrigger);

/** ScrollEffectTitle Component */
export default function ScrollEffectTitle() {
	
	useEffect(() => {
		const container = document.querySelector(`.${styles.ScrollEffectTitle}`);
		const h3Elements = container.querySelectorAll("h3");
		const imgElements = container.querySelectorAll("#ImageContent");

		// Animation for h3 elements
		h3Elements.forEach((h3) => {
			gsap.fromTo(
				h3,
				{ autoAlpha: 0 }, // Initial state: hidden and shifted down
				{
					x: 50,
					autoAlpha: 1,
					ease: "power1.inOut",
					duration: 1.5,
					scrollTrigger: {
						trigger: h3,
						start: "top bottom-=100",
						toggleActions: "play none none reverse",
						scrub: true,
						// markers: true,
					},
				}
			);

			ScrollTrigger.create({
				trigger: h3,
				start: "top center",
				end: () => `+=${h3.clientHeight + 20}`,
				toggleActions: "play reverse none reverse",
				toggleClass: { targets: h3, className: styles.AnimationGsap },
				markers: true,
			});
		});

		// Animation for image elements
		imgElements.forEach((img) => {
			gsap.fromTo(
				img,
				{ autoAlpha: 0 }, // Initial state: hidden and slightly smaller
				{
					autoAlpha: 1,
					pin: true,
					ease: "power1",
					duration: 4,
					scrollTrigger: {
						trigger: img,
						start: "top center",
						end: () => "+=300", // Adjust end value for better timing
						toggleActions: "play none none reverse",
						scrub: true,
						onLeave: () => gsap.to(img, { autoAlpha: 0 }),
						// onEnterBack: () => gsap.to(img, { autoAlpha: 1 }),
						markers: true,
					},
				}
			);

			ScrollTrigger.create({
				trigger: img,
				start: "top center",
				toggleClass: { targets: img, className: styles.imgContentActive },
				markers: true,
			});
		});
	}, []);

	const Images = [
		{
			image: "/img/assets/LogoAnimation/ScrollTitle/BrandStrategy.png",
			h3: "Brand Strategy",
		},
		{
			image: "/img/assets/LogoAnimation/ScrollTitle/PublicRelations.png",
			h3: "Public Relations",
		},
		{
			image: "/img/assets/LogoAnimation/ScrollTitle/SocialMedia.png",
			h3: "Social Media",
		},
		{
			image: "/img/assets/LogoAnimation/ScrollTitle/BrandStrategy.png",
			h3: "Brand Strategy",
		},
		{
			image: "/img/assets/LogoAnimation/ScrollTitle/PublicRelations.png",
			h3: "Public Relations",
		},
		{
			image: "/img/assets/LogoAnimation/ScrollTitle/SocialMedia.png",
			h3: "Social Media",
		},
	];

	return (
		<div className={`${styles.ScrollEffectTitle} container`}>
			<div>
				<h4>
					Different cultures, diverse consumer languages <br />
					<span>We speak them all</span>
				</h4>
			</div>

			{Images.map((data, index) => (
				<div id="Wrapper" key={index}>
					<div className={styles.Wrapper}>
						<div>
							<Image
								className={styles.ImageContent}
								id="ImageContent"
								width={400}
								height={300}
								alt={data.h3}
								src={data.image}
							/>
						</div>
						<h3 className={styles.TextDiv}>{data.h3}</h3>
					</div>
				</div>
			))}
		</div>
	);
}
