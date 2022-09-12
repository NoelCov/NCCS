import Link from "next/link";

import { useState } from "react";

import onClickOutside from "react-onclickoutside";

import styles from "./Navbar.module.scss";

import { MobileNavbarMenu } from "./mobileNavbarMenu/mobileNavbarMenu";
import { CompanyLogo } from "../company-logo/company-logo.component";

import { AiFillHome } from "react-icons/ai";
import { AiFillContacts } from "react-icons/ai";
import { TiBusinessCard } from "react-icons/ti";
// import { RiComputerFill } from "react-icons/ri";
// import { MdOutlinePhoneAndroid } from "react-icons/md";

const NavbarComponent = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMobileNavbar = () => {
        setIsActive(!isActive);
    };

    NavbarComponent.handleClickOutside = () => setIsActive(false);

    return (
        <nav className={styles.navbarContainer}>
            <div className={styles.imageContainer}>
                <CompanyLogo />
            </div>
            <div
                className={styles.hamburgerMenu}
                onClick={() => toggleMobileNavbar()}
            >
                <span className={styles.hamburgerMenuLine}></span>
                <span className={styles.hamburgerMenuLine}></span>
                <span className={styles.hamburgerMenuLine}></span>
            </div>

            <MobileNavbarMenu active={isActive}>
                <Link href="/">
                    <li className={styles.navbarLink}>
                        <AiFillHome className={styles.linkIcon} />
                        <span className={styles.linkText}>HOME</span>
                    </li>
                </Link>

                <Link href="/#aboutUs">
                    <li className={styles.navbarLink}>
                        <TiBusinessCard className={styles.linkIcon} />
                        <span className={styles.linkText}>ABOUT US</span>
                    </li>
                </Link>

                <Link href="/contact">
                    <li className={styles.navbarLink}>
                        <AiFillContacts className={styles.linkIcon} />
                        <span className={styles.linkText}>CONTACT US</span>
                    </li>
                </Link>
            </MobileNavbarMenu>
        </nav>
    );
};

const clickOutsideConfig = {
    handleClickOutside: () => NavbarComponent.handleClickOutside,
};

export const Navbar = onClickOutside(NavbarComponent, clickOutsideConfig);
