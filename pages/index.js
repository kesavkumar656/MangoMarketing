// MODULES //
import Image from "next/image";
// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";

// SECTIONS //
// import HomeHero from "../src/sections/HomeHero";
// PLUGINS //
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// UTILS //

// STYLES //
import styles from "@/styles/pages/Home.module.scss";

import HomeHero from "../src/sections/HomeHero";
import ValueSection from "../src/sections/ValueSection";
import SuccessStorySection from "../src/sections/SuccessStorySection";

// IMAGES //

// DATA //
// gsap.registerPlugin(ScrollTrigger);

/** Home Page */
export default function HomePage() {
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Home"} Desc={"Home Desc"} OgImg={""} Url={"/"} />

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={`${styles.HomePage} `}>
				<HomeHero></HomeHero>
				<ValueSection></ValueSection>

				<SuccessStorySection></SuccessStorySection>
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
