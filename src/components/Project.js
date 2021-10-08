import React from 'react';
import { useState } from 'react/cjs/react.development';

const Project = (props) => {
    const {item}=props;

    const [showInfo, setshowInfo] = useState('false');
    
    const handleInfo = () => {
        setshowInfo(!showInfo);
    }

    return (
        <div className="project">
            <div className="icons">

                {
                item.languagesIcons.map ((icon) => {
                    
                    return(
                
                        <div>
                            
                            <i className={icon} key={icon}></i>

                        </div>
                    )
                })}
                                      
            </div>
        
            <h3>{item.projectName}</h3>
            <img src={item.picture} alt="projet" onClick={handleInfo}/>
            <span className="infos" onClick={handleInfo}>
                <i className="fas fa-plus-square"></i>
            </span>

            {
                showInfo==true && (
                    <div className="showInfos">
                        <div className="infosContent">
                            <div className="head">
                                <h2>{item.projectName}</h2>
                                <div className="sourceCorde">
                                    <a href={item.source} 
                                    rel="noopener norefferrer" 
                                    className="button" 
                                    target="_blank">Voir le projet</a>
                                </div>                            
                            </div>

                            <p className="text">{item.info}</p>

                            <div className="button return" 
                            onClick={handleInfo}> 
                                
                                Retourner sur la page
                            </div>

                        </div>
                    </div>
                )
            }
            
        </div>
    );
};

export default Project;