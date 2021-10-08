import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notFound">

            <div className="notFoundContent">

                <h3> Désolé mais je n'ai pas codé ce que vous cherchez</h3>
                <NavLink to="/react-cv">
                    <i className="fas fa-home">
                        <span>Accueil</span>
                    </i>
                </NavLink>
            </div>

        </div>
    );
};

export default NotFound;