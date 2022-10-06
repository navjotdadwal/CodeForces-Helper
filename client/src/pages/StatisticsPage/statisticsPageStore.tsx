import { observable, action, makeObservable } from "mobx";
import { observer } from "mobx-react-lite";
import Service from "../../service/main";
export default class StatisticsPageStore{

    globalStore

    verdict = []
    isVerdictDataFetched = false;
    filteredVerdictData = []
    isFilteredVerdictData = false;

    language = []
    isLanguagesDataFetched = false;
    filteredLanguageData = []
    isFilteredLanguageData = false;

    problem_ratings = []
    isProblemRatingsDataFetched = false
    filteredProblemRatingsData = []
    isFilteredProblemRatingsData = false;

    user_levels = []
    isUserLevelsDataFetched = false
    filteredUserLevelsData = []
    isFilteredUserLevelsData = false;

    constructor(globalStore : any) {
        makeObservable(this, {
            verdict : observable,
            isVerdictDataFetched : observable,
            language : observable,
            isLanguagesDataFetched : observable,
            problem_ratings : observable,
            user_levels : observable,
            isUserLevelsDataFetched : observable,
            getVerdictsData : action,
            setVerdictsDataTrue : action,
            getLanguagesData : action,
            setLanguagesDataTrue : action,
            getProblemRatingsData : action,
            isProblemRatingsDataFetched : observable,
            getUserLevelsData : action,
            setUserLevelsDataTrue : action,
            filteredVerdictData : observable,
            isFilteredVerdictData : observable,
            filteredLanguageData : observable,
            isFilteredLanguageData : observable,
            filteredProblemRatingsData : observable,
            isFilteredProblemRatingsData : observable,
            filteredUserLevelsData : observable,
            isFilteredUserLevelsData : observable,
            getFilteredVerdictsData : action,
            setFilteredVerdictsDataTrue : action,
            getFilteredLanguagesData : action,
            setFilteredLanguagesDataTrue : action,
            getFilteredProblemRatingsDataTrue : action,
            setFilteredProblemRatingsDataTrue : action,
            getFilteredUserLevelsDataTrue : action,
            setFilteredUserLevelsDataTrue : action
        });
        this.globalStore = globalStore
    }
    // Verdicts
    async getVerdictsData(username : any){
      var obj = new Service()
      var data : any = []
      data = await obj.getDataByUsername(username, "verdicts")
      this.verdict = data   
    }

    async setVerdictsDataTrue(){
        this.isVerdictDataFetched = true;
    }

    async getFilteredVerdictsData(){
        var data = this.verdict
        var displayData : any = []
        for(let key in data){
            displayData.push({
                "id": key,
                "label": key,
                "value": data[key],
                "color": "hsl(6, 70%, 50%)"
            })
        }
        this.filteredVerdictData = displayData
    }

    async setFilteredVerdictsDataTrue(){
        this.isFilteredVerdictData = true;
    }

    // Languages
    async getLanguagesData(username : any){
        var obj = new Service()
        var data : any = []
        data = await obj.getDataByUsername(username, "languages")
        this.language = data   
      }
  
    async setLanguagesDataTrue(){
        this.isLanguagesDataFetched = true;
    }

    async getFilteredLanguagesData(){
        var data = this.language
        var displayData : any = []
        for(let key in data){
            displayData.push({
                "id": key,
                "label": key,
                "value": data[key],
                "color": "hsl(6, 70%, 50%)"
            })
        }
        this.filteredLanguageData = displayData
    }

    async setFilteredLanguagesDataTrue(){
        this.isFilteredLanguageData = true;
    }

    // Problem Ratings
    async getProblemRatingsData(username : any){
        var obj = new Service()
        var data : any = []
        data = await obj.getDataByUsername(username, "problem_ratings")
        this.problem_ratings = data   
      }
  
    async setProblemRatingsDataTrue(){
        this.isProblemRatingsDataFetched = true;
    }

    async getFilteredProblemRatingsDataTrue(){
        var data = this.problem_ratings
        var displayData : any = []
        for(let key in data){
            displayData.push({
                "x": key,
                "y": data[key]
            })
        }
        var finalData : any = []
        finalData.push({
            "id" : "Problem Ratings",
            "color": "hsl(240, 100%, 50%)",
            "data": displayData
        })
        this.filteredProblemRatingsData = finalData
    }

    async setFilteredProblemRatingsDataTrue(){
        this.isFilteredProblemRatingsData = true;
    }

    // User Levels
    async getUserLevelsData(username : any){
        var obj = new Service()
        var data : any = []
        data = await obj.getDataByUsername(username, "user_levels")
        this.user_levels = data   
      }
  
    async setUserLevelsDataTrue(){
        this.isUserLevelsDataFetched = true;
    }

    async getFilteredUserLevelsDataTrue(){
        var data = this.user_levels
        var displayData : any = []
        for(let key in data){
            displayData.push({
                "x": key,
                "y": data[key]
            })
        }
        var finalData : any = []
        finalData.push({
            "id" : "User Levels",
            "color": "hsl(13, 70%, 50%)",
            "data": displayData
        })
        this.filteredUserLevelsData = finalData
    }

    async setFilteredUserLevelsDataTrue(){
        this.isFilteredUserLevelsData = true;
    }
}