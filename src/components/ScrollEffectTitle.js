// MODULES //
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// COMPONENTS //
import Image from "next/image";
import ScrollEffect from "./ScrollEffect";
// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/ScrollEffectTitle.module.scss";

// IMAGES //
import Img1 from "@/../public/img/assets/scrollEffectImg.png";

// DATA //

/** ScrollEffectTitle Component */
export default function ScrollEffectTitle() {
	return (
		<div className={`${styles.ScrollEffectTitle}  `}>
			<div>
				<h4>
					Different cultures, diverse consumer languages <br />
					<span>We speak them all</span>
				</h4>
			</div>
			<div className="d_flex">
				<Image alt="" src={Img1}></Image>
				<ScrollEffect gsap={gsap} ScrollTrigger={ScrollTrigger}></ScrollEffect>
			</div>
		</div>
	);
}
