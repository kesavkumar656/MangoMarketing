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
			<h1>Say hello to Mango Marketing!</h1>
			<div className={`${styles.RowTwo} `}>
				<Image src={Bridge} />
				<p>
					A boutique agency that specialises in reaching ethnic communities across
					the UK and beyond, with a client-centric approach that brings results.
				</p>
			</div>
		</>
	);
}
