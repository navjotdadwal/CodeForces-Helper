import React from 'react';
import Button from '../../components/Button/button';
import Navbar from '../../components/Navbar/navbar';
import Service from '../../service/main';
import{
  MainComponent,
  OuterComponent
} from './loginPageStyles';


const LoginPage=()=>{
  React.useEffect(() => {
    var a=new Service();
    a.getDataByUsername("navjot1234","problem_ratings")
  }, []);
      
      return(
          <OuterComponent>
            <Navbar />
            <MainComponent >
            <div class="form__group field">
              <input type="input" class="form__field" placeholder="Codeforces Handle" name="name" id='name' required />
              <label for="name" class="form__label">Codeforces Handle</label>
            </div>
            <Button innerText="Set Handle"/>
            </MainComponent>
          </OuterComponent>
      )
}
  
export default LoginPage;