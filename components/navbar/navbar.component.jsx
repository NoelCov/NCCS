import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import styles from "./Navbar.module.scss";

import Logo from "../../public/images/logo.png";

import { MobileNavbarMenu } from "./mobileNavbarMenu/mobileNavbarMenu";

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
            <Link href="/">
                <a className={styles.imageContainer}>
                    <Image
                        src={Logo}
                        layout="fill"
                        alt="A desktop computer and the text NCCS, acronym for Noel's Computer and Cellphones Services"
                    />
                </a>
            </Link>

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
                        <p className={styles.linkText}>HOME</p>
                    </li>
                </Link>

                <li className={styles.navbarLink}>
                    <AiFillContacts className={styles.linkIcon} />
                    <p className={styles.linkText}>CONTACT US</p>
                </li>
                <li className={styles.navbarLink}>
                    <RiComputerFill className={styles.linkIcon} />
                    <p className={styles.linkText}>COMPUTER SERVICES</p>
                </li>
                <li className={styles.navbarLink}>
                    <MdOutlinePhoneAndroid className={styles.linkIcon} />
                    <p className={styles.linkText}>CELLPHONE SERVICES</p>
                </li>
            </MobileNavbarMenu>
        </nav>
    );
};
