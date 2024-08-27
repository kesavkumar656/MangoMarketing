// MODULES //
import Image from "next/image";
// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/ScrollDown.module.scss";

// IMAGES //
import ArrowDown from "@/../public/img/assets/ArrowDown.png";
// DATA //

/** ScrollDown Component */
export default function ScrollDown() {
	return (
		<div className={`${styles.ArrowDown} `}>
			<div>Scroll Down</div>
			<div>
				<Image src={ArrowDown} alt=""></Image>
			</div>
		</div>
	);
}
