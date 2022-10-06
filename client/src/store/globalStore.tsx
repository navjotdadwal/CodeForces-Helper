import { observable } from "mobx";
import { observer } from "mobx-react-lite";
import { createContext } from "react";
import StatisticsPageStore from "../pages/StatisticsPage/statisticsPageStore";

export class GlobalStore{
  
    statisticsPageStore : StatisticsPageStore
    
    constructor(){
        this.statisticsPageStore = new StatisticsPageStore(this)
    }
}

export const StoreContext = new GlobalStore()