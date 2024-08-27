// MODULES //
import { useState } from "react";

// COMPONENTS //
import Image from "next/image";
import Link from "next/link";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/Header.module.scss";

// IMAGES //
import Arrow from "@/../public/img/icons/arrow.svg";
import Logo from "@/../public/img/Mangologo.png";

// DATA //

/** Header Component */
export default function Header() {
	const [openSidebar, setOpenSidebar] = useState(false);
	const [openDropdown, setOpenDropdown] = useState(null);

	/** Open sidebar on click of hamburger */
	const toggleSidebar = () => {
		setOpenSidebar(!openSidebar);
	};

	/** Function to toggle dropdown */
	const toggleDropdown = (dropdownKey) => {
		setOpenDropdown((prevOpenDropdown) =>
			prevOpenDropdown === dropdownKey ? null : dropdownKey
		);
	};

	return (
		<div
			className={`${styles.main_header} ${
				openSidebar ? styles.sidebar_opened : ""
			}`}
		>
			<div className={`${styles.links_wrap} container`}>
				<div className={`${styles.header_inside}`}>
					{/* Logo wrap */}
					<Link href="/">
						<div className={styles.image_wrap}>
							<Image src={Logo} alt="Logo" />
						</div>
					</Link>

					{/* Links Wrap */}
					<div className={`${styles.links_wrap} blog_item`}>
						{/* Add "has_dropdown" class if your link has dropdown */}
						<div
							className={`${styles.links} ${styles.has_dropdown} ${
								openDropdown === "aboutUs" ? styles.dropdown_opened : ""
							} dropdown`}
							onClick={() => toggleDropdown("aboutUs")}
						>
							<div className={styles.link_title}>
								<p>About</p>
								<span className={styles.arrow_img}>
									<Image src={Arrow} alt="Arrow" />
								</span>
							</div>
							{/* Dropdown is opened when link is clicked */}
							<div className={`${styles.dropdown_wrap}`}>
								<Link href="">
									<p className={styles.dropdown_links}>About 1</p>
								</Link>
								<Link href="">
									<p className={styles.dropdown_links}>About 2</p>
								</Link>
							</div>
						</div>
						<div
							className={`${styles.links} ${styles.has_dropdown} ${
								openDropdown === "blogs" ? styles.dropdown_opened : ""
							} dropdown`}
							onClick={() => toggleDropdown("blogs")}
						>
							<div className={styles.link_title}>
								<p>Work</p>
								<span className={styles.arrow_img}>
									<Image src={Arrow} alt="Arrow" />
								</span>
							</div>
							{/* Dropdown is opened when link is clicked */}
							<div className={`${styles.dropdown_wrap}`}>
								<Link href="">
									<p className={styles.dropdown_links}>Work 1</p>
								</Link>
								<Link href="">
									<p className={styles.dropdown_links}>Work 2</p>
								</Link>
							</div>
						</div>
						<div className={styles.links}>
							<Link href="">
								<div className={styles.link_title}>
									<p>Services</p>
								</div>
							</Link>
						</div>
						<div className={styles.links}>
							<Link href="">
								<div className={styles.link_title}>
									<p>Edge</p>{" "}
								</div>
							</Link>
						</div>
						<div className={styles.links}>
							<Link href="">
								<div className={styles.link_title}>Presence</div>
							</Link>
						</div>
						<div className={styles.links}>
							<Link href="">
								<div className={styles.link_title}>Lets Connect</div>
							</Link>
						</div>
					</div>

					{/* Hamburger icon visible in mobile only */}
					{/* <div className={styles.hamburger_icon} onClick={toggleSidebar}>
						<span className={styles.hamburger_line}></span>
						<span className={styles.hamburger_line}></span>
						<span className={styles.hamburger_line}></span>
					</div> */}
				</div>
			</div>
		</div>
	);
}
