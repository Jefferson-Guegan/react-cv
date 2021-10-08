import React, {useState} from 'react';
import { portfolioData } from '../data/portfolioData';
import Project from './Project';

const ProjectList = () => {

    const [projects] = useState(portfolioData);
    const [radios] = useState([
        {id: 1, value:"javascript"},
        {id: 2, value:"css"},
        {id: 1, value:"react"},
        {id: 1, value:"node"},
    ]);

    const [selectedRadio, setSelectedRadio] = useState("javascript");
    
    const handleRadio = (event) => {
        let radio = event.target.value;
        setSelectedRadio(radio);
    }


    return (

        <div className="portfolioContent">
            <ul className="radioDisplay">

                {
                    radios.map ((radio) => {
                    return(
                        <li key={radio.id}>

                            <input
                                type="radio"
                                name="radio"
                                checked={radio.value === selectedRadio}
                                value={radio.value}
                                id={radio.value}
                                onChange={handleRadio}
                            />

                            <label htmlFor={radio.value}>{radio.value}</label>

                        </li>
                    )})
                }

            </ul>

            <div className="projects">
                
                {
                    projects
                    
                   
                    .filter((item) => 
                        item.languages.includes (selectedRadio)) 
            
                    .map((item) => {
                        
                        
                        return (
                            <Project
                                key={item.id} 
                                item={item}
                            />       
                        )

                    })

                }

            </div>
            
        </div>

    );
};

export default ProjectList;