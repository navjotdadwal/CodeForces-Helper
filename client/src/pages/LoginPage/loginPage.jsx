import React from 'react';
import Button from '../../components/Button/button';
import Navbar from '../../components/Navbar/navbar';
import{
  MainComponent,
  OuterComponent
} from './loginPageStyles';


const LoginPage=()=>{
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