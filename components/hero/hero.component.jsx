import React from "react";

import styles from "./Hero.module.scss";

import { Button } from "../button/button.component";

export const Hero = () => {
    return (
        <div className={styles.heroContainer}>
            <h1 className={styles.heroText}>
                FAST AND RELIABLE COMPUTER AND CELLPHONE REPAIRS
            </h1>
            <a href="#servicesContainer">
                <Button>VIEW SERVICES</Button>
            </a>
        </div>
    );
};
