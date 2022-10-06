import React from 'react';
import{
  CardComponent
} from './statisticsCardStyles';
import ResponsivePieChart from '../../components/ResponsivePieChart/responsivePieChart';

const StatisticsCard=(props : any)=>{
      return(
        <CardComponent>
            <h2 style={{marginTop:'0px', width:'fit-content', margin: 'auto', paddingTop:'8px', fontSize:'30px'}}>
                {props.head}
            </h2>
            <div style={{margin:'auto', marginTop:'3rem', height:'80%', width:'80%'}}>
              <ResponsivePieChart data={props.data}/>
            </div>
        </CardComponent>       
      )
}
  
export default StatisticsCard;