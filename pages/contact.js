import React from "react";

import style from "../styles/contact.module.scss";

import { Layout } from "../components/layout/layout.component";
import { Button } from "../components/button/button.component";

import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Contact() {
    return (
        <div className={style.contactPage}>
            <Layout>
                <h2>Get in touch with us</h2>
                <hr className={style.separator} />

                <div className={style.cardAndFormContainer}>
                    <div className={style.contactInformationCard}>
                        <h3>Contact Information</h3>
                        <div className={style.contactInformationContainer}>
                            <BsFillTelephoneFill className={style.icon} />
                            <span className={style.text}>(209)-689-8620</span>
                        </div>
                        <div className={style.contactInformationContainer}>
                            <MdEmail className={style.icon} />
                            <span className={style.text}>
                                nccsshop@gmail.com
                            </span>
                        </div>
                    </div>

                    <div className={style.formContainer}>
                        <h3>Fill out a form</h3>
                        <p>
                            <b>
                                {
                                    "Fill out a form and we'll get back to you in less than 24 hrs."
                                }
                            </b>
                        </p>
                        <form className={style.form} autoComplete="off">
                            <div className={style.namesInputContainer}>
                                <div>
                                    <label
                                        htmlFor="firstName"
                                        className={style.label}
                                    >
                                        First name <span>{"  *"}</span>
                                    </label>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        className={style.inputField}
                                        required
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="lastName"
                                        className={style.label}
                                    >
                                        Last name <span>{"  *"}</span>
                                    </label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        className={style.inputField}
                                        required
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className={style.label}
                                    >
                                        Email <span>{"  *"}</span>
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        className={style.inputField}
                                        required
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="subject"
                                        className={style.label}
                                    >
                                        Subject <span>{"  *"}</span>
                                    </label>
                                    <input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        className={style.inputField}
                                        required
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className={style.label}
                                    >
                                        Message <span>{"  *"}</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className={style.inputField}
                                        required
                                    />
                                </div>

                                <div className={style.buttonContainer}>
                                    <Button>Send message</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Layout>
        </div>
    );
}
