import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../index.css'

const Home = () => {

    return (
        <div className='vh-100 d-flex flex-column justify-content-center'>
            <div>
                <Navbar />
                <Footer />
            </div>
        </div>
    )
}

export default Home