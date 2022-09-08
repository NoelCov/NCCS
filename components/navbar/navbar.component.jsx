import Link from "next/link";

import { useState } from "react";

import styles from "./Navbar.module.scss";

import { MobileNavbarMenu } from "./mobileNavbarMenu/mobileNavbarMenu";
import { CompanyLogo } from "../company-logo/company-logo.component";

import { AiFillHome } from "react-icons/ai";
import { AiFillContacts } from "react-icons/ai";
import { RiComputerFill } from "react-icons/ri";
import { MdOutlinePhoneAndroid } from "react-icons/md";

export const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMobileNavbar = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className={styles.navbarContainer}>
            <CompanyLogo />

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

                <li className={styles.navbarLink}>
                    <AiFillContacts className={styles.linkIcon} />
                    <span className={styles.linkText}>CONTACT US</span>
                </li>
                <li className={styles.navbarLink}>
                    <RiComputerFill className={styles.linkIcon} />
                    <span className={styles.linkText}>COMPUTER SERVICES</span>
                </li>
                <li className={styles.navbarLink}>
                    <MdOutlinePhoneAndroid className={styles.linkIcon} />
                    <span className={styles.linkText}>PHONE SERVICES</span>
                </li>
            </MobileNavbarMenu>
        </nav>
    );
};
