import styled from "styled-components";


export const OuterComponent = styled.div`
    background-color : white; 
    height : 100vh;
    width : 100vw;
    display: grid;
    overflow-x: hidden;
    overflow-y: hidden;
`;

export const MainComponent = styled.div`
    display: flex;
    overflow-y:auto
`;

export const SideBar = styled.div`
    position: sticky;
    align-self: flex-start;
    top: 0;
    overflow-y: auto;
    height: 100%;
`;
