import React from 'react';
import Home from './Home';
import CaseStudies from './CaseStudies';
import About from './About';
import Contact from './Contact';
import MenuFrame from './menu-wrapper';
const Main = () => {
    return (
        <MenuFrame>
            <Home />
            <CaseStudies />
            <About />
            <Contact />
        </MenuFrame>
    )
};

export default Main;
