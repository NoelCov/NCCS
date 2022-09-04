import React from "react";

import styles from "./Hero.module.scss";

import { Button } from "../button/Button.component";

export const Hero = () => {
    return (
        <section className={styles.heroContainer}>
            <h1 className={styles.heroText}>
                Fast and reliable computer and cellphone repairs
            </h1>
            <Button>VIEW SERVICES</Button>
        </section>
    );
};
