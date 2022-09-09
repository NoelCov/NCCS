import React from "react";

import Link from "next/link";

import { CompanyLogo } from "../company-logo/company-logo.component";
import { InformationGrid } from "../information-grid/information-grid.component";

import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import styles from "./Footer.module.scss";

export const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.imageContainer}>
                <CompanyLogo />
            </div>
            <div className={styles.gridsContainer}>
                <InformationGrid title="Navigate to">
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="#">
                        <a>Contact Us</a>
                    </Link>
                    <Link href="#">
                        <a>Computer Services</a>
                    </Link>
                    <Link href="#">
                        <a>Phone Services</a>
                    </Link>
                </InformationGrid>

                <InformationGrid title="Got questions or suggestions?">
                    <div className={styles.infoContainer}>
                        <BsFillTelephoneFill className={styles.infoText} />
                        <span className={styles.infoText}>(209)-689-8620</span>
                    </div>
                    <div className={styles.infoContainer}>
                        <MdEmail className={styles.infoText} />
                        <span className={styles.infoText}>
                            noelaronc@gmail.com
                        </span>
                    </div>
                </InformationGrid>
            </div>
        </footer>
    );
};
