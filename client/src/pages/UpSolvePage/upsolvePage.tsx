import React from 'react';
import Button from '../../components/Button/button';
import Navbar from '../../components/Navbar/navbar';
import ProSideBar from '../../components/ProSideBar/prosideBar';
import {
    useParams,
  } from "react-router-dom";
import{
    OuterComponent,
    MainComponent
} from './upsolvePageStyles';


const UpSolvePage=()=>{
      const { user } = useParams();
      return(
        <OuterComponent>
            <Navbar />
            <MainComponent>
                <ProSideBar username={user}/>
            </MainComponent>
        </OuterComponent>            
      )
}
  
export default UpSolvePage;