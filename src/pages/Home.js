import React from 'react';
import DynamicText from '../components/DynamicText';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">

            <Navigation />

            <div className="homeContent">

                <div className="content">
                    <h1>Jefferson Guegan</h1>
                    <h2><DynamicText/></h2>
                    <div className="pdf">

                        <a href = "./media/CV_JeffersonGuegan.pdf" target="-blank">Téléchargez mon CV</a>

                    </div>


                </div>

            </div>
        </div>
    );
};

export default Home;