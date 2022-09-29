import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import{
  MainComponent,
  OuterComponent
} from './loginPageStyles';

const LoginPage=()=>{
      return(
          <OuterComponent>
            <Navbar />
            <MainComponent >
            </MainComponent>
          </OuterComponent>
      )
}
  
export default LoginPage;