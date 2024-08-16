// MODULES //

// COMPONENTS //
import Image from "next/image";
// SECTIONS //
// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/CountryComp.module.scss";

// IMAGES //

// DATA //

/** CountryComp Component */
export default function CountryComp(props) {
	return (
		<div className={`${styles.CountryComp}`}>
			<div>
				<Image src={props.countryImage} alt=""></Image>
			</div>
			<div>
				<h1>{props.countryName}</h1>
				<h5>{props.ProjectNo}</h5>
			</div>
		</div>
	);
}
