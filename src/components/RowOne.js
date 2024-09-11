// MODULES //
import { useEffect } from "react";
// COMPONENTS //
import Image from "next/image";
// SECTIONS //
import gsap from "gsap";
// PLUGINS //
import ScrollTrigger from "gsap/dist/ScrollTrigger";
// UTILS //

// STYLES //
import styles from "@/styles/components/RowOne.module.scss";
import img1 from "@/../public/img/assets/img1.png";
import img2 from "@/../public/img/assets/img2.png";
import img3 from "@/../public/img/assets/img3.png";
// IMAGES //

// DATA //

gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollTrigger);
/** RowOne Component */
export default function RowOne() {
	useEffect(() => {
		// eslint-disable-next-line require-jsdoc
		// const loadGSAP = async () => {
		// const { gsap } = await import("gsap");
		// const { ScrollTrigger } = await import("gsap/ScrollTrigger");

		const container = document.querySelector(`.${styles.RowOne}`);

		const ImageDiv = container.querySelector(".imageDiv");
		const Img1 = container.querySelector("#img1");
		const Img3 = container.querySelector("#img3");

		ScrollTrigger.create({
			trigger: ImageDiv,
			start: "top center",
			end: "100px",
			toggleActions: "play reverse none reverse",
			toggleClass: `${styles.active}`,
			markers: true,
		});

		gsap.to(Img1, {
			x: -100,

			y: 50,
			duration: 3,
			scrollTrigger: {
				trigger: Img1,
				start: "top center",
				end: "200px",
				scrub: 1,
				markers: true,
			},
		});
		gsap.to(Img3, {
			x: 100,
			y: 50,
			duration: 3,
			scrollTrigger: {
				trigger: Img3,
				start: "top center",
				end: "200px",

				scrub: 1,
			},
		});
		// };

		// loadGSAP();
	}, []);

	return (
		<div className={`${styles.RowOne} container`}>
			<div className={`${styles.wrapper}`}>
				<div className={`${styles.TextDiv}`}>
					<div>
						<h5 className="color_white">
							Connect with their <span className="PrimaryColor">interests </span>
							Resonate with their <span className="PrimaryColor">sentiment </span>{" "}
							Campaign towards <span className="PrimaryColor">success </span>
						</h5>
					</div>
					<div>
						<p className="text_sm color_white">
							Don &apos;t just know your audience, understand them better with us. Deep
							dive into the finer nuances of their habits and preferences to create
							campaigns that engage on a profound level.
						</p>
					</div>
				</div>
				<div className={styles.imageDiv}>
					<div className={styles.images} id="img1">
						<Image src={img1} alt="img1" width={300} height={400} />
					</div>

					<div className={styles.images}>
						<Image src={img2} width={300} height={400} alt="img2" />
					</div>
					<div className={styles.images} id="img3">
						<Image src={img3} width={300} height={400} alt="img3" />
					</div>
				</div>
			</div>
		</div>
	);
}
