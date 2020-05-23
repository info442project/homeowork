import React, { Component } from 'react';
import Header from './header';
import Footer from './Footer';
import data from './yourdata';
import Card from './Card/Card.js';
import { Link } from "react-router-dom";
import { Row, Col, Dropdown } from "react-bootstrap";
import background from "../img/sch.png";
// const CampaignBrowsing = ({projects}) =>{
//     return(
//         <div className="work_container">
//             <h1>Campaigns</h1>
//             <div className="projects_container">
//                 {projects.map((project)=>(
//                 <div key={project.id} className="project">
//                     <div className="image">
//                         <a href={project.url}>
//                             <img src={project.imageSrc} alt={project.title}></img>
//                         </a>
//                     </div>
//                     <div className="title">
//                         {project.title}
//                     </div>
//                 </div>
//                 ))}
//             </div>
//         </div>
//     )
// }
class CampaignBrowsing extends Component {
    render() {
        return (
            <div>
                <Header name={data.name} contactEmail={data.contactEmail}></Header>
                <Row>
                    <Col md={9}>
                        <h4 style={{ textAlign: "center", marginBottom: "40px", marginLeft: "280px" }}>Browse Campaigns</h4>
                    </Col>
                    <Col md={2}>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Type of Campaign
                        </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item >Supplies</Dropdown.Item>
                                <Dropdown.Item>Money</Dropdown.Item>
                                <Dropdown.Item>Human Resources</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col md={1}>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Sort By
                        </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item >Date Posted</Dropdown.Item>
                                <Dropdown.Item>A-Z</Dropdown.Item>
                                <Dropdown.Item>Z-A</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                <Row>
                    <Card
                        title="Toy Drive for Seattle Childrens Hospital"
                        content={
                            <div>
                                <img src={background}></img>
                                <div className="description">
                                    <p>This is the description</p>
                                </div>
                                <div className="learn-more">
                                    <Link to='/campaign_information'>
                                        <a>Learn More</a>
                                    </Link>
                                </div>
                            </div>
                        }
                    />
                    <Card
                        title="Toy Drive for Seattle Childrens Hospital"
                        content={
                            <div>
                                <img src={background}></img>
                                <div className="description">
                                    <p>This is the description</p>
                                </div>
                                <div className="learn-more">
                                    <Link to='/campaign_information'>
                                        <a>Learn More</a>
                                    </Link>
                                </div>
                            </div>
                        }
                    />
                    <Card
                        title="Toy Drive for Seattle Childrens Hospital"
                        content={
                            <div>
                                <img src={background}></img>
                                <div className="description">
                                    <p>This is the description</p>
                                </div>
                                <div className="learn-more">
                                    <Link to='/campaign_information'>
                                        <a>Learn More</a>
                                    </Link>
                                </div>
                            </div>
                        }
                    />
                </Row>
                <Footer contactEmail={data.contactEmail} socialLinks={data.social}></Footer>
            </div>
        )
    }
}

export default CampaignBrowsing;