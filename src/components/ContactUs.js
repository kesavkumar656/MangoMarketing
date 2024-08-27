// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/ContactUs.module.scss";
import { Form } from "react-hook-form";

// IMAGES //

// DATA //

/** ContactUs Component */
export default function ContactUs() {
	return (
		<div className={`${styles.ContactUs}`}>
			<div className={`${styles.ColumnOne}`}>
				<h1>
					Let’s Mango the <span className="PrimaryColor">extra mile</span>{" "}
				</h1>
				<p>in multicultural marketing. Reach out to us today!</p>
			</div>
			<div>
				<input placeholder="Name"></input>
				<input placeholder="Location"></input>
				<input placeholder="Email"></input>
				<input placeholder="Number"></input>
				<input placeholder="Brand"></input>
				<button>Submit</button>
			</div>
		</div>
	);
}
