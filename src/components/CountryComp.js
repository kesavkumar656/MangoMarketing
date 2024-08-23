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
				<h6 className="">{props.countryName}</h6>
				<h6 className="text_reg">{props.ProjectNo}</h6>
			</div>
		</div>
	);
}
