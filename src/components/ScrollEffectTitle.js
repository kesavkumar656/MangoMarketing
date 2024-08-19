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
				<p>
					Different cultures, diverse consumer languages <br />{" "}
					<span className="PrimaryColor">We speak them all</span>{" "}
				</p>
			</div>
			<div className="d_flex">
				<Image alt="" src={Img1}></Image>
				<ScrollEffect></ScrollEffect>
			</div>
		</div>
	);
}
