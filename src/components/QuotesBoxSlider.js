// MODULES //

// COMPONENTS //
import QuoteBox from "./QuoteBox";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/QuotesBoxSlider.module.scss";

// IMAGES //
import logo1 from "@/../public/img/assets/LogoAnimation/img1.png";
import logo2 from "@/../public/img/assets/LogoAnimation/img2.png";
import logo3 from "@/../public/img/assets/LogoAnimation/img3.png";
import logo4 from "@/../public/img/assets/LogoAnimation/img4.png";
// DATA //

/** QuotesBoxSlider Component */
export default function QuotesBoxSlider() {
	return (
		<div className={`${styles.QuotesSliderContainer} `}>
			<div className="text_center">
				<h1>Success stories </h1>
				<h2>From our happy patrons</h2>
			</div>
			<div>
				<QuoteBox
					img={logo1}
					company="Business head, Zee Tv"
					name="Parul Goel"
					quotes="I've partnered with Nidhi since 2015 for various successful projects, including an outdoor launch for & TV. Mango Marketing & Events epitomizes approachability, flexibility, and dedication. They prioritize prompt, customer-first solutions, making collaboration seamless. Nidhi's proactive approach and collaborative working style have been a pleasure to work with.دو"
				></QuoteBox>
				<QuoteBox
					img={logo2}
					company="Business head, Zee Tv"
					name="Parul Goel"
					quotes="I've partnered with Nidhi since 2015 for various successful projects, including an outdoor launch for & TV. Mango Marketing & Events epitomizes approachability, flexibility, and dedication. They prioritize prompt, customer-first solutions, making collaboration seamless. Nidhi's proactive approach and collaborative working style have been a pleasure to work with.دو"
				></QuoteBox>
				<QuoteBox
					img={logo3}
					company="Business head, Zee Tv"
					name="Parul Goel"
					quotes="I've partnered with Nidhi since 2015 for various successful projects, including an outdoor launch for & TV. Mango Marketing & Events epitomizes approachability, flexibility, and dedication. They prioritize prompt, customer-first solutions, making collaboration seamless. Nidhi's proactive approach and collaborative working style have been a pleasure to work with.دو"
				></QuoteBox>
			</div>
			<div className={`${styles.buttonDivQuotesBox}`}>
				<button></button>
				<button></button>
				<button></button>
			</div>
		</div>
	);
}
