import Head from "next/head";

import { Hero } from "../components/hero/hero.component";

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
        </div>
    );
}
