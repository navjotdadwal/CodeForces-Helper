const verdicts = require('../controller/user_verdicts.js')
const languages = require('../controller/languages_used.js')
const user_levels = require('../controller/user_levels.js')
const problem_ratings = require('../controller/problem_ratings.js')
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 

app.get('/verdicts/:user',async function (req, res) {
  var data = await verdicts.analysis_of_verdicts(req.params.user)
  res.end(JSON.stringify(data)) 
})

app.get('/languages/:user',async function (req, res) {
  var data = await languages.analysis_of_languages(req.params.user)
  res.end(JSON.stringify(data)) 
})

app.get('/user_levels/:user',async function (req, res) {
  var data = await user_levels.analysis_of_user_levels(req.params.user)
  res.end(JSON.stringify(data)) 
})

app.get('/problem_ratings/:user',async function (req, res) {
  var data = await problem_ratings.analysis_of_problem_ratings(req.params.user)
  res.end(JSON.stringify(data)) 
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});