import React from 'react';
import Header from './header';
import Footer from './Footer';
import data from './yourdata';
import { Row, Col, Dropdown } from "react-bootstrap";
import Card from './Card/Card.js';

class Campaign extends React.Component {

    constructor(props) {
        super(props);
        var campaign = JSON.parse(localStorage.getItem("cards"))[localStorage.getItem("index")]

        this.state = { title: campaign.Title,
                       type: campaign.Type,
                       purpose: campaign.Purpose,
                       picture: campaign.Picture,
                       number: campaign.Number,
                       email: campaign.Email,
                       location: campaign.Location,
                       phone: campaign.Phone };
    }

    updateDonation = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    render() {
        return (
            <div className="campaign_info">
                <Header name={data.name} contactEmail={data.contactEmail}></Header>
                <h4 style={{ textAlign: "center", marginBottom: "40px" }}>{this.state.title + ": " + this.state.type}</h4>
                <Row>
                    <Col md={7}>
                    <img style={{maxHeight: "500px", maxWidth: "540px"}}src={this.state.picture}></img>
                    </Col>
                    <Col md={5}>
                        <Card
                            title = {this.state.number + "  donated of 200"}
                            content={
                                <div>
                                    <div className="description">
                                        <p style={{fontSize :"14px"}}>Thank you for supporting this campaign! We need more donators to reach the goal - can you help?</p>
                                    </div>
                                    <div className="btnDonate" style={{textAlign: "center"}}>
                                        <button onClick={() => {this.updateDonation()}}>
                                            <a>Donate to Campaign</a>
                                        </button>
                                    </div>
                                </div>
                            }
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={7}>
                        <h2 style={{color: "black", marginTop: "40px"}}>{"Location: " + this.state.location}</h2>
                        <p style={{color: "black", fontSize: "18px"}}>{"Description: " + this.state.purpose}</p>
                    </Col>
                    <Col md={5}>
                    <h4 style={{color: "black", marginTop: "40px"}}>{"Phone: " + this.state.phone}</h4>
                        <p style={{color: "black", fontSize: "18px"}}>{"Email: " + this.state.email}</p>
                    </Col>
                </Row>
                <Footer contactEmail={data.contactEmail} socialLinks={data.social}></Footer>
            </div>
        )
    }   
}

export default Campaign