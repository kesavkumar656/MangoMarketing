// MODULES //

// COMPONENTS //
import Image from "next/image";
// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/RowTwoContent.module.scss";

// IMAGES //
import Bridge from "@/../public/img/assets/bridge.png";
// DATA //

/** RowTwoContent Component */
export default function RowTwoContent() {
	return (
		<>
			<div className={`${styles.RowTwoContainer} container section_spacing `}>
				<div className={`${styles.R2wrapper} container `}>
					<div className="text_xxxxl text_300">
						Say hello <span className="PrimaryColor">to</span> <br /> Mango Marketing!
					</div>
					<div className={`${styles.RowTwo} `}>
						<Image src={Bridge} alt="" />
						<p>
							A boutique agency that specialises in reaching ethnic communities across
							the UK and beyond, with a client-centric approach that brings results.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
