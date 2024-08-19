// MODULES //

// COMPONENTS //
import Image from "next/image";
// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/ScrollEffect.module.scss";

// IMAGES //
import Img1 from "@/../public/img/assets/scrollEffectImg.png";
// DATA //

/** ScrollEffect Component */
export default function ScrollEffect() {
	return (
		<div className={`${styles.ScrollEffect}`}>
			<div>
				<h1>Brand Strategy</h1>
				<h1>Social Media Marketing</h1>
				<h1 className={`${styles.PrimaryColor}`}>Influencer Marketing</h1>
				<h1>Public Relations</h1>
				<h1>Content Relations</h1>
				<h1>Promotional Staffing</h1>
				<h1>Brand Strategy</h1>
				<h1>Brand Strategy</h1>
				<h1>Brand Strategy</h1>
				<h1>Brand Strategy</h1>
			</div>
		</div>
	);
}
