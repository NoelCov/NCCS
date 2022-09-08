import React from "react";
import { CompanyLogo } from "../company-logo/company-logo.component";

import styles from "./Footer.module.scss";

export const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <CompanyLogo />
        </footer>
    );
};
