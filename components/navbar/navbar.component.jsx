import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import styles from "./navbar.module.scss";

import Logo from "../../public/images/logo.png";

import { MobileNavbarMenu } from "./mobileNavbarMenu/mobileNavbarMenu";

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
                    <li className={styles.navbarLink}>HOME</li>
                </Link>

                <li className={styles.navbarLink}>CONTACT US</li>
                <li className={styles.navbarLink}>COMPUTER SERVICES</li>
                <li className={styles.navbarLink}>CELLPHONE SERVICES</li>
            </MobileNavbarMenu>
        </nav>
    );
};
