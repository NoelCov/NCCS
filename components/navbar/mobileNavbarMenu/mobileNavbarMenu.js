import styled from "styled-components";

import {
    primaryColor,
    darkColor,
    sm,
    lg,
} from "./mobileNavbarMenu.module.scss";

export const MobileNavbarMenu = styled.ul`
    display: flex;
    background-color: ${primaryColor};
    box-shadow: rgb(0 0 0 / 25%) 0px 12px 15px;
    position: fixed;
    color: ${darkColor};
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
        all: unset;
        display: flex;
        flex-direction: row;
        list-style: none;
        gap: 24px;
    }

    @media (min-width: ${lg}) {
        gap: 48px;
    }
`;
