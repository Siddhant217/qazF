// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer__content">
//         <p>&copy; 2023 Photo Gallery App. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { AiFillInstagram,AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        
        <div className="icons">
        <div className="social-icons">
          <a href="https://www.instagram.com/siddhantpurohit216" target="_blank" rel="noopener noreferrer" style={{backgroundColor: "#183D3D" ,marginLeft: "10%"}}>
            <AiFillInstagram id="insta"/>
           <span style={{color:"white", backgroundColor:"#183D3D"}}>Instagram</span> 
          </a>
          
          <a href="https://www.instagram.com/siddhantpurohit216" target="_blank" rel="noopener noreferrer" style={{backgroundColor: "#183D3D",marginLeft: "33%"}}>
            <AiFillLinkedin id="linkdin"/>
            <span style={{color:"white", backgroundColor:"#183D3D"}}>Linkdin</span> 
          </a>
        </div>  
        </div>
        <p>&copy; 2023 Photo Gallery App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
