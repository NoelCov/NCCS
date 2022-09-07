import React from "react";

import styles from "./button.module.scss";

export const Button = ({ children }) => {
    return <button className={styles.buttonContainer}>{children}</button>;
};
