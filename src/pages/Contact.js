import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";


const Contact = () => {
  return (
    <div className="contact">

      <Navigation />

      <div className="contactContent">

        <div className="content">
          <div className="address">
  
              <h4>Adresse</h4>
              <p>5 Le Bourg</p>
              <p>24400 Saint-Louis-en-l'Isle</p>

          </div>

          <div className="phone">
        
              <h4>Téléphone</h4>
              <CopyToClipboard text="0782749666">
                <p style={{ cursor: "pointer" }} className="clipboard">
                  0782749666
                </p>
              </CopyToClipboard>
  
          </div>

          <div className="email">
  
              <h4>@e-mail</h4>
              <CopyToClipboard text="contact@bastyd.fr" className="hover">
                <p style={{ cursor: "pointer" }} className="clipboard">
                  contact@bastyd.fr
                </p>
              </CopyToClipboard>

          </div>

          
        </div>
        </div>
        </div>
  );
};

export default Contact;
