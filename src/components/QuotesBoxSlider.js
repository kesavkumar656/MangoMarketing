//Component
import QuoteBox from "./QuoteBox";
import Slider from "react-slick";
import Image from "next/image";

// STYLES
import styles from "@/styles/components/QuotesBoxSlider.module.scss";

//images
import logo1 from "@/../public/img/assets/LogoAnimation/img1.png";
import logo2 from "@/../public/img/assets/LogoAnimation/img2.png";
import logo3 from "@/../public/img/assets/LogoAnimation/img3.png";
import Quotes from "@/../public/img/assets/Quotes.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/** QuotesBoxSlider Component */
export default function QuotesBoxSlider() {
	const data = [
		{
			quotesImg: Quotes,
			id: 1,
			img: logo1,
			company: "Business head, Zee Tv",
			name: "Parul Goel",
			quotes:
				"I've partnered with Nidhi since 2015 for various successful projects, including an outdoor launch for & TV. Mango Marketing & Events epitomizes approachability, flexibility, and dedication. They prioritize prompt, customer-first solutions, making collaboration seamless. Nidhi's proactive approach and collaborative working style have been a pleasure to work with.",
		},
		{
			quotesImg: Quotes,
			id: 2,
			img: logo2,
			company: "Business head, Zee Tv",
			name: "Parul Goel",
			quotes:
				"I've partnered with Nidhi since 2015 for various successful projects, including an outdoor launch for & TV. Mango Marketing & Events epitomizes approachability, flexibility, and dedication. They prioritize prompt, customer-first solutions, making collaboration seamless. Nidhi's proactive approach and collaborative working style have been a pleasure to work with.",
		},
		{
			quotesImg: Quotes,

			id: 3,
			img: logo3,
			company: "Business head, Zee Tv",
			name: "Parul Goel",
			quotes:
				"I've partnered with Nidhi since 2015 for various successful projects, including an outdoor launch for & TV. Mango Marketing & Events epitomizes approachability, flexibility, and dedication. They prioritize prompt, customer-first solutions, making collaboration seamless. Nidhi's proactive approach and collaborative working style have been a pleasure to work with.",
		},

		// Add more items as needed
	];

	const settings = {
		dots: true,

		// infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
	};

	return (
		<div className={`${styles.QuoteBox} `}>
			<h4 className="PrimaryColor">Success stories </h4>
			<p>From our happy patrons</p>
			<Slider {...settings} className={`${styles.Slider}`}>
				{data.map((item) => (
					<div key={item.id} className={`${styles.Flex}`}>
						<Image src={item.quotesImg} width={39} alt="" />
						<div>
							<p>{item.quotes}</p>
						</div>

						<div>
							<div className={`${styles.flexClm}`}>
								<p>{item.name}</p>
								<p className="PrimaryColor">{item.company}</p>
							</div>

							<Image src={item.img} width={75} height={40} alt="" />
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
}
