// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/HomeHero.module.scss";
import InnerBanner from "../components/InnerBanner";

import RowOne from "../components/RowOne";
import RowTwoContent from "../components/RowTwoContent";
import AnimationSlider from "../components/AnimationSlider";
import ScrollEffectTitle from "../components/ScrollEffectTitle";
// IMAGES //

// DATA //

/** HomeHero Section */
export default function HomeHero() {
	return (
		<div className={`${styles.hero_wrap} text_xl  `}>
			<h1>
				Think you know your <span className="PrimaryColor">audience</span> across
				cultures?
			</h1>

			<InnerBanner></InnerBanner>
			<RowOne></RowOne>
			<RowTwoContent></RowTwoContent>
			<AnimationSlider></AnimationSlider>
			<ScrollEffectTitle></ScrollEffectTitle>
		</div>
	);
}
