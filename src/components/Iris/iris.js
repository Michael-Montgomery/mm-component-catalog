import './iris.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/sample-logo.jpg'
import irisSettings from './settings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function IrisHeader() {

    const [responsiveMenuExpanded, setResponsiveMenuExpanded] = useState(false);

    const handleResponsiveMenuClick = () => {
        setResponsiveMenuExpanded(!responsiveMenuExpanded)
    }

    return (




        <header style={{ height: responsiveMenuExpanded ? '390px' : '70px' }}>
            <nav>
                {
                    irisSettings.showHeaderLogo ? <img alt='logo' src={logo} id='header-logo'></img> : <></>
                }
                <NavLink to='/'>Link One</NavLink>
                <NavLink to='/headers'>Link Two</NavLink>
                <NavLink to='/'>Link Three</NavLink>
                {
                    irisSettings.showCTAButton ? <button id='header-cta-btn'>Do Something</button> : <></>
                }
                {
                    responsiveMenuExpanded ? <button id='responsive-menu-btn'><FontAwesomeIcon icon={faClose} onClick={handleResponsiveMenuClick}></FontAwesomeIcon></button> : <button id='responsive-menu-btn'><FontAwesomeIcon icon={faBars} onClick={handleResponsiveMenuClick}></FontAwesomeIcon></button>
                }
                {
                    responsiveMenuExpanded ? <div id='responsive-menu-list-wrapper'>
                        <ul id='responsive-menu-list'>
                            <li>
                                <NavLink to='/'>Link One</NavLink>
                            </li>
                            <li>
                                <NavLink to='/headers'>Link Two</NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>Link Three</NavLink>
                            </li>
                        </ul>
                    </div> : <></>
                }
            </nav>
        </header>
    )
}

export default IrisHeader;