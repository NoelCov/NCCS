import React from "react";

import styles from "./Hero.module.scss";

import { Button } from "../button/Button.component";

export const Hero = () => {
    return (
        <div className={styles.heroContainer}>
            <h1 className={styles.heroText}>
                FAST AND RELIABLE COMPUTER AND CELLPHONE REPAIRS
            </h1>
            <Button>VIEW SERVICES</Button>
        </div>
    );
};
