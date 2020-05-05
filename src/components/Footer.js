import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";

const Footer = ({contactEmail, socialLinks})=>{

    return (
      // <div className="contact_container">
      //   <h1>Help the community</h1>
        
      //   <br></br>
      //   <a className="email_link" href={`mailto:${contactEmail}`}>
      //     {contactEmail}
      //   </a>
      //   <div className="social_links">
          // <ul>
          //   <li>
          //     <a href={`mailto:${contactEmail}`}>
          //       <FaEnvelope></FaEnvelope>
          //     </a>
          //   </li>
          //   <li>
          //     <a href={socialLinks[0].url}>
          //       <FaLinkedin></FaLinkedin>
          //     </a>
          //   </li>
          //   <li>
          //     <a href={socialLinks[1].url}>
          //       <FaGithub></FaGithub>
          //     </a>
          //   </li>
          //   <li>
          //     <a href={socialLinks[2].url}>
          //       <FaCodepen></FaCodepen>
          //     </a>
          //   </li>
          // </ul>
      //   </div>
      // </div>

      <div className="footer">
        <img class="footerPic" src="../../img/Donaid_Logo.png" width="30" height="30" className="d-inline-block align-top" alt=""></img>
        <div class="company_info">
            Donaid <br/>
            Seattle, WA
        </div>
        <div class="copyright">
          &copy; Donaid&trade;,2020.All rights reserved.
        </div>
        <div class="email">
          <a href={`mailto:${contactEmail}`}>
            info@donaid.project
          </a>
        </div>
        <div class="phone">1-232-3434(Main)</div>
        <ul>
            <li>
              <a href={`mailto:${contactEmail}`}>
                <FaEnvelope></FaEnvelope>
              </a>
            </li>
            <li>
              <a href={socialLinks[0].url}>
                <FaLinkedin></FaLinkedin>
              </a>
            </li>
            <li>
              <a href={socialLinks[1].url}>
                <FaGithub></FaGithub>
              </a>
            </li>
            <li>
              <a href={socialLinks[2].url}>
                <FaCodepen></FaCodepen>
              </a>
            </li>
          </ul>
      </div>

    );
}

export default Footer