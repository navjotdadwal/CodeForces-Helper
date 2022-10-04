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
    Content,
    RowComponent,
    SideBar,
} from './statisticsPageStyles';
import StatisticsCard from '../../components/StatisticsCard/statisticsCard';
import StatisticsLargeCard from '../../components/StatisticsLargeCard/statisticsLargeCard';


const StatisticsPage=()=>{
      const { user } = useParams();
      return(
        <OuterComponent>
            <Navbar />
            <MainComponent>
                <SideBar>
                  <ProSideBar username={user}/>
                </SideBar>
                <Content>
                  <RowComponent>
                    <div style={{marginRight: '5px'}}>
                      <StatisticsCard head={`Verdicts of ${user}`}/>
                    </div>
                    <div style={{marginLeft: '5px'}}>
                      <StatisticsCard head={`Languages of ${user}`}/>
                    </div>
                  </RowComponent>
                  <RowComponent>
                    <div style={{marginTop: '15px'}}>
                      <StatisticsLargeCard head={`Levels of ${user}`}/>
                    </div>
                  </RowComponent>
                  <RowComponent>
                    <div style={{marginTop: '15px'}}>
                      <StatisticsLargeCard head={`Problem Ratings of ${user}`}/>
                    </div>
                  </RowComponent>
                </Content>
            </MainComponent>
        </OuterComponent>            
      )
}
  
export default StatisticsPage;