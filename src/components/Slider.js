// // MODULES //

// // COMPONENTS //

// // SECTIONS //

// // PLUGINS //

// // UTILS //
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// // STYLES //
// import styles from "@/styles/components/Slider.module.scss";

// // IMAGES //

// // DATA //

// /** Slider Component */
// export default function Slider() {
// 	const settings = {
// 		dots: false,
// 		arrows: false,
// 		infinite: false,
// 		speed: 500,
// 		slidesToShow: 2, // Adjust the number of cards displayed per slide
// 		slidesToScroll: 1,
// 		variableWidth: true,
// 		autoplay: false,
// 	};
// 	return (
// 		<div className="">
// 			<div className={styles.arrow_wrap}>
			
// 			</div>
// 			<Slider ref={sliderRef} {...settings}>
// 				{items.map((item, index) => (
// 					<div className="greatThings_card" key={index}>
// 						<CardWithImgContent
// 							key={index}
// 							title={item.title}
// 							desc={item.desc}
// 							cardImg={item.cardImg}
// 							width={item.width}
// 							height={item.height}
// 						/>
// 					</div>
// 				))}
// 			</Slider>
// 		</div>
// 	);
// }
