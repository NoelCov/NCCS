import React from "react";

import styles from "./Information-grid.module.scss";

export const InformationGrid = ({ title, children }) => {
    return (
        <div className={styles.informationGridContainer}>
            <p className={styles.gridTitle}>{title}</p>
            <div className={styles.grid}>{children}</div>
        </div>
    );
};
