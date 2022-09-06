import React from "react";

import Image from "next/image";

import { Button } from "../button/Button.component";

import styles from "./service-item.module.scss";

export const ServiceItem = ({
    imageAltText,
    imageUrl,
    imageWidth,
    imageHeight,
    serviceName,
    serviceInfo,
    moreServiceInfo,
}) => {
    return (
        <div className={styles.serviceContainer}>
            <div className={styles.iconContainer}>
                <Image
                    alt={imageAltText}
                    src={imageUrl}
                    width={imageWidth}
                    height={imageHeight}
                    layout="fill"
                />
            </div>
            <h2>{serviceName}</h2>
            <p>{serviceInfo}</p>
            <p>{moreServiceInfo}</p>
            <Button>LEARN MORE</Button>
        </div>
    );
};
