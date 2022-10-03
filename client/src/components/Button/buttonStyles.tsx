import styled from "styled-components";

export const ButtonComponent = styled.div`   
    .butn {
    background-color : #4169E1;  
    margin-top:50px;  
    padding:20px 25px;
    border:none;
    font-size:22px;
    border-radius:50px;
    cursor:pointer;
    color:white;
    width:400px;
    font-weight:bold;
    transition:0.3s ease all;
    box-shadow:1px 2px 3px rgba(0,0,0,0.3);
    &:hover{
        background-color: #5F87FF;
    }
    &:focus {
      outline:none;
    }
  }
`;