import React from "react";

import style from "../styles/contact.module.scss";

import { Layout } from "../components/layout/layout.component";

export default function Contact() {
    return (
        <div className={style.contactPage}>
            <Layout>
                <form className={style.formContainer} autoComplete="off">
                    <div className={style.namesInputContainer}>
                        <div>
                            <label htmlFor="firstName" className={style.label}>
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
                            <label htmlFor="lastName" className={style.label}>
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
                            <label htmlFor="email" className={style.label}>
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
                            <label htmlFor="subject" className={style.label}>
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
                            <label htmlFor="message" className={style.label}>
                                Message <span>{"  *"}</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className={style.inputField}
                                required
                            />
                        </div>
                    </div>
                </form>
            </Layout>
        </div>
    );
}
