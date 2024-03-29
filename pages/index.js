import Head from "next/head";
import Image from "next/image";

import { Hero } from "../components/hero/hero.component";
import { ServiceItem } from "../components/service-item/service-item.component";
import { Layout } from "../components/layout/layout.component";

import AboutUsImage from "../public/images/aboutUsImg.png";
import Logo from "../public/images/logo.png";

import styles from "../styles/index.module.scss";

export default function Home() {
    return (
        <div>
            <Head>
                <title>NCCS | Home Page</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta name="author" content="NCCS" />
                <meta
                    name="description"
                    content="NCCS, accronym for Noel's Computer and Cellphone Services, is a shop located in Manteca, CA that especializes providing IT services for computers and cellphones."
                />
                <meta name="og:image" content={Logo.src} />
                <meta name="twitter:url" content="https://nccs.vercel.app/" />
                <meta name="twitter:title" content="NCCS | Home Page" />
                <meta
                    name="twitter:description"
                    content="NCCS, accronym for Noel's Computer and Cellphone Services, is a shop located in Manteca, CA that especializes providing IT services for computers and cellphones."
                />
                <meta name="twitter:image" content={Logo.src} />
            </Head>

            <section>
                <Hero />
            </section>

            <section id="servicesContainer" className={styles.servicesSection}>
                <Layout>
                    <h2>OUR SERVICES</h2>
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

            <section id="aboutUs" className={styles.aboutUsSection}>
                <Layout>
                    <h2>About NCCS</h2>
                    <hr className={styles.separator} />

                    <div className={styles.contentContainer}>
                        <div className={styles.textSection}>
                            <p>
                                {`NCCS stands for`}{" "}
                                <b>{`Noel's Computers and Cellphones Services.`}</b>{" "}
                                {`We are a new company that wants to help people that have problems with their devices in a fast and reliable way.`}
                            </p>

                            <p>
                                We got tired of seeing the few shops around us
                                have a really <b>bad customer service</b> and
                                even worse technical skills to really help
                                customers
                            </p>
                            <p>
                                <b>Come check us out!</b>
                            </p>
                        </div>

                        <div className={styles.imageContainer}>
                            <Image
                                src={AboutUsImage}
                                height={1200}
                                width={1920}
                                layout="responsive"
                                alt="A person fixing a phone"
                            />
                        </div>
                    </div>
                </Layout>
            </section>
        </div>
    );
}
