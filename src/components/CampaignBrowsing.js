import React, { Component } from 'react';
import Header from './header';
import Footer from './Footer';
import data from './yourdata';
import Card from './Card/Card.js';
import { Link } from "react-router-dom";
import { Row, Col, Dropdown } from "react-bootstrap";
import default_image from "../img/default.svg"
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
    
    constructor(props) {
        super(props);

        select(this.props.fireDB);
        this.state = {
            cards: JSON.parse(localStorage.getItem("cards"))
        };
    }
    
    updateCardList = (text) => {
        var cards = JSON.parse(localStorage.getItem("original_cards"))
        var new_cards = cards.filter(d => d.Type === text)
        localStorage.setItem("cards", JSON.stringify(new_cards))
        this.setState({
            cards: new_cards
        })
    }

    sortCardList = (text) => {
        var cards = JSON.parse(localStorage.getItem("original_cards"))
        if (text === "Date Posted") {
            cards.sort(function(a, b){
                return a.Date - b.Date 
            })
        } else if (text === "A-Z") {
            cards.sort(function(a, b){
                var titleA = a.Title.toLowerCase()
                var titleB = b.Title.toLowerCase()
                if (titleA < titleB) {
                    return -1;
                }
                if (titleA > titleB) {
                    return 1;
                }
                return 0;
            })
        } else if (text === "Z-A") {
            cards.sort(function(a, b){
                var titleA = a.Title.toLowerCase()
                var titleB = b.Title.toLowerCase()
                if (titleB < titleA) {
                    return -1;
                }
                if (titleB > titleA) {
                    return 1;
                }
                return 0;
            })
        }
        localStorage.setItem("cards", JSON.stringify(cards))
        this.setState({
            cards: cards
        })
    }

    render() {
        return (
            <div>
                <Header name={data.name} contactEmail={data.contactEmail}></Header>
                <Row>
                    <Col md={9}>
                        <h4 style={{ textAlign: "center", marginBottom: "40px", marginLeft: "280px", fontWeight: "600" }}>Browse Campaigns</h4>
                    </Col>
                    <Col md={2}>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Type of Campaign
                        </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item >
                                    <DropClick text = "Supplies"
                                               onClick={(txt) => {this.updateCardList(txt)}}></DropClick>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                <   DropClick text = "Money"
                                              onClick={(txt) => {this.updateCardList(txt)}}></DropClick>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <DropClick text = "Human Resources"
                                               onClick={(txt) => {this.updateCardList(txt)}}></DropClick>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col md={1}>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Sort By
                        </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item >
                                    <Sort text = "Date Posted"
                                          onClick={(txt) => {this.sortCardList(txt)}}></Sort>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Sort text = "A-Z"
                                          onClick={(txt) => {this.sortCardList(txt)}}></Sort>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Sort text = "Z-A"
                                          onClick={(txt) => {this.sortCardList(txt)}}></Sort>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                <Row>
                    <CardsList db = {this.props.db}
                               cards = {this.state.cards} ></CardsList> 
                    {/* <Card
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
                    /> */}
                </Row>
                <Footer contactEmail={data.contactEmail} socialLinks={data.social}></Footer>
            </div>
        )
    }
}

class Sort extends React.Component {

    render() {
        return (
            <span onClick= {(e) => {
                e.preventDefault();
                this.props.onClick(this.props.text)
            }}>
                {this.props.text}
            </span>
        )
    }
}

class DropClick extends React.Component {

    render() {
        return (
            <span onClick= {(e) => {
                e.preventDefault();
                this.props.onClick(this.props.text)
            }}>
                {this.props.text}
            </span>
        )
    }
}


class CardsList extends React.Component {
    render() {
        var elements = []
        var element_object = this.props.cards
        var i
          
        for (i = 0; i < element_object.length; i++) {
            var object = element_object[i]
            var image
            if (object.Picture === "empty") {
                image = default_image
            } else {
                image = object.Picture
            }
            elements.push(<Card 
                title = {object.Title} 
                content={
                    <div>
                        <img src={image} alt="purpose of campaign"></img>
                        <div className="description">
                            <p>{object.Purpose}</p>
                        </div>
                        <div className="learn-more">
                            <ToDetail index = {object.index}></ToDetail>
                        </div>
                    </div>
                } 
            />)
        }
        
        return (
            <div>
                {elements}
            </div>
        )
    }

}

class ToDetail extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        localStorage.setItem("index", this.props.index);
    }

    render() {
        return (
            <Link to='/campaign_information'
                  onClick= {(e) => this.handleSubmit()}>
                <a href="/">Learn More</a>
            </Link>
        )
    }
}

function select(fireDB) {
    // mydb.transaction(function (t) {
    //     t.executeSql("SELECT * FROM campaigns", [], function (t, results){ 
    //         var i
    //         var temp = []
    //         for (i = 0; i < results.rows.length; i++) {
    //             var row = results.rows.item(i);
    //             temp.push({
    //                 Title: row.Title,
    //                 Picture: row.Picture,
    //                 Purpose: row.Purpose,
    //                 Type: row.Type,
    //                 Phone: row.Phone,
    //                 Location: row.Location,
    //                 Email: row.Email,
    //                 Number: row.Number,
    //                 Date: row.Date,
    //                 index: i,
    //                 donation: 0 
    //             })
    //             var target = JSON.parse(localStorage.getItem("original_cards"))
    //             if (target && target.length > i) {
    //                 temp[i].donation = target[i].donation
    //             }
    //         }
    //         localStorage.setItem("original_cards", JSON.stringify(temp))
    //         localStorage.setItem("cards", JSON.stringify(temp))
    //     });
    // });
    var temp = []
    getData(fireDB, temp)
}

async function getData(fireDB, temp) {
    var i = 0
    await fireDB.collection("campaigns").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var campaign = doc.data()
            temp.push({
                Title: campaign.Title,
                Picture: campaign.Picture,
                Purpose: campaign.Purpose,
                Type: campaign.Type,
                Phone: campaign.Phone,
                Location: campaign.Location,
                Email: campaign.Email,
                Number: campaign.Number,
                Date: campaign.Date,
                index: i,
                Donation: campaign.Donation 
            })
            i++;
        });
    })
    localStorage.setItem("original_cards", JSON.stringify(temp))
    localStorage.setItem("cards", JSON.stringify(temp))
    
}


export default CampaignBrowsing;