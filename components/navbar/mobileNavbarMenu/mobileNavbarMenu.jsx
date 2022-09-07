import styled from "styled-components";

import {
    primaryColor,
    primaryTextColor,
    sm,
    md,
    lg,
} from "./MobileNavbarMenu.module.scss";

export const MobileNavbarMenu = styled.ul`
    display: flex;
    background-color: ${primaryColor};
    box-shadow: -1px 1px 20px 1px black;
    position: fixed;
    color: ${primaryTextColor};
    right: ${(props) => (props.active ? "0" : "-500px")};
    top: 0;
    width: 70vw;
    z-index: 2;
    height: 100vh;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 150px 0;
    align-items: center;
    gap: 80px;
    transition: right 500ms cubic-bezier(0.4, 0, 0.2, 1);

    @media (min-width: ${sm}) {
        right: ${(props) => (props.active ? "0" : "-650px")};
    }

    @media (min-width: ${md}) {
        all: unset;
        display: flex;
        flex-direction: row;
        list-style: none;
        gap: 32px;
    }

    @media (min-width: ${lg}) {
        gap: 48px;
    }
`;
