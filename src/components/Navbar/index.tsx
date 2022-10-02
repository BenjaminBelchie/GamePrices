import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Navbar: React.FC = () => {
    const [isActive, setIsActive] = useState(false);
    const [dealsActive, setdealsActive] = useState(true)
    const [platformActive, setplatformActive] = useState(false);
    const [searchActive, setsearchActive] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return(
        <>
            <nav className="mobile-nav" style={{visibility:`${mobileMenuOpen ? "visible": "hidden"}`, opacity:`${mobileMenuOpen ? "1": "0"}`,transition: "visibility 0s, opacity 0.4s linear"}}>
                <a href="#">New Deals</a>
                <a href="#">Platform</a>
                <a href="#">Search</a>
            </nav>
            <nav>
                <div className="container">
                    <p className="nav-header">UK Game Deals</p>
                    <div className="menu">
                        <Link
                            to="/" 
                            onClick={() => {
                                setdealsActive(!dealsActive);
                                setplatformActive(false);
                                setsearchActive(false);
                            }} 
                            className={`${dealsActive ? 'is-active' :''}`}>New Deals</Link>
                        <a 
                            href="#" 
                            onClick={() => {
                                setplatformActive(!platformActive);
                                setdealsActive(false);
                                setsearchActive(false);
                            }} 
                            className={`${platformActive ? 'is-active' :''}`}>Platform</a>
                        <a 
                            href="#" 
                            onClick={() => {
                                setsearchActive(!searchActive);
                                setdealsActive(false);
                                setplatformActive(false);
                            }} 
                            className={`${searchActive ? 'is-active' :''}`}>Search</a>
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