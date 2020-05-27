import React from "react";
import Header from "./header";
import Footer from "./Footer";
import data from "./yourdata";
import "../App.css";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

const CampaignTitle = () => {

  localStorage.setItem("Title", "")

  return (
    <div>
      <Header name={data.name} contactEmail={data.contactEmail}></Header>
      <div className="about_container">
        <h1>Name of Campaign</h1>
        <p style={{marginTop: "10px"}}>* required information</p>
        <h2>
          Tip: Get peoples attention by writing a short focused title for your
          campaign
        </h2>
        <list class="list">
          <li>+ Keep it short and to the point</li>
          <li>+ Focus on the solution</li>
          <li>+ Communicate urgency</li>
        </list>

        <NameForm></NameForm>
      </div>
      <Footer
        contactEmail={data.contactEmail}
        socialLinks={data.social}
      ></Footer>
    </div>
  );
};

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: "",
      clickAble: false  
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ 
      value: event.target.value
    });
    if (event.target.value !== "") {
      this.setState({ 
        clickAble: true
      });
    } else if (event.target.value === "") {
      this.setState({ 
        clickAble: false
      });
    }
  }

  handleSubmit() {
    alert("A name was submitted: " + this.state.value);
    localStorage.setItem("Title", this.state.value);
  }

  handleSubmitNothing(event) {
    event.preventDefault()
    window.alert("Must input a title for your campaign");
  }

  render() {
    return (
      <Form>
        {" "}
        onSubmit={this.handleSubmit}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Campaign Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            maxlength = "30"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <Form.Text className="text-muted">
            This title will appear on your campaign page
          </Form.Text>
        </Form.Group>
        {
          this.state.clickAble
          ? <Link to="/campaign_purpose">
              <Button
                id="next_button"
                variant="primary"
                type="submit"
                onClick={() => this.handleSubmit()}
              >
                Next
              </Button>  
            </Link>
          : <Link to="/campaign_purpose">
              <Button
                id="next_button"
                variant="primary"
                type="submit"
                onClick={(event) => this.handleSubmitNothing(event)}
              >
                Next
              </Button>  
            </Link>
        }
      </Form>
    );
  }
}

export default CampaignTitle;
