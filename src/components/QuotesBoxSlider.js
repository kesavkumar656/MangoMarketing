import QuoteBox from "./QuoteBox";
import Slider from "react-slick";
import Image from "next/image";
import styles from "@/styles/components/QuotesBoxSlider.module.scss";
import logo1 from "@/../public/img/assets/LogoAnimation/img1.png";
import logo2 from "@/../public/img/assets/LogoAnimation/img2.png";
import logo3 from "@/../public/img/assets/LogoAnimation/img3.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DefaultBanner from "@/../public/img/banner/defaultDesktopBanner.jpg";
/** QuotesBoxSlider Component */
export default function QuotesBoxSlider() {
	const data = [
		{
			id: 1,
			img: { logo1 },
			company: "Business head, Zee Tv",
			name: "Parul Goel",
			quotes:
				"I've partnered with Nidhi since 2015 for various successful projects, including an outdoor launch for & TV. Mango Marketing & Events epitomizes approachability, flexibility, and dedication. They prioritize prompt, customer-first solutions, making collaboration seamless. Nidhi's proactive approach and collaborative working style have been a pleasure to work with.",
		},
		{
			id: 2,
			img: { logo2 },
			company: "Business head, Zee Tv",
			name: "Parul Goel",
			quotes:
				"I've partnered with Nidhi since 2015 for various successful projects, including an outdoor launch for & TV. Mango Marketing & Events epitomizes approachability, flexibility, and dedication. They prioritize prompt, customer-first solutions, making collaboration seamless. Nidhi's proactive approach and collaborative working style have been a pleasure to work with.",
		},
		{
			id: 3,
			img: { logo3 },
			company: "Business head, Zee Tv",
			name: "Parul Goel",
			quotes:
				"I've partnered with Nidhi since 2015 for various successful projects, including an outdoor launch for & TV. Mango Marketing & Events epitomizes approachability, flexibility, and dedication. They prioritize prompt, customer-first solutions, making collaboration seamless. Nidhi's proactive approach and collaborative working style have been a pleasure to work with.",
		},

		// Add more items as needed
	];

	const settings = {
		dots: true,
		
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
	};

	return (
		<div className={`${styles.QuoteBox}`}>
			<Slider className="container" {...settings}>
				{data.map((item) => (
					<div  key={item.id}>
						<p>{item.company}</p>
						<p>{item.name}</p>
						<p>{item.quotes}</p>
						<img src={item.img} alt="" />
					</div>
				))}
			</Slider>
		</div>
	);
}
