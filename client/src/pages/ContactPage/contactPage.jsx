import React from 'react';
import Navbar from '../../components/Navbar/navbar';

import{
    OuterComponent,
    InnerComponent
} from './contactPageStyles';

const ContactPage=()=>{
      return(
        <OuterComponent>
        <Navbar />
        <InnerComponent>
            <h1 style={{paddingTop: '1rem',textAlign : 'center'}}>
                <u>
                  Contact Details
                </u>
            </h1>
            <h2 style={{margin : '2rem', marginTop: '1rem'}}>
                Email : navjotsinghdadwal@gmail.com
                <br /><br />
                Mobile Number : 7850894631
                <br /> <br />
                Codeforces Handle : navjotdadwal
                <br /> <br />
                Codechef Handle : navjot1234
                <br /> <br />
                ICPC email account : codeforcesdadwal@gmail.com
                <br /> <br />
                LinkedIn Profile Link : https://www.linkedin.com/in/navjot-singh-dadwal-85268619a/
                <br /> <br />
                Google coding competitions mail : navjotsinghdadwal@gmail.com
                <br /><br />
                Facebook Hacker Cup Name : Codeforces Singh 
            </h2>
        </InnerComponent>
      </OuterComponent>
      )
}
  
export default ContactPage;