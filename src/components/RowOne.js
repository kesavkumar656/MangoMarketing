// MODULES //

// COMPONENTS //
import Image from "next/image";
// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/RowOne.module.scss";
import img1 from "@/../public/img/assets/img1.png";
import img2 from "@/../public/img/assets/img2.png";
import img3 from "@/../public/img/assets/img3.png";
// IMAGES //

// DATA //

/** RowOne Component */
export default function RowOne() {
	return (
		<div className={`${styles.RowOne} `}>
			<div>
				<h5 className="color_white">
					Connect with their <span className="PrimaryColor">interests </span>
					Resonate with their <span className="PrimaryColor">sentiment </span>{" "}
					Campaign towards <span className="PrimaryColor">success </span>
				</h5>
				<p className="text_sm color_white ">
					Don't just know your audience, understand them better with us. Deep dive
					into the finer nuances of their habits and preferences to create campaigns
					that engage on a profound level.
				</p>
			</div>
			<div className={styles.imageDiv}>
				<div>
					<Image src={img1} alt="Arrow" />
				</div>

				<div>
					<Image src={img2} alt="Arrow" />
				</div>
				<div>
					<Image src={img3} alt="Arrow" />
				</div>
			</div>
		</div>
	);
}
