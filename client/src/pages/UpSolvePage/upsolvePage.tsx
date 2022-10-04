import React from 'react';
import Button from '../../components/Button/button';
import Navbar from '../../components/Navbar/navbar';
import ProSideBar from '../../components/ProSideBar/prosideBar';
import {
    useParams,
  } from "react-router-dom";
import{
    OuterComponent,
    MainComponent,
    SideBar
} from './upsolvePageStyles';


const UpSolvePage=()=>{
      const { user } = useParams();
      return(
        <OuterComponent>
            <Navbar />
            <MainComponent>
              <SideBar>
                <ProSideBar username={user}/>
              </SideBar>
            </MainComponent>
        </OuterComponent>            
      )
}
  
export default UpSolvePage;