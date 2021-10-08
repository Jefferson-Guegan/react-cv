import React from 'react';

const ProgressBar = (props) => {
    const {language} = props;
    const xpYears = 5;
    const progressBar = language.xp / xpYears * 100 + '%';

    return (
        <div key={language.id} className="languagesList">
            <ul>
                <li>{language.value}</li>

                <div className="progressBar" 
                style={{width:progressBar}}>
                </div>

            </ul>
        
        </div>
    );
};

export default ProgressBar;