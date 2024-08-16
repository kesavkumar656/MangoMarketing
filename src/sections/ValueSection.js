// MODULES //

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

/** Value-Section Section */
export default function ValueSection() {
	return (
		<section className={`${styles.ValueSection} `}>
			<ValueFirstRow></ValueFirstRow>
			<ValueSecondRow></ValueSecondRow>
		</section>
	);
}
