// MODULES //
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// COMPONENTS //
import Image from "next/image";
import ScrollEffect from "./ScrollEffect";
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
		// const container = document.querySelector(`.${styles.ScrollEffect}`);
		// const h3Elements = container.querySelectorAll("h3");
		// const imgElements = container.querySelectorAll("#ImageDiv");
		const container = document.querySelector(`.${styles.ScrollEffectTitle}`);
		const element = container.querySelectorAll(`.${styles.ImageContent}`);
		const h3 = container.querySelectorAll("h3");
		const ImgDiv = container.querySelectorAll("#ImageContent");

		h3.forEach((h3, index) => {
			gsap.to(h3, {
				autoAlpha: 1,
				scrollTrigger: {
					trigger: h3,
					start: "top bottom-=100",
					toggleActions: "play none none reverse",
					// markers: true,
				},
			});

			ScrollTrigger.create({
				trigger: h3,
				start: "top center",
				end: () => `+=${h3.clientHeight + 20}`,
				toggleActions: "play reverse none reverse",
				toggleClass: { targets: h3, className: "AnimationGsap" },
				// markers: true,
			});
		});
		if (element.length > 0) {
			element.forEach((img) => {
				gsap.to(img, {
					autoAlpha: 1,
					scrollTrigger: {
						trigger: img, // Use the individual image element as the trigger
						start: "top center",
						toggleActions: "play none none reverse",
						markers: true,
						onEnter: () => img.classList.add(styles.Active), // Apply class to the individual image
						onLeave: () => img.classList.remove(styles.Active),
						onEnterBack: () => img.classList.add(styles.Active),
						onLeaveBack: () => img.classList.remove(styles.Active),
					},
				});
			});
		}

		ScrollTrigger.create({
			trigger: "#ImageDiv",
			start: "top center",
			end: () => `+=${h3.clientHeight + 20}`,
			toggleActions: "play reverse none reverse",
			toggleClass: { targets: ImgDiv, className: "imgContentActive" },
			markers: true,
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
					<div className={`${styles.Wrapper} `}>
						<div>
							<Image
								className={`${styles.ImageContent}`}
								id="ImageContent"
								width={400}
								height={300}
								alt={data.h3}
								src={data.image}
							/>
						</div>

						<h3 className={`${styles.TextDiv}`}>{data.h3}</h3>
					</div>
				</div>
			))}
		</div>
	);
}
