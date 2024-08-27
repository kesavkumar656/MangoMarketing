// MODULES //

// COMPONENTS //

import Image from "next/image";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/ValueSecondRow.module.scss";

// IMAGES //
import Img1 from "public/img/assets/valueimg1shape.png";
import Img2 from "public/img/assets/valueimg2shape.png";
import Img3 from "public/img/assets/valueimg3shape.png";
import Button1 from "./Buttons/Button1.jsx";
// DATA //

/** ValueSecondRow Component */
export default function ValueSecondRow() {
	return (
		<div className={`${styles.ValueRowTwoContainer} section_spacing  `}>
			<div className={`${styles.LineOne}  `}>
				<p>
					Values we <span className="PrimaryColor">swear by</span>
				</p>
				<div>
					<Button1 Text="<"></Button1>
					<Button1 Text=">"></Button1>
				</div>
			</div>
			<div>
				<div className={`${styles.ValueImg}`}>
					<div>
						<Image src={Img1} alt=""></Image>
						<p>Integrity</p>
					</div>
					<div>
						<Image src={Img2} alt=""></Image>
						<p>Trust</p>
					</div>
					<div>
						<Image src={Img3} alt=""></Image>
						<p>Teamwork</p>
					</div>
				</div>
			</div>
		</div>
	);
}
