const fetch = require('node-fetch');

module.exports.analysis_of_user_levels = async function analysis_of_user_levels(username){

  var final_data = {}
  const response = await fetch(`https://codeforces.com/api/user.status?handle=${username}`);
  var data = await response.json(); 
  for(var it=0;it<26;it++)
  {
    var chr = String.fromCharCode(65 + it)
    final_data[chr]=0
  }
  for (var prop in data.result){
    var temp=data.result[prop].problem.index
    var index=temp[0]
    if(index in final_data && data.result[prop].verdict=="OK"){
      final_data[index]++;
    }
  }
  var return_data = {}
  for (const [key, value] of Object.entries(final_data)) {
    if(value>0)
      return_data[key]=value
  }
  return return_data
}