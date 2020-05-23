import React from "react";
import Header from "./header";
import Footer from "./Footer";
import data from "./yourdata";
import "../App.css";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

const CampaignTitle = () => {
  return (
    <div>
      <Header name={data.name} contactEmail={data.contactEmail}></Header>
      <div className="about_container">
        <h1>Name of Campaign</h1>
        <p>* required information</p>
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
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
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
            value={this.state.value}
            onChange={this.handleChange}
          />
          <Form.Text className="text-muted">
            This title will appear on your campaign page
          </Form.Text>
        </Form.Group>
        <Link to="/campaign_purpose">
          <Button
            id="next_button"
            variant="primary"
            type="submit"
            onClick={(e) => this.handleSubmit()}
          >
            Next
          </Button>
        </Link>
      </Form>
    );
  }
}

export default CampaignTitle;
