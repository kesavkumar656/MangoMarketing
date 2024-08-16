// MODULES //

// COMPONENTS //

// STYLES //
import styles from "@/styles/components/InnerBanner.module.scss";

// PLUGINS //

// IMAGES //
import DefaultBanner from "@/../public/img/banner/defaultDesktopBanner.jpg";
import DefaultBannerMob from "@/../public/img/banner/defaultDesktopBanner.jpg";

// UTILS //

/** Inner Banner component */
function InnerBanner({
	desktopImage,
	// bannerTitle,
	// bannerDescription,
	mobileImage,
}) {
	return (
		<div className={`${styles.inner_banner_wrap} `}>
			{/* Banner Image */}
			<div className={`${styles.banner_image} inner_banner_wrap `}>
				<picture>
					<source
						srcSet={desktopImage ? desktopImage : DefaultBanner.src}
						media="(min-width:767px)"
					/>
					<img
						src={mobileImage ? mobileImage : DefaultBannerMob.src}
						alt="mobileImage"
						media="(max-width:1367px)"
					/>
				</picture>
			</div>
			{/* Banner Content */}
			<div className={`${styles.banner_content}`}>
				<div className="container"></div>
			</div>
		</div>
	);
}

export default InnerBanner;
