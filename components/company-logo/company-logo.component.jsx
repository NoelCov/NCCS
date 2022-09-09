import React from "react";

import Link from "next/link";
import Image from "next/image";

import Logo from "../../public/images/logo.png";

export const CompanyLogo = () => {
    return (
        <Link href="/">
            <a>
                <Image
                    src={Logo}
                    layout="fill"
                    alt="A desktop computer and the text NCCS, acronym for Noel's Computer and Cellphones Services"
                />
            </a>
        </Link>
    );
};
