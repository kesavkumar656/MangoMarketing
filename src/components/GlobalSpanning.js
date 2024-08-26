// MODULES //

// COMPONENTS //
import Image from "next/image";
// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/GlobalSpanning.module.scss";

// IMAGES //
import World from "@/../public/img/assets/World.png";
import India from "@/../public/img/assets/india.png";
import UK from "@/../public/img/assets/uk.png";
import UAE from "@/../public/img/assets/uae.png";
import Canada from "@/../public/img/assets/canada.png";
import CountryComp from "./CountryComp";
// DATA //

/** GlobalSpanning Component */
export default function GlobalSpanning() {
	return (
		<div className={`${styles.GlobalSpanning} container`}>
			<div className={`${styles.lineOneh1} container`}>
				<h1>A global network spanning</h1>
			</div>
			<div className={`${styles.BackGroundWorld}`}>
				<Image src={World} alt=""></Image>
			</div>
			<div className={`${styles.justifycnter} `}>
				<CountryComp
					countryImage={India}
					countryName="India"
					ProjectNo="10+ Projects"
				></CountryComp>
				<CountryComp
					countryImage={Canada}
					countryName="Canada"
					ProjectNo="10+ Projects"
				></CountryComp>
				<CountryComp
					countryImage={UK}
					countryName="UK"
					ProjectNo="10+ Projects"
				></CountryComp>
				<CountryComp
					countryImage={UAE}
					countryName="UAE"
					ProjectNo="10+ Projects"
				></CountryComp>
			</div>
		</div>
	);
}
