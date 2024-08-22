// MODULES //

// COMPONENTS //
import Image from "next/image";
// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/QuoteBox.module.scss";

// IMAGES //

// DATA //

/** QuoteBox Component */
export default function QuoteBox(props) {
	return (
		<div className={`${styles.QuoteBox}`}>
			<div>
				<p>“ {props.quotes}</p>
			</div>
			<div className={`${styles.QuoteBoxLin_2}`}>
				<div>
					<div>
						<p> {props.name}</p>
					</div>
					<div>
						<p className="text_sm">{props.company}</p>{" "}
					</div>
				</div>
				<div className={`${styles.logoimg}`}>
					
					<Image src={props.img} alt=""></Image>
				</div>
			</div>
		</div>
	);
}
