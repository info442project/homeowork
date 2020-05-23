import React from 'react';
import Header from './header';
import Home from './home';
import Footer from './Footer';
import data from './yourdata';
import Card from './Card/Card.js';
import { Row, Col, Dropdown } from "react-bootstrap";
import create from "../img/create.png";
import browse from "../img/browse.png";
import team from "../img/Team.svg"
import { Link } from "react-router-dom";

const LandingPage = () => {

  return (<div className="App">
    <Header name={data.name} contactEmail={data.contactEmail}></Header>
    <Home name={data.landingPageName} paragraph={data.landingPagePara} authorImage={team}></Home>
    <div className="get-started">
      <h4 style={{ textAlign: "center", marginTop: "25px" }}>Get Started Now</h4>
      <Row>
        <Col md={6}>
          <div style={{ float: "right", marginBottom: "40px" }}>
          <Link to='/campaign_type'>
            <Card
              title="Create Campaign"
              content={
                <div className="description">
                  <img style={{height: "100px", width: "100px", marginLeft: "70px"}}src={create}></img>
                  <p style={{ fontSize: "14px", color: "#605e5e" }}>Help community by creating a meaningful campaign</p>
                </div>
              }
            />
            </Link>
          </div>
        </Col>
        <Col md={6}>
          <div>
          <Link to='/campaign_browsing'>
            <Card
              title="Browse Campaign"
              content={
                <div className="description">
                  <img style={{height: "100px", width: "100px", marginLeft: "70px"}}src={browse}></img>
                  <p style={{ fontSize: "14px", color: "#605e5e", paddingTop: "20px" }}>Get help from your community</p>
                </div>
              }
            />
            </Link>
          </div>
        </Col>
      </Row>
    </div>
    <Footer contactEmail={data.contactEmail} socialLinks={data.social}></Footer>
  </div >)
}

export default LandingPage