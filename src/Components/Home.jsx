import React, {useEffect} from 'react'
import Header from './Header';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './SubComponents/HomeHero';
import GetStarted from './SubComponents/GetStarted';
import Construction from './SubComponents/Construction';
import ServiceSection from './SubComponents/ServicesSection';
import AltService from './SubComponents/AltService';
import FeaturesSection from './SubComponents/FeaturesSection';
import ProjectsSection from './SubComponents/ProjectsSection';
import TestimonialsSection from './SubComponents/Testimonials';
import RecentBlogSection from './SubComponents/RecentBlogPostsSec';
const Home = () =>{
    useEffect(()=>{
        AOS.init()
    },[])
    return(
        <main >
            <Header/>
            <Hero/>
            <GetStarted/>
            <Construction/>
            <ServiceSection/>
            <AltService/>
            <FeaturesSection/> 
            <ProjectsSection/>
            <TestimonialsSection/>
            <RecentBlogSection/>
            <Footer/>
        </main>
        
    )
}

export default Home;