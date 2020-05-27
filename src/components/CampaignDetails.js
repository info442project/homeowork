import React from 'react';
import Header from './header';
import Footer from './Footer';
import data from './yourdata';
import "../App.css";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import upload from "../img/upload.png"
import ImageUploading from "react-images-uploading";


class CampaignDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            email: "",
            phone: "",
            image: ""
        };
        localStorage.setItem("Location", "")
        localStorage.setItem("Email", "")
        localStorage.setItem("Phone", "")
        localStorage.setItem("Picture", "")
    }

    updateLocation = (result) => {
        this.setState({
            location: result
        })
    }

    updateEmail = (result) => {
        this.setState({
            email: result
        })
    }

    updateNumber = (result) => {
        this.setState({
            number: result
        })
    }

    uploadInfo = () => {
        localStorage.setItem("Location", this.state.location)
        localStorage.setItem("Email", this.state.email)
        localStorage.setItem("Phone", this.state.number)
    }

    render() {
        return (
            <div>
                <Header name={data.name} contactEmail={data.contactEmail}></Header>
                <div className="about_container campaign_details">
                    <h1>Add Details</h1>
                    <p style={{ marginTop: "10px" }}>* required information</p>
                    <h2 style={{marginBottom: "0"}}>
                        More information is always better
                    </h2>
                    <div className="content">
                        <h3>Location</h3>
                        <LocationForm onChange={(result) => { this.updateLocation(result) }}></LocationForm>
                        <br />

                        <h3>Contact Information</h3>
                        <EmailForm onChange={(result) => { this.updateEmail(result) }}></EmailForm>
                        <br />
                        <PhoneForm onChange={(result) => { this.updateNumber(result) }}></PhoneForm>

                        <h3>Add Photos</h3>
                        <p style={{ fontSize: "20px" }}>Max Size 1MB (Or result in creation failure)</p>
                        <PhotoUpload></PhotoUpload>
                        <br />
                        <br />
                    </div>
                    <Submission fireDB={this.props.fireDB}
                        onSubmit={() => { this.uploadInfo() }}></Submission>
                </div>

                <Footer
                    contactEmail={data.contactEmail}
                    socialLinks={data.social}
                ></Footer>
            </div>
        )
    }
}


class LocationForm extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { value: "" };

        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        // this.setState({ value: event.target.value });
        this.props.onChange(event.target.value)
    }

    // handleSubmit(event) {
    //     alert('Location was submitted: ' + this.state.value);
    //     localStorage.setItem("Location", this.state.value);
    //     // event.preventDefault();
    // }

    render() {
        return (
            <Form>
                {" "}
                <Form.Control
                    type="text"
                    placeholder="Location goes here"
                    onChange={this.handleChange}
                />
            </Form>
        );
    }
}

class EmailForm extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { value: "" };

        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.props.onChange(event.target.value)
    }

    // handleSubmit(event) {
    //     alert('Email was submitted: ' + this.state.value);
    //     localStorage.setItem("Email", this.state.value);
    //     // event.preventDefault();
    // }

    render() {
        return (
            <Form>
                {" "}
                <Form.Control
                    type="text"
                    placeholder="Email goes here"
                    onChange={this.handleChange}
                />
            </Form>
        );
    }
}

class PhoneForm extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { value: "" };

        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.props.onChange(event.target.value)
    }

    // handleSubmit(event) {
    //     alert('Phone number was submitted: ' + this.state.value);
    //     localStorage.setItem("Phone", this.state.value);
    //     // event.preventDefault();
    // }

    render() {
        return (
            <Form>
                {" "}
                <Form.Control
                    type="text"
                    placeholder="Phone number goes here"
                    onChange={this.handleChange}
                />
            </Form>
        );
    }
}

// class PhotoUpload extends React.Component {

//     constructor(props) {
//         super(props);
//          this.state = { pictures: []};
//          this.onDrop = this.onDrop.bind(this);
//     }


