import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { useLocation } from 'react-router-dom'

const Navbar: React.FC = () => {
    const [isActive, setIsActive] = useState(false);
    const [dealsActive, setdealsActive] = useState(false)
    const [platformActive, setplatformActive] = useState(false);
    const [searchActive, setsearchActive] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    

    useEffect(() => {
        switch(location.pathname){
            case "/":
                setdealsActive(true);
                setplatformActive(false);
                setsearchActive(false);
                break;
            case "/platform":
                setplatformActive(true);
                setdealsActive(false);
                setsearchActive(false);
                break;
            case "/search":
                setsearchActive(true);
                setdealsActive(false);
                setplatformActive(false);
                break;
        }
    },[location.pathname])
    

    return(
        <>
            <nav className="mobile-nav" style={{visibility:`${mobileMenuOpen ? "visible": "hidden"}`, opacity:`${mobileMenuOpen ? "1": "0"}`,transition: "visibility 0s, opacity 0.4s linear"}}>
                <a href="#">New Deals</a>
                <a href="#">Platform</a>
                <a href="#">Search</a>
            </nav>
            <nav>
                <div className="container">
                    <Link className="logo" to={'/'}>
                        <p className="nav-header">Game Deals</p>
                    </Link>
                    
                    <div className="menu">
                        <Link
                            to="/" 
                            className={`${dealsActive ? 'is-active' :''}`}>New Deals</Link>
                        <Link
                            to="/platform" 
                            className={`${platformActive ? 'is-active' :''}`}>Platform</Link>
                        <Link
                            to="/search" 
                            className={`${searchActive ? 'is-active' :''}`}>Search</Link>
                    </div>
                    <button onClick={() => {
                        setIsActive(!isActive);
                        setMobileMenuOpen(!mobileMenuOpen);
                        }} className={`hamburger ${isActive ? 'is-active' :''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar