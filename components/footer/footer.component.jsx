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
            <div className={styles.informationContainer}>
                <InformationGrid title="Navigate to">
                    <Link href="/">
                        <a>
                            <span className={styles.infoText}>Home</span>
                        </a>
                    </Link>
                    <Link href="#">
                        <a>
                            <span className={styles.infoText}>Contact Us</span>
                        </a>
                    </Link>
                    <Link href="#">
                        <a>
                            <span className={styles.infoText}>
                                Computer Services
                            </span>
                        </a>
                    </Link>
                    <Link href="#">
                        <a>
                            <span className={styles.infoText}>
                                Phone Services
                            </span>
                        </a>
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
                            {"noelaronc@gmail.com"}
                        </span>
                    </div>
                </InformationGrid>
            </div>
            <p className={styles.copyrightText}>
                Copyright &copy; 2022 NCCS. All rights reserved.
            </p>
        </footer>
    );
};
