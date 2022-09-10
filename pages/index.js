import Head from "next/head";

import { Hero } from "../components/hero/hero.component";
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
                    <div className={styles.textSection}>
                        <p>
                            {
                                "NCCS is an accronym for Noel's Computers and Cellphones Services. We are a new company that wants to help people that have problems with their devices in a fast and reliable way."
                            }
                        </p>

                        <p>
                            We got tired of seeing the few shops around us have
                            a really bad customer service and even worse
                            technical skills to really help customers
                        </p>
                        <p>Come check us out!</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Dui nunc mattis enim ut tellus
                            elementum. Quis vel eros donec ac. Nam at lectus
                            urna duis convallis. Nunc vel risus commodo viverra
                            maecenas. Faucibus ornare suspendisse sed nisi lacus
                            sed. Est sit amet facilisis magna etiam tempor orci.
                            Fermentum odio eu feugiat pretium nibh. Lacus sed
                            turpis tincidunt id aliquet risus. Dictumst
                            vestibulum rhoncus est pellentesque elit. Dignissim
                            sodales ut eu sem integer vitae justo eget. Aliquet
                            enim tortor at auctor urna nunc id cursus. Proin
                            sagittis nisl rhoncus mattis. Nulla pellentesque
                            dignissim enim sit. Pellentesque habitant morbi
                            tristique senectus et netus. Id diam vel quam
                            elementum pulvinar. Dignissim sodales ut eu sem
                            integer vitae. Sed arcu non odio euismod lacinia at.
                        </p>
                        <p>
                            Id aliquet risus feugiat in ante metus dictum.
                            Cursus mattis molestie a iaculis. Fermentum posuere
                            urna nec tincidunt praesent semper feugiat nibh.
                            Turpis tincidunt id aliquet risus feugiat in ante.
                            Mauris rhoncus aenean vel elit scelerisque mauris. A
                            iaculis at erat pellentesque adipiscing commodo elit
                            at. Eu turpis egestas pretium aenean pharetra magna
                            ac placerat vestibulum. Lacinia at quis risus sed
                            vulputate odio ut. Eros donec ac odio tempor orci
                            dapibus. Quis eleifend quam adipiscing vitae proin
                            sagittis nisl rhoncus. Lacus viverra vitae congue eu
                            consequat ac felis donec. Mollis nunc sed id semper
                            risus in hendrerit. Odio tempor orci dapibus
                            ultrices in iaculis nunc. Enim diam vulputate ut
                            pharetra sit. Viverra justo nec ultrices dui sapien.
                            Aliquet nibh praesent tristique magna sit amet
                            purus. Integer feugiat scelerisque varius morbi enim
                            nunc faucibus a.
                        </p>
                    </div>
                </Layout>
            </section>
        </div>
    );
}
