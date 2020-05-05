import React from 'react';
import Header from './header';
import Home from './home';
import Footer from './Footer';
import data from './yourdata';
import CampaignBrowsing from './CampaignBrowsing';

const LandingPage = ()=>{
    return(<div className="App">
      <Header name={data.name} contactEmail = {data.contactEmail}></Header>
      <Home name={data.landingPageName} paragraph = {data.landingPagePara} authorImage={data.landingPageImage}></Home>
      <CampaignBrowsing projects={data.projects}></CampaignBrowsing>
      <Footer contactEmail = {data.contactEmail} socialLinks = {data.social}></Footer>
    </div>)
}

export default LandingPage