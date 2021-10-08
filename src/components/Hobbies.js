import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">

            <h3>Intérêts</h3>

            <ul>
                <li className="hobby">
                    <i className="fas fa-baseball-ball"></i>
                    <span>Sport - Joueur de Baseball / Softball</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-book-reader"></i>
                    <span>Lecture</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-vial"></i>
                    <span>Sciences</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-seedling"></i>
                    <span>Jardinage - Permaculture</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-laptop-code"></i>
                    <span>Informatique</span>
                </li>
            </ul>

        </div>
    );
};

export default Hobbies;