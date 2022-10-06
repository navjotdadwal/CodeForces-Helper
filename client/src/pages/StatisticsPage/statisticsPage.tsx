import React from 'react';
import Button from '../../components/Button/button';
import Navbar from '../../components/Navbar/navbar';
import ProSideBar from '../../components/ProSideBar/prosideBar';
import { observer } from 'mobx-react-lite';
import {
    useParams,
  } from "react-router-dom";
import { useEffect } from 'react';
import{
    OuterComponent,
    MainComponent,
    Content,
    RowComponent,
    SideBar
} from './statisticsPageStyles';
import StatisticsCard from '../../components/StatisticsCard/statisticsCard';
import StatisticsLargeCard from '../../components/StatisticsLargeCard/statisticsLargeCard';
import { StoreContext } from '../../store/globalStore';
import { GlobalStore } from '../../store/globalStore';
const StatisticsPage=()=>{
      const { user } = useParams();
      const store : any = StoreContext;
      useEffect(() => {
         async function Verdicts() {

            if(store.statisticsPageStore.isVerdictDataFetched == false){
              await store.statisticsPageStore.getVerdictsData(user)
              await store.statisticsPageStore.setVerdictsDataTrue()
            }
            if(store.statisticsPageStore.isFilteredVerdictData == false){
              await store.statisticsPageStore.getFilteredVerdictsData()
              await store.statisticsPageStore.setFilteredVerdictsDataTrue()
            }
         }
         async function Languages() {

          if(store.statisticsPageStore.isLanguagesDataFetched == false){
            await store.statisticsPageStore.getLanguagesData(user)
            await store.statisticsPageStore.setLanguagesDataTrue()
          }
          if(store.statisticsPageStore.isFilteredLanguageData == false){
            await store.statisticsPageStore.getFilteredLanguagesData()
            await store.statisticsPageStore.setFilteredLanguagesDataTrue()
          }
         }
         async function ProblemRatings() {

          if(store.statisticsPageStore.isProblemRatingsDataFetched == false){
            await store.statisticsPageStore.getProblemRatingsData(user)
            await store.statisticsPageStore.setProblemRatingsDataTrue()
          }
          if(store.statisticsPageStore.isFilteredProblemRatingsData == false){
            await store.statisticsPageStore.getFilteredProblemRatingsDataTrue()
            await store.statisticsPageStore.setFilteredProblemRatingsDataTrue()
          }
         }

         async function UserLevels() {

          if(store.statisticsPageStore.isUserLevelsDataFetched == false){
            await store.statisticsPageStore.getUserLevelsData(user)
            await store.statisticsPageStore.setUserLevelsDataTrue()
          }
          if(store.statisticsPageStore.isFilteredUserLevelsData == false){
            await store.statisticsPageStore.getFilteredUserLevelsDataTrue()
            await store.statisticsPageStore.setFilteredUserLevelsDataTrue()
          }
         }
         Verdicts()
          .then(() => Languages())
          .then(() => ProblemRatings())
          .then(() => UserLevels()) 
      },[]);
      return(
        <OuterComponent>
            <Navbar />
            <MainComponent>
                <SideBar>
                  <ProSideBar username={user}/>
                </SideBar>
                <Content>
                  <RowComponent>
                    {
                      store.statisticsPageStore.isFilteredVerdictData?
                      <div style={{marginRight: '5px'}}>
                        <StatisticsCard head={`Verdicts of ${user}`} data={store.statisticsPageStore.filteredVerdictData}/>
                      </div>
                      :
                      <div style={{marginLeft: '5px'}}>
                        <StatisticsCard head={`Verdicts of ${user}`} data={[]}/>
                      </div>
                    }
                    {
                      store.statisticsPageStore.isFilteredLanguageData?
                      <div style={{marginLeft: '5px'}}>
                        <StatisticsCard head={`Languages of ${user}`} data={store.statisticsPageStore.filteredLanguageData}/>
                      </div>
                      :
                      <div style={{marginLeft: '5px'}}>
                        <StatisticsCard head={`Verdicts of ${user}`} data={[]}/>
                      </div>
                    }
                  </RowComponent>
                  <RowComponent>
                    {
                      store.statisticsPageStore.isFilteredUserLevelsData?
                      <div style={{marginTop: '15px'}}>
                        <StatisticsLargeCard head={`Levels of ${user}`} data={store.statisticsPageStore.filteredUserLevelsData} btm="Problem Label" lft="Number Of Problems Solved"/>
                      </div>
                      :
                      <div style={{marginTop: '15px'}}>
                        <StatisticsLargeCard head={`Levels of ${user}`} data={[]} btm="" lft=""/>
                      </div>
                    }
                  </RowComponent>
                  <RowComponent>
                    {
                      store.statisticsPageStore.isFilteredProblemRatingsData?
                      <div style={{marginTop: '15px'}}>
                        <StatisticsLargeCard head={`Problem Ratings of ${user}`} data={store.statisticsPageStore.filteredProblemRatingsData} btm="Problem Ratings" lft="Number Of Problems Solved"/>
                      </div>
                      :
                      <div style={{marginTop: '15px'}}>
                        <StatisticsLargeCard head={`Problem Ratings of ${user}`} data={[]} btm="" lft=""/>
                      </div>
                    }
                  </RowComponent>
                </Content>
            </MainComponent>
        </OuterComponent>            
      )
}
  
export default observer(StatisticsPage);