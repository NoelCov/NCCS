import styled from "styled-components";

import {
    primaryColor,
    primaryTextColor,
    sm,
    md,
    lg,
} from "./Mobile-navbar-menu.module.scss";

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
    padding: 160px 0 0 40px;
    gap: 80px;
    transition: right 500ms cubic-bezier(0.4, 0, 0.2, 1);
    align-items: flex-start;

    @media (min-width: ${sm}) {
        width: 45vw;
        padding: 160px 0 0 48px;
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
