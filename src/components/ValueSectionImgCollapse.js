// MODULES //

// COMPONENTS //
import Image from "next/image";
// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/ValueSectionImgCollapse.module.scss";

// IMAGES //
import Img1 from "@/../public/img/assets/Value_img1.png";
import Img2 from "@/../public/img/assets/Value_img2.png";
// DATA //

/** ValueSectionImgCollapse Component */
export default function ValueSectionImgCollapse() {
	return (
		<div className={`${styles.ValueImg} next_cover_image container`}>
			<div>
				<Image className="" src={Img1}></Image>
			</div>

			<div className="next_cover_image">
				<Image src={Img2} alt="" />
			</div>
		</div>
	);
}
