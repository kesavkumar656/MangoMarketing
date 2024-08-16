// MODULES //

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
		<div className={`${styles.AnimatedSlider} `}>
			<div className="Slide_div1">
				<Image src={logo1}></Image>

				<Image src={logo2}></Image>

				<Image src={logo3}></Image>

				<Image src={logo4}></Image>

				<Image src={logo5}></Image>
			</div>
			<div>
				<Image src={logo6}></Image>

				<Image src={logo7}></Image>

				<Image src={logo8}></Image>

				<Image src={logo9}></Image>

				<Image src={logo10}></Image>
			</div>
		</div>
	);
}
