// MODULES //
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
// COMPONENTS //
import ValueSecondRow from "../components/ValueSecondRow";
import ValueFirstRow from "../components/ValueFirstRow";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/ValueSection.module.scss";

// IMAGES //

// DATA //
gsap.registerPlugin(ScrollTrigger);
/** Value-Section Section */
export default function ValueSection() {
	return (
		<section className={`${styles.ValueSection} container section_spacing `}>
			<ValueFirstRow></ValueFirstRow>
			<ValueSecondRow></ValueSecondRow>
		</section>
	);
}
