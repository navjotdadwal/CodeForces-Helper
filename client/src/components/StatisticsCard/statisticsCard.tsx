import React from 'react';
import{
  CardComponent
} from './statisticsCardStyles';


const StatisticsCard=(props : any)=>{
      return(
        <CardComponent>
            <h2 style={{marginTop:'0px', width:'fit-content', margin: 'auto', paddingTop:'8px', fontSize:'30px'}}>
                {props.head}
            </h2>
        </CardComponent>       
      )
}
  
export default StatisticsCard;