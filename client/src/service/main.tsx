const WebApiURL = "http://localhost:3001";
class Service{
  getDataByUsername = async(username : any, type : any) => {
      try {
        const res = await fetch(`${WebApiURL}/${type}/${username}`);

        if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }
        const data = await res.json()
        return data;
      } catch (err : any) {
        console.log(err.message);
      }
  }
}
export default Service;