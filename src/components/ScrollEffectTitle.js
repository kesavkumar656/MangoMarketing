// MODULES //

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
		<div className={`${styles.ScrollEffectTitle}`}>
			<div className="">
				<h6>Different cultures, diverse consumer languages We speak them all</h6>
			</div>
			<div className="d_flex">
				<Image src={Img1}></Image>
				<ScrollEffect></ScrollEffect>
			</div>
		</div>
	);
}
