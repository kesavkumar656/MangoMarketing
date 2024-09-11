// MODULES //

// COMPONENTS //
import Image from "next/image";
// SECTIONS //

// PLUGINS //
import Slider from "react-slick";
// UTILS //

// STYLES //
import styles from "@/styles/components/RowTwoContent.module.scss";

// IMAGES //

// DATA //

/** RowTwoContent Component */
export default function RowTwoContent() {
	const data = [
		{ img: "/img/assets/a/img1.png" },
		{ img: "/img/assets/a/img2.png" },
		{ img: "/img/assets/a/img3.png" },
	];
	const sliderSettings = {
		infinite: true,
		animation: false,

		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};
	return (
		<>
			<div className={`${styles.RowTwoContainer} container section_spacing`}>
				<div className={`${styles.R2wrapper} container`}>
					<div className="text_xxxxl text_300">
						Say hello <span className="PrimaryColor">to</span>{" "}
						<br className={styles.break} /> Mango Marketing!
					</div>
					<div className={styles.RowTwo}>
						<Slider {...sliderSettings}>
							{data.map((item, index) => (
								<div key={index} className={styles.liveImage}>
									<Image
										src={item.img}
										width={500}
										height={200}
										alt={`Image ${index + 1}`}
									/>
								</div>
							))}
						</Slider>
					</div>
					<div>
						<p>
							A boutique agency that specialises in reaching ethnic communities across
							the UK and beyond, with a client-centric approach that brings results.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
