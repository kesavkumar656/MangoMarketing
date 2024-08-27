// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// STYLES //
import styles from "@/styles/sections/HomeHero.module.scss";
import InnerBanner from "../components/InnerBanner";

import RowOne from "../components/RowOne";
import RowTwoContent from "../components/RowTwoContent";
import AnimationSlider from "../components/AnimationSlider";
import ScrollEffectTitle from "../components/ScrollEffectTitle";
import ScrollDown from "../components/ScrollDown";
// IMAGES //

// DATA //

/** HomeHero Section */
export default function HomeHero() {
	return (
		<div className={`${styles.hero_wrap} text_xl container   `}>
			<h2 className="text_center">
				Think you know your <span className="PrimaryColor">audience</span> across
				cultures?
			</h2>

			<InnerBanner gsap={gsap} ScrollTrigger={ScrollTrigger}></InnerBanner>
			<ScrollDown></ScrollDown>
			<RowOne></RowOne>
			<RowTwoContent></RowTwoContent>
			<AnimationSlider></AnimationSlider>
			<ScrollEffectTitle></ScrollEffectTitle>
		</div>
	);
}
