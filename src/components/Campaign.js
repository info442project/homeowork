import React from 'react';
import Header from './header';
import Footer from './Footer';
import data from './yourdata';
import { Row, Col, Dropdown } from "react-bootstrap";
import background from "../img/sch.png";
import Card from './Card/Card.js';

const Campaign = () => {
    return (
        <div className="campaign_info">
            <Header name={data.name} contactEmail={data.contactEmail}></Header>
            <h4 style={{ textAlign: "center", marginBottom: "40px" }}>Campaign</h4>
            <Row>
                <Col md={7}>
                <img style={{maxHeight: "500px", maxWidth: "540px"}}src={background}></img>
                </Col>
                <Col md={5}>
                    <Card
                        title="50 donated of 200"
                        content={
                            <div>
                                <div className="description">
                                    <p style={{fontSize :"14px"}}>Thank you for supporting this campaign! We need more donators to reach the goal - can you help?</p>
                                </div>
                                <div className="btnDonate" style={{textAlign: "center"}}>
                                    {/* <Link to='/'> */}
                                        <button><a>Donate to Campaign</a></button>
                                    {/* </Link> */}
                                </div>
                            </div>
                        }
                    />
                </Col>
            </Row>
            <Row>
                <Col md={7}>
                    <h2 style={{color: "black", marginTop: "40px"}}>Toy Drive for Seattle Childrens Hospital</h2>
                    <p style={{color: "black", fontSize: "18px"}}>This is the description.</p>
                </Col>
                <Col md={5}>
                    <h4 style={{color: "black", marginTop: "40px"}}>Sahra Smith, Swedish Hospital</h4>
                    <p style={{color: "black", fontSize: "18px"}}>This is the description.</p>
                </Col>
            </Row>
            <Footer contactEmail={data.contactEmail} socialLinks={data.social}></Footer>
        </div>
    )
}

export default Campaign