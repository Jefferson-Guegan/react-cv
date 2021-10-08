import React, {useState} from 'react';
import { languagesData } from '../data/languagesData';
import ProgressBar from './ProgressBar';


const Languages = () => {
    const [languages] = useState(languagesData);

    return (
        <div className="languagesFramework">
            <div>

            <h3> Langages, Frameworks et Bibliothèques </h3>
            <div className="years">
                <span>Junior</span>
                <span>Intermédiaire</span>
                <span>Sénior</span>
            </div>



            </div>

            <ul>
                {languages.map((language) => (
                <ProgressBar language={language} 
                key = {language.id}
                className="languagesDisplay"
                />
                ))}
            </ul>
            
        </div>
    );
};

export default Languages;