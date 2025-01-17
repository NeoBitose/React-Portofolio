import React from 'react';

const sampleJSON = [
    {
        name: "Pluralsight",
        type: "web",
        img: "img_1.jpg"
    },
    {
        name: "Pluralsight",
        type: "web",
        img: "img_1.jpg"
    },
    {
        name: "Pluralsight",
        type: "web",
        img: "img_1.jpg"
    },
    {
        name: "Pluralsight",
        type: "web",
        img: "img_1.jpg"
    },
    {
        name: "Pluralsight",
        type: "web",
        img: "img_1.jpg"
    },
    {
        name: "Pluralsight",
        type: "web",
        img: "img_1.jpg"
    },
    {
        name: "Pluralsight",
        type: "web",
        img: "img_1.jpg"
    }
];

const Portofolio = () => {

    return (

        <section className="section site-portfolio">
            <div className="container">
                <div className="row mb-5 align-items-center">
                    <div className="col-md-12 col-lg-6 mb-4 mb-lg-0" >
                        <h2>Hey, I'm Alif Ramadhan</h2>
                        <p className="mb-0">Software Engineering</p>
                    </div>
                    <div className="col-md-12 col-lg-6 text-start text-lg-end">
                        <div id="filters" className="filters">
                            <a href="#" data-filter="*" className="active">All</a>
                            <a href="#" data-filter=".web">Web</a>
                            <a href="#" data-filter=".design">Design</a>
                        </div>
                    </div>
                </div>
                <div id="portfolio-grid" className="row no-gutter" >
                    {Object.keys(sampleJSON).map((key, i) => (
                        <div key={i} className="item web col-sm-6 col-md-4 col-lg-4 mb-4">
                            <a href="work-single.html" className="item-wrap fancybox">
                                <div className="work-info">
                                    <h3>{sampleJSON[key].name}</h3>
                                    <span>{sampleJSON[key].type}</span>
                                </div>
                                <img className="img-fluid" src={`public/assets/img/${sampleJSON[key].img}`} />
                            </a>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Portofolio