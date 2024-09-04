// MODULES //

// COMPONENTS //

import Image from "next/image";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/ValueSecondRow.module.scss";

// IMAGES //
import Img1 from "public/img/assets/img_1.gif";
import Img2 from "public/img/assets/img_2.gif";
import Img3 from "public/img/assets/img_3.gif";
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
						<div className={`${styles.noBorder}`}>
							<Image src={Img1} alt=""></Image>
						</div>
						<p>Integrity</p>
					</div>
					<div>
						<div className={`${styles.noBorder}`}>
							<Image src={Img2} alt=""></Image>
						</div>
						<p>Trust</p>
					</div>
					<div>
						<div className={`${styles.noBorder}`}>
							<Image src={Img3} alt=""></Image>
						</div>

						<p>Teamwork</p>
					</div>
				</div>
			</div>
		</div>
	);
}
