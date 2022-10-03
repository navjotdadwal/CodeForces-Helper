import styled from "styled-components";

export const MainComponent = styled.div`
   margin: auto;
   $primary: #11998e;
   $secondary: #38ef7d;
   $white: #fff;
   $gray: #9b9b9b;
   .form__group {
   position: relative;
   padding: 15px 0 0;
   margin-top: 10px;
   width: 50%;
   }

   .form__field {
   font-family: inherit;
   width: 100%;
   border: 0;
   border-bottom: 2px solid #4169E1;
   outline: 0;
   font-size: 1.3rem;
   color: black;
   padding: 7px 0px;
   background: transparent;
   transition: border-color 0.2s;

   &::placeholder {
      color: transparent;
   }

   &:placeholder-shown ~ .form__label {
      font-size: 1.3rem;
      cursor: text;
      top: 20px;
   }
   }

   .form__label {
   position: absolute;
   top: 0;
   display: block;
   transition: 0.2s;
   font-size: 1rem;
   color: gray;
   }

   .form__field:focus {
   ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      font-weight:700;    
   }
   padding-bottom: 6px;  
   font-weight: 700;
   border-width: 3px;
   border-image: linear-gradient(to right, $primary,$secondary);
   border-image-slice: 1;
   }
   /* reset input */
   .form__field{
   &:required,&:invalid { box-shadow:none; }
   }
   /* demo */
   font-family: 'Poppins', sans-serif; 
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items:center;
   height : 89vh;
   font-size: 1.5rem;
   background-color:	#E0E0E0;
`;

export const OuterComponent = styled.div`
   background-color : white; 
   height : 100vh;
   width : 100vw;
`;
