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
			<div className={`${styles.wrapper} `}>
				<div className={`${styles.TextDiv}  `}>
					<div>
						<h5 className="color_white">
							Connect with their <span className="PrimaryColor">interests </span>
							Resonate with their <span className="PrimaryColor">sentiment </span>{" "}
							Campaign towards <span className="PrimaryColor">success </span>
						</h5>
					</div>
					<div>
						<p className="text_sm color_white ">
							Don &apos; t just know your audience, understand them better with us.
							Deep dive into the finer nuances of their habits and preferences to
							create campaigns that engage on a profound level.
						</p>
					</div>
				</div>
				<div className={styles.imageDiv}>
					<div>
						<Image src={img1} alt="img1" width={300} height={400} />
					</div>

					<div>
						<Image src={img2} width={300} height={400} alt="img2" />
					</div>
					<div>
						<Image src={img3} width={300} height={400} alt="img3" />
					</div>
				</div>
			</div>
		</div>
	);
}
