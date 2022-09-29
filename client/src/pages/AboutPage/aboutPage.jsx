import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import{
    OuterComponent,
    InnerComponent
} from './aboutPageStyles';

const AboutPage=()=>{
      return(
          <OuterComponent>
            <Navbar />
            <InnerComponent>
                <h1 style={{paddingTop: '1rem',textAlign : 'center'}}>
                    <u>
                        About
                    </u>
                </h1>
                <h2 style={{margin : '2rem', marginTop: '1rem'}}>
                    I have developed an app which will help you guys to do CP analysis. We have used API's provided by codeforces.
                    <br /><br />
                    App is having following features currently,
                    <br /><br />    
                    1. View User's profile with statistics
                    <br />            
                    2. Checkout all upcoming contests
                    <br />
                    3. Upsolve the problems from contests in which user took part
                    <br />
                    4. View problem statement, search any particular problem by name, sort problems rating wise
                    <br />
                    5. Bookmark problem to solve in future or download the problem statement to solve it offline
                    <br />
                    6. View User's last 50 submissions
                    <br />    
                    7. User's unsolved problems
                    <br />
                    8. View statistics of any user and many more...
                </h2>
            </InnerComponent>
          </OuterComponent>
      )
}
  
export default AboutPage;