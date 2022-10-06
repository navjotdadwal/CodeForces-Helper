const fetch = require('node-fetch');

module.exports.analysis_of_problem_ratings = async function analysis_of_problem_ratings(username){

  var final_data = {}
  const response = await fetch(`https://codeforces.com/api/user.status?handle=${username}`);
  var data = await response.json(); 
  for(var it=800;it<3700;it+=100)
  {
    final_data[it]=0
  }
  for (var prop in data.result){
    var rating=data.result[prop].problem.rating
    if(rating in final_data && data.result[prop].verdict=="OK"){
      final_data[rating]++;
    }
  }
  var return_data = {}
  for (const [key, value] of Object.entries(final_data)) {
    if(value>0)
      return_data[key]=value
  }
  return return_data
}