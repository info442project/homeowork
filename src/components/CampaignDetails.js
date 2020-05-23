import React from 'react';
import Header from './header';
import Footer from './Footer';
import data from './yourdata';
import "../App.css";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ImageUploader from 'react-images-upload';


const CampaignDetails = ()=>{
    return (
        <div>
        <Header name={data.name} contactEmail={data.contactEmail}></Header>
        <div className="about_container">
            <h1>Add Details</h1>
            <p>* required information</p>
            <h2>
                More information is always better
            </h2>
            <h1>Location</h1>
            <NameForm>Seattle, WA</NameForm>
            <br/>

            <h1>Contact Information</h1>
            <NameForm>email</NameForm>
            <NameForm>phone number</NameForm>

            <h1>Add Photos</h1>
            <PhotoUpload></PhotoUpload>

        </div>

        <Footer
            contactEmail={data.contactEmail}
            socialLinks={data.social}
        ></Footer>
    </div>
    )
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
        alert('A name was submitted: ' + this.state.value);
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

                <Link to="/landing_page">
                    <Button
                        id="next_button"
                        variant="primary"
                        type="submit"
                        onClick={(e) => this.handleSubmit()}>
                        Submit
                    </Button>
                </Link>
            </Form>
        );
    }
}

class PhotoUpload extends React.Component {
 
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
 
    render() {
        return (
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
        );
    }
}

export default CampaignDetails