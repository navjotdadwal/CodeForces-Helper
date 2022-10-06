const fetch = require('node-fetch');

module.exports.analysis_of_verdicts = async function analysis_of_verdicts(username){
  var final_data = {}
  const response = await fetch(`https://codeforces.com/api/user.status?handle=${username}`);
  var data = await response.json();
  
  for (var prop in data.result){
    var verdict=data.result[prop].verdict
    if(verdict=="OK")
      verdict="ACCEPTED"
    if(verdict in final_data){
      final_data[verdict]++;
    }
    else{
      final_data[verdict]=1
    }
  }
  return final_data
}