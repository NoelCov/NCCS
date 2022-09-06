import "../styles/globals.scss";

import { Navbar } from "../components/navbar/Navbar.component";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
