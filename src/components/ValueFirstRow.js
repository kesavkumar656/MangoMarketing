// MODULES //

// COMPONENTS //
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
// SECTIONS //

// PLUGINS //
import { useEffect } from "react";
// UTILS //

// STYLES //
import styles from "@/styles/components/ValueFirstRow.module.scss";

// IMAGES //
import Img1 from "public/img/assets/Value_img1.png";
import Img2 from "public/img/assets/Value_img2.png";

// DATA //
gsap.registerPlugin(ScrollTrigger);

/** ValueFirstRow Component */
export default function ValueFirstRow() {
	useEffect(() => {
		const container = document.querySelector("#valueContainer");
		const OverlapImg = container.querySelector("#OverlapImg");
		const valueContainer = container.querySelector("#valueContainer");
		const parentImg = container.querySelector("#parentImg");

		gsap.to(OverlapImg, {
			y: 100,
			duration: 5,
			ease: "expo",

			scrollTrigger: {
				trigger: OverlapImg,
				start: "top center",
				end: "bottom top",
				scrub: 1,
			},
		});
		gsap.to(parentImg, {
			y: 90,
			duration: 5,
			ease: "expo",

			scrollTrigger: {
				trigger: parentImg,
				start: "top center",
				end: "bottom top",
				scrub: 1,
			},
		});

		ScrollTrigger.create({
			trigger: valueContainer,
			start: "top center",
			end: 30,
			toggleActions: "play reverse none reverse",
			// toggleClass: { targets: h3, className: "AnimationGsap" },
			markers: true,
		});
	});

	return (
		<div id="valueContainer" className={`${styles.container} `}>
			<div>
				<h4>
					What makes us the
					<span className="PrimaryColor"> Multicultural Marketing Mavericks?</span>
				</h4>

				<p>
					We go the distance between conversations and conversions through forging
					lasting connections.
				</p>
			</div>
			<div className={`${styles.ImageWrapper} `}>
				<div id="parentImg" className={`${styles.ParentImg}`}>
					<Image
						className="objectFitCover"
						alt=""
						width={1024}
						height={400}
						src={Img1}
					></Image>
				</div>
				<div className={styles.OverlapImg}>
					<Image
						id="OverlapImg"
						className="objectFitCover"
						src={Img2}
						width={200}
						height={220}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}
