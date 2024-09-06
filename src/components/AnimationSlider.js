// MODULES //
import Marquee from "react-fast-marquee";
// COMPONENTS //
import Image from "next/image";
// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/AnimationSlider.module.scss";

// IMAGES //
import logo1 from "@/../public/img/assets/LogoAnimation/img1.png";
import logo2 from "@/../public/img/assets/LogoAnimation/img2.png";
import logo3 from "@/../public/img/assets/LogoAnimation/img3.png";
import logo4 from "@/../public/img/assets/LogoAnimation/img4.png";
import logo5 from "@/../public/img/assets/LogoAnimation/img5.png";
import logo6 from "@/../public/img/assets/LogoAnimation/img6.png";
import logo7 from "@/../public/img/assets/LogoAnimation/img7.png";
import logo8 from "@/../public/img/assets/LogoAnimation/img8.png";
import logo9 from "@/../public/img/assets/LogoAnimation/img9.png";
import logo10 from "@/../public/img/assets/LogoAnimation/img10.png";
// DATA //

/** AnimationSlider Component */
export default function AnimationSlider() {
	return (
		<div className={`${styles.AnimatedSlider}  section_spacing `}>
			<h4 className="text_center">
				Our brands at a <span className="PrimaryColor ">glance</span>
			</h4>
			<div className={`${styles.Slide_div1} `}>
				<Image alt="" src={logo1}></Image>

				<Image alt="" src={logo2}></Image>

				<Image alt="" src={logo3}></Image>

				<Image alt="" src={logo4}></Image>

				<Image alt="" src={logo5}></Image>
				<Image alt="" src={logo1}></Image>

				<Image alt="" src={logo2}></Image>

				<Image alt="" src={logo3}></Image>

				<Image alt="" src={logo4}></Image>

				<Image alt="" src={logo5}></Image>
			</div>
			<div className={`${styles.Slide_div2} `}>
				<Image alt="" src={logo6}></Image>

				<Image alt="" src={logo7}></Image>

				<Image alt="" src={logo8}></Image>

				<Image alt="" src={logo9}></Image>

				<Image alt="" src={logo10}></Image>
				<Image alt="" src={logo6}></Image>
			</div>
		</div>
	);
}
