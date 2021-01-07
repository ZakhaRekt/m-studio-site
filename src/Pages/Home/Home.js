import React from 'react';
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar.js';
import Information from '../../Components/Information/Information.js';
// import Slider from './Components/Slider/Slider.js';
import Footer from '../../Components/Footer/Footer.js';

function Home() {
    return (
            <div style={{ backgroundImage: "white" }}>
                <Navbar />
                <div type="button" className="callback-bt">
                    <div className="text-call">
                            <a href="tel:+380955777072">
                                <i className="fa fa-phone"></i>
                                <span>Звонок</span>
                            </a>
                    </div>
                </div>
                <Information />
                <Footer />
            </div>
    );
}
export default Home;
