import React from 'react';
import Home from './Home';
import CaseStudies from './CaseStudies';
import About from './About';
import Contact from './Contact';
import MenuFrame from './menu-wrapper';
import BlogRecentsList from './blog/BlogRecentsList';
import { Link } from 'react-router-dom';
const Main = () => {
    return (
        <MenuFrame>
            <Home />
            <CaseStudies />
            <About />
            <Contact />
            <Link to="/blog">
            <BlogRecentsList />
            </Link>
        </MenuFrame>
    )
};

export default Main;
