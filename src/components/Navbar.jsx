import React from 'react';

const Navbar = () => {

    return (
        <>
            <div className="collapse navbar-collapse custom-navmenu" id="main-navbar">
                <div className="container py-2 py-md-5">
                    <div className="row align-items-start">
                        <div className="col-md-2">
                            <ul className="custom-menu">
                                <li className='active'>
                                    <a href="/">Home</a>
                                </li>
                                <li className="">
                                    <a href="/about">About Me</a>
                                </li>
                                <li>
                                    <a href="/portfolio">Works</a>
                                </li>
                                <li>
                                    <a href="mailto:ramadhanalif430@gmail.com">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 d-none d-md-block  mr-auto">
                            <div className="tweet d-flex gap-5">
                                <div>
                                    <h3>Hello</h3>
                                    <p>
                                        <em>
                                        I'm a computer science student with a deep passion for web based application development. 
                                        I have strong knowledge in programming, algorithms, and data analysis. 
                                        </em>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-none d-md-block">
                            <h3>Hire Me</h3>
                            <p>
                                I'm looking for an opportunity to practice in an innovative company. My goal is to contribute to challenging and impactful projects
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <nav className="navbar navbar-light custom-navbar">
                <div className="container">
                    <a className="navbar-brand" href="index.html">MyPortfolio.</a>
                    <a href="#" className="burger" data-bs-toggle="collapse" data-bs-target="#main-navbar">
                        <span></span>
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar