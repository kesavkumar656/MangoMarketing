// MODULES //

// COMPONENTS //

import Image from "next/image";

// SECTIONS //

// PLUGINS //

// UTILS //
import Lottie from "react-lottie";
import animationData1 from "public/lottify/animation";
import animationData2 from "public/lottify/animation2";
import animationData3 from "public/lottify/animation3";
// STYLES //
import styles from "@/styles/components/ValueSecondRow.module.scss";

// IMAGES //
import Img1 from "public/lottify/animation.json";
import Img2 from "public/img/assets/img_2.gif";
import Img3 from "public/img/assets/img_3.gif";
import Button1 from "./Buttons/Button1.jsx";
// DATA //

/** ValueSecondRow Component */
export default function ValueSecondRow() {
	const animation1 = {
		loop: true,
		autoplay: true,
		animationData: animationData1,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	const animation2 = {
		loop: true,
		autoplay: true,
		animationData: animationData2,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	const animation3 = {
		loop: true,
		autoplay: true,
		animationData: animationData3,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
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
							<Lottie options={animation1} height={400} width={400}></Lottie>
						</div>
						<p>Integrity</p>
					</div>
					<div>
						<div className={`${styles.noBorder}`}>
							<Lottie options={animation2} height={400} width={400}></Lottie>
						</div>
						<p>Trust</p>
					</div>
					<div>
						<div className={`${styles.noBorder}`}>
							<Lottie options={animation3} height={400} width={400}></Lottie>
						</div>

						<p>Teamwork</p>
					</div>
				</div>
			</div>
		</div>
	);
}
