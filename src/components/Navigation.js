import React from 'react';
import { NavLink } from 'react-router-dom';
import Photo from './media/JGuegan.jpg';

const Navigation = () => {
    return (
        <div className="sidebar">

            <div className="id">

                <div className="idContent">

                    <img src={Photo} atl="Jefferson Guegan"/>
                    <h3>Jefferson Guegan</h3>

                </div>

            </div>

                <div className="navigation">

                    <ul>
                        <li>
                            <NavLink exact to="/" activeClassName="navActive">
                                <i className="fas fa-home"></i>
                                <span>Accueil</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/competences" activeClassName="navActive">
                                <i className="fas fa-mountain"></i>
                                <span>Compétences</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/portfolio" activeClassName="navActive">
                                <i className="fas fa-image"></i>
                                <span>Portfolio</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/contact" activeClassName="navActive">
                                <i className="fas fa-address-book"></i>
                                <span>Contact</span>
                            </NavLink>
                        </li>

                    </ul>

                </div>
                <div className="socialNetwork">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/jefferson-guegan-403753217/" target="_blank"
                            rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/Rural_Coder" target="_blank"
                            rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="https://codepen.io/jefferson-guegan" target="_blank"
                            rel="noopener noreferrer"><i className="fab fa-codepen"></i></a>
                        </li>
                        <li>
                            <a href="https://github.com/Jefferson-Guegan" target="_blank"
                            rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        </li> 
                    </ul>
                </div>

                <div className="signature">
                    <p>Jefferson Guegan - 2021</p>
                </div>

            </div>
            
    );
};

export default Navigation;