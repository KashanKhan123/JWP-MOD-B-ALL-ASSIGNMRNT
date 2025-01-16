import React from 'react'
import Footer from '../Footer/Footer';
import styles from './Landingpage.module.css'
import HideAppBar from '../Navbar/Navbar';
import Section from '../ImageSection/ImageSection';
import 'bootstrap/dist/css/bootstrap.min.css'
import StandardImageList from '../ImageSection/ImageSection';
import BMWRow from '../Section/section1';
import SectionWithTextAndCarousel from '../Section/section2'
import TextWithCarousel from '../Section/section3'
import FullWidthBox  from '../Section/section4';
import TwoIdenticalBlocks from '../Section/section5'
import HeroSection from '../Slider/HeroSection';

const LandingPage = ({onLogout}) => {
    return (
      <div className='container-fluid'>
        <HideAppBar/>
        <HeroSection />
        <FullWidthBox />
        <TwoIdenticalBlocks/>
        <TextWithCarousel/>
        <SectionWithTextAndCarousel/>
        <BMWRow/>
        <StandardImageList/>
        <div className="d-flex justify-content-center align-items-center m-3">
  <button className="btn btn-danger" onClick={onLogout}>
    Log Out
  </button>
</div>
        <Footer/>
      </div>
    );
  };

export default LandingPage
