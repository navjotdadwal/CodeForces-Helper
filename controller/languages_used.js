const fetch = require('node-fetch');

module.exports.analysis_of_languages = async function analysis_of_languages(username){

  var final_data = {}
  const response = await fetch(`https://codeforces.com/api/user.status?handle=${username}`);
  var data = await response.json();  
  for (var prop in data.result){
    var language=data.result[prop].programmingLanguage
    if(data.result[prop].verdict!="OK")
      continue;
    if(language in final_data){
      final_data[language]++;
    }
    else{
      final_data[language]=1
    }
  }
  return final_data
}