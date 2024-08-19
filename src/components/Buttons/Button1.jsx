// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/AnimationSlider.module.scss";

// IMAGES //

// DATA //

/** AnimationSlider Component */
export default function Button(props) {
	return (
		<div className={`${styles.Button} `}>
			<button> {props.Text} </button>
		</div>
	);
}
