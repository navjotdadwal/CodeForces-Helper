import styled from "styled-components";


export const OuterComponent = styled.div`
   background-color : white; 
   height : 100vh;
   width : 100vw;
   overflow-x: hidden;
   overflow-y: hidden;
`;

export const MainComponent = styled.div`
    display: flex;
    flex-direction: row;
    height : 100%;
    overflow-y: auto;
`;

export const SideBar = styled.div`
    height : 100%;
    overflow: hidden;
`;

export const Content = styled.div`
   margin:auto;
   margin-top:20px;
   padding-bottom: 20px;
`;

export const RowComponent = styled.div`
   display:flex;
   flex-direction: row;
`;