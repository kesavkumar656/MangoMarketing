// MODULES //

// COMPONENTS //
import Image from "next/image";
// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/Footer.module.scss";

// IMAGES //
import MadeByTingIMG from "@/../public/img/MadeByTing.png";
import INSTA from "@/../public/img/icons/social/insta.svg";
import FB from "@/../public/img/icons/social/fb.svg";
import Linkedin from "@/../public/img/icons/social/linkedin.svg";
import Twitter from "@/../public/img/icons/social/twitter.svg";
import YT from "@/../public/img/icons/social/yt.svg";

// DATA //

/** Footer Component */
export default function Footer() {
	return (
		<footer className={`${styles.main_footer}`}>
			<div>
				<p>© {new Date().getFullYear()} Copyright Mango Marketing & Events.</p>
			</div>
			<div className={`${styles.gap}`}>
				<Image src={FB}></Image>
				<Image src={INSTA}></Image>
				<Image src={Linkedin}></Image>
				<Image src={YT}></Image>
				<Image src={Twitter}></Image>
			</div>
			<div>
				<Image src={MadeByTingIMG} />
			</div>
		</footer>
	);
}
