import Head from "next/head";

import { Hero } from "../components/hero/hero.component.js";
import { ServiceItem } from "../components/service-item/service-item.component";
import { Layout } from "../components/layout/layout.component";

import styles from "../styles/index.module.scss";

export default function Home() {
    return (
        <div>
            <Head>
                <title>{"Noel's Computer and Cellphone Services"}</title>
                <meta
                    name="description"
                    content="Noel's Computer and Cellphone Services is a shop located in Manteca, CA. We work on repairing and improving computers and cellphones."
                />
            </Head>
            <section>
                <Hero />
            </section>
            <section id="servicesContainer" className={styles.servicesSection}>
                <Layout>
                    <h1>OUR SERVICES</h1>
                    <hr className={styles.separator} />
                    <div className={styles.servicesContainer}>
                        <ServiceItem
                            imageAltText={"A computer with tools on the screen"}
                            imageUrl="/images/pc-icon.png"
                            serviceName="Computer Services"
                            serviceInfo={`We have many years of experience with computers. We use computers for work and gaming so we know what a computer needs to be reliable and fast.`}
                            moreServiceInfo={`We offer services such as screen repairs, operating system installation or fix, data transfers, overclocking, and many more.`}
                        />
                        <ServiceItem
                            imageAltText={
                                "A cellphone with tools on the screen"
                            }
                            imageUrl="/images/phone-icon.png"
                            serviceName="Cellphone Services"
                            serviceInfo={`We know how important cell phones are to our customers, that’s why we have phone specialists with us. We guarantee you a fast and amazing service.`}
                            moreServiceInfo={`We offer services such as screen repairs, battery replacement, data transfer and many more.`}
                        />
                    </div>
                </Layout>
            </section>
        </div>
    );
}
