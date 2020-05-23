import React from 'react';
import Header from './header';
import Footer from './Footer';
import data from './yourdata';
import "../App.css";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";


const CampaignPurpose = () => {
    return (
        <div>
            <Header name={data.name} contactEmail={data.contactEmail}></Header>
            <div className="about_container">
                <h1>Explain the purpose and goal of the campaign</h1>
                <p>* required information</p>
                <h2>
                    Tip: Write a clear explanation of your purpose of the campaign.
                </h2>

                <EssayForm></EssayForm>
                <br/>
                <h2>
                    Donation Goal can be...
                </h2>
                <list class="list">
                    <li>+ Number of items</li>
                    <li>+ A dollar amount</li>
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

class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('An description was submitted: ' + this.state.value);
        localStorage.setItem("Purpose", this.state.value);
        // event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label> This campaign is...
            <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}


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
        alert('Amount was submitted: ' + this.state.value);
        localStorage.setItem("Number", this.state.value);
        // event.preventDefault();
    }

    render() {
        return (
            <Form>
                {" "}
                onSubmit={this.handleSubmit}
                <Form.Control
                    type="text"
                    placeholder="Amount goes here"
                    value={this.state.value}
                    onChange={this.handleChange}
                />

                <Link to="/campaign_details">
                    <Button
                        id="next_button"
                        variant="primary"
                        type="submit"
                        onClick={(e) => this.handleSubmit()}>
                        Next
                    </Button>
                </Link>
            </Form>
        );
    }
}

export default CampaignPurpose