// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/SuccessStorySection.module.scss";
import QuotesBoxSlider from "../components/QuotesBoxSlider";
import GlobalSpanning from "../components/GlobalSpanning";
import ContactUs from "../components/ContactUs";

// IMAGES //

// DATA //

/** SuccessStorySection Section */
export default function SuccessStorySection() {
	return (
		<section className={`${styles.SuccessStorySection} container-fluid `}>
			<QuotesBoxSlider></QuotesBoxSlider>
			<GlobalSpanning></GlobalSpanning>
			<ContactUs></ContactUs>
		</section>
	);
}
