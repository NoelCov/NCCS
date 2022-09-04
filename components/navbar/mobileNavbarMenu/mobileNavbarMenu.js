import styled from "styled-components";

import { yellowColor, blueColor, sm, lg } from "./mobileNavbarMenu.module.scss";

export const MobileNavbarMenu = styled.ul`
    display: flex;
    background-color: ${yellowColor};
    box-shadow: -1px 0 8px 3px ${blueColor};
    position: fixed;
    color: ${blueColor};
    right: ${(props) => (props.active ? "0" : "-500px")};
    top: 0;
    width: 70vw;
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
