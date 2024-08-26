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

// DATA //
const logo = [
	{ image: "/img/assets/logo/fb.png" },
	{ image: "/img/assets/logo/insta.png" },
	{ image: "/img/assets/logo/linkedin.png" },
	{ image: "/img/assets/logo/mail.png" },
	{ image: "/img/assets/logo/whatsapp.png" },
];
/** Footer Component */
export default function Footer() {
	return (
		<footer className={`{${styles.main_footer} container `}>
			<div>
				<p>© {new Date().getFullYear()} Copyright Mango Marketing & Events.</p>
			</div>
			<div className="slick-track">
				{logo.map((data, index) => (
					<div key={index}>
						<a href="">
							<Image src={data.image} width={30} height={30} alt={`Logo ${index}`} />
						</a>
					</div>
				))}
			</div>
			<div>
				<Image src={MadeByTingIMG} width={100} height={100} alt="Made by Ting" />
			</div>
		</footer>
	);
}
