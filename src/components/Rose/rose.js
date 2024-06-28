import './rose.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/sample-logo.jpg'

function RoseHeader() {
    return (
        <header style={{display: 'none'}}>
            <nav>
              
                <NavLink to='/'>Link One</NavLink>
                <NavLink to='/headers'>Link Two</NavLink>
                <img alt='logo' src={logo} id='header-logo'></img>
                <NavLink to='/'>Link Three</NavLink>
                <NavLink to='/'>Link Four</NavLink>
              
            </nav>
        </header>
    )
}

export default RoseHeader;