import React from 'react';
import Header from './header';
import Footer from './Footer';
import data from './yourdata';
import { Row, Col, Dropdown, ProgressBar } from "react-bootstrap";
import Card from './Card/Card.js';
import default_image from "../img/default.svg";
import user from "../img/person.png";


class Campaign extends React.Component {

    constructor(props) {
        super(props);
        var campaign = JSON.parse(localStorage.getItem("original_cards"))[localStorage.getItem("index")]
        var image 

        if(campaign.Picture === "empty") {
            image = default_image
        } else {
            image = campaign.Picture
        }

        this.state = { title: campaign.Title,
                       type: campaign.Type,
                       purpose: campaign.Purpose,
                       picture: image,
                       number: campaign.Number,
                       email: campaign.Email,
                       location: campaign.Location,
                       phone: campaign.Phone,
                       donation: campaign.Donation};
    }

    updateDonation = () => {
        this.setState({
            donation: this.state.donation + 1
        });
        // var campaigns = JSON.parse(localStorage.getItem("cards"))
        // var theCampaign = campaigns[localStorage.getItem("index")]
        // theCampaign.donation = this.state.donation + 1
        // campaigns[localStorage.getItem("index")] = theCampaign
        // localStorage.setItem("cards", JSON.stringify(campaigns))
        // localStorage.setItem("original_cards", JSON.stringify(campaigns))
        updateDB(this.props.fireDB, this.state.title, this.state.donation)
        var currDonation = this.state.donation + 1
        alert('Congrats! You have contributed to these ' + currDonation + " donations!");
    }

    render() {
        return (
            <div className="campaign_info">
                <Header name={data.name} contactEmail={data.contactEmail}></Header>
                <h2 style={{ color: "black", textAlign: "center", marginBottom: "60px", fontWeight: "600" }}>{this.state.title + ": " + this.state.type}</h2>
                <Row>
                    <Col md={7} style={{textAlign: "center"}}>
                    <img style={{maxHeight: "500px", maxWidth: "540px"}}src={this.state.picture}></img>
                    </Col>
                    <Col md={5}>
                        <Card
                            title = {<div><ProgressBar now={(this.state.donation / this.state.number) * 100}/> {this.state.donation + " donated of " + this.state.number}</div> }
                            content={
                                <div>
                                    <div className="description">
                                        <p style={{fontSize :"14px", color: "rgb(87, 96, 139)"}}>Thank you for supporting this campaign! We need more donators to reach the goal - can you help?</p>
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
                        <h2 style={{color: "rgb(61, 75, 113)", fontWeight: "600", marginTop: "40px", marginLeft: "185px"}}>{"Location: " + this.state.location}</h2>
                        <p style={{color: "rgb(96, 94, 94)", fontSize: "18px", marginLeft: "185px"}}>{"Description: " + this.state.purpose}</p>
                    </Col>
                    <Col md={5}>
                        <img src={user} style={{width: "150px", height: "150px", marginTop: "40px", marginLeft: "138px"}}></img>
                        <h6 style={{color: "black", fontSize: "18px", marginLeft: "116px", marginTop: "10px"}}>{"Phone: " + this.state.phone}</h6>
                        <h6 style={{color: "black", fontSize: "18px", marginLeft: "116px", marginTop: "5px"}}>{"Email: " + this.state.email}</h6>
                    </Col>
                </Row>
                <Footer contactEmail={data.contactEmail} socialLinks={data.social}></Footer>
            </div>
        )
    }   
}

function updateDB(fireDB, title, prev) {
    fireDB.collection("campaigns").doc(title).update({
        Donation: prev + 1
    }).then(function() {
        console.log("Document successfully updated!");
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
}

export default Campaign