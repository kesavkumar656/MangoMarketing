// MODULES //

// COMPONENTS //
import Image from "next/image";
// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/ValueFirstRow.module.scss";

// IMAGES //
import Img1 from "public/img/assets/Value_img1.png";
import Img2 from "public/img/assets/Value_img2.png";
// DATA //

/** ValueFirstRow Component */
export default function ValueFirstRow() {
	return (
		<div className={`${styles.container}   `}>
			<div>
				<h4>
					What makes us the
					<span className="PrimaryColor"> Multicultural Marketing Mavericks?</span>
				</h4>

				<p>
					We go the distance between conversations and conversions through forging
					lasting connections.
				</p>
			</div>
			<div className={`${styles.ImageWrapper} `}>
				<div className={`${styles.ParentImg}`}>
					<Image
						className="objectFitCover"
						alt=""
						width={1024}
						height={400}
						src={Img1}
					></Image>
				</div>
				<div className={styles.OverlapImg}>
					<Image
						className="objectFitCover"
						src={Img2}
						width={200}
						height={220}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}