//     onDrop(picture) {
//         this.setState({
//             pictures: this.state.pictures.concat(picture)
//         });
//         //localStorage.setItem("Picture", JSON.stringify(this.state.pictures));
//         console.log(picture) 
//     }

//     render() {
//         return (
//             <div>
//             <ImageUploader
//                 withIcon={true}
//                 buttonText='Choose images'
//                 onChange={this.onDrop}
//                 imgExtension={['.jpg', '.gif', '.png', '.gif']}
//                 maxFileSize={5242880}
//             />
//             </div>
//         );
//     }
// }
class PhotoUpload extends React.Component {
    onChange = (imageList) => {
        // data for submit
        console.log(imageList);
        localStorage.setItem("Picture", imageList[0].dataURL);
    };

    render() {
        return (
            <div>
            <img src={upload} alt=""></img>
            <br></br>
            <br></br>
            <Form>
                {" "}
                <Form.Control
                    type="text"
                    placeholder="Alternative text for you picture"
                    style={{width: 300, height: 30}}
                />
            </Form>
            <br></br>
            <ImageUploading
                onChange={this.onChange}
                maxNumber={10}
                multiple
                maxFileSize={5 * 1024 * 1024}
                acceptType={["jpg", "gif", "png"]}
            >
                {({ imageList, onImageUpload, onImageRemoveAll }) => (
                    // write your building UI
                    <div>
                        <button onClick={onImageUpload}>Upload images</button>
                        <button onClick={onImageRemoveAll}>Remove all images</button>

                        {imageList.map((image) => (
                            <div key={image.key}>
                                <img src={image.dataURL} alt =""/>
                                <button onClick={image.onUpdate}>Update</button>
                                <button onClick={image.onRemove}>Remove</button>
                            </div>
                        ))}
                    </div>
                )}
            </ImageUploading>
            </div>
        );
    }
}

class Submission extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.props.onSubmit()
        var date = new Date().getFullYear() + "/" + new Date().getMonth() + "/" + new Date().getDate()
        localStorage.setItem("Date", date)
        localStorage.setItem("index", 0)
        alert('Campaign successfully created!')
        addCampaign(this.props.fireDB)
        var target = [{
            Title: localStorage.getItem("Title"),
            Picture: localStorage.getItem("Picture"),
            Purpose: localStorage.getItem("Purpose"),
            Type: localStorage.getItem("Type"),
            Phone: localStorage.getItem("Phone"),
            Location: localStorage.getItem("Location"),
            Email: localStorage.getItem("Email"),
            Number: localStorage.getItem("Number"),
            Date: localStorage.getItem("Date"),
            index: 0,
            Donation: 0
        }]
        localStorage.setItem("original_cards", JSON.stringify(target))
        localStorage.setItem("index", 0)
    }

    render() {
        return (
            <Link to="/campaign_information">
                <Button
                    id="finish_button"
                    variant="primary"
                    type="submit"
                    onClick={(e) => this.handleSubmit()}
                >
                    Finish Creation
                    </Button>
            </Link>
        );
    }
}

function addCampaign(fireDB) {

    var title = localStorage.getItem("Title");
    var type = localStorage.getItem("Type");
    var phone = localStorage.getItem("Phone");
    var purpose = localStorage.getItem("Purpose");
    var location = localStorage.getItem("Location");
    var picture = localStorage.getItem("Picture");
    if (picture === "") {
        picture = "empty"
    }
    var email = localStorage.getItem("Email");
    var number = localStorage.getItem("Number");
    var date = localStorage.getItem("Date");
    // mydb.transaction(function (t) {
    //     t.executeSql("INSERT INTO campaigns (Title, Type, Phone, Purpose, Location, Picture, Email, Number, Date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [title, type, phone, purpose, location, picture, email, number, date]);
    // });
    fireDB.collection("campaigns").doc(title).set({
        Title: title,
        Type: type,
        Phone: phone,
        Purpose: purpose,
        Location: location,
        Picture: picture,
        Email: email,
        Number: number,
        Date: date,
        Donation: 0
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
    console.log(picture)

}

export default CampaignDetails