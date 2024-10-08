// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/ValueSectionText.module.scss";

// IMAGES //

// DATA //

/** ValueSectionText Component */
export default function ValueSectionText() {
	return (
		<div className={`${styles.ValueText}`}>
			<div>
				<h1>
					<span className="PrimaryColor">
						What makes us the Multicultural Marketing Mavericks?
					</span>
				</h1>
				<p>
					We go the distance between conversations and conversions through forging
					lasting connections.
				</p>
			</div>
		</div>
	);
}
