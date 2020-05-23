import React from 'react';
import Header from './header';
import Footer from './Footer';
import data from './yourdata';
import "../App.css";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
// import ImageUploader from 'react-images-upload';
import ImageUploading from "react-images-uploading";


const CampaignDetails = (props)=>{
    console.log(props.db)
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
            <LocationForm>Seattle, WA</LocationForm>
            <br/>

            <h1>Contact Information</h1>
            <EmailForm>email</EmailForm>
            <PhoneForm>phone number</PhoneForm>

            <h1>Add Photos</h1>
            <PhotoUpload></PhotoUpload>
            <br/>
            <br/>
            <Submission db = {props.db}></Submission>
        </div>

        <Footer
            contactEmail={data.contactEmail}
            socialLinks={data.social}
        ></Footer>
    </div>
    )
}


class LocationForm extends React.Component {
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
        alert('Location was submitted: ' + this.state.value);
        localStorage.setItem("Location", this.state.value);
        // event.preventDefault();
    }

    render() {
        return (
            <Form>
                {" "}
                onSubmit={this.handleSubmit}
                <Form.Control
                    type="text"
                    placeholder="Location goes here"
                    value={this.state.value}
                    onChange={this.handleChange}
                />

                <Button
                    id="next_button"
                    variant="primary"
                    type="submit"
                    onClick={(e) => this.handleSubmit()}>
                    Submit
                </Button>
            </Form>
        );
    }
}

class EmailForm extends React.Component {
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
        alert('Email was submitted: ' + this.state.value);
        localStorage.setItem("Email", this.state.value);
        // event.preventDefault();
    }

    render() {
        return (
            <Form>
                {" "}
                onSubmit={this.handleSubmit}
                <Form.Control
                    type="text"
                    placeholder="Email goes here"
                    value={this.state.value}
                    onChange={this.handleChange}
                />

                <Button
                    id="next_button"
                    variant="primary"
                    type="submit"
                    onClick={(e) => this.handleSubmit()}>
                    Submit
                </Button>
            </Form>
        );
    }
}

class PhoneForm extends React.Component {
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
        alert('Phone number was submitted: ' + this.state.value);
        localStorage.setItem("Phone", this.state.value);
        // event.preventDefault();
    }

    render() {
        return (
            <Form>
                {" "}
                onSubmit={this.handleSubmit}
                <Form.Control
                    type="text"
                    placeholder="Phone number goes here"
                    value={this.state.value}
                    onChange={this.handleChange}
                />

                <Button
                    id="next_button"
                    variant="primary"
                    type="submit"
                    onClick={(e) => this.handleSubmit()}>
                    Submit
                </Button>
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
                  <img src={image.dataURL} />
                  <button onClick={image.onUpdate}>Update</button>
                  <button onClick={image.onRemove}>Remove</button>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
      );
    }
 }

  class Submission extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        var date = new Date().getFullYear() + "/" + new Date().getMonth() + "/"  + new Date().getDate()
        localStorage.setItem("Date", date)
        alert('Campaign successfully created!');
    
        addCampaign(this.props.db) 
        
    }

    render() {
        return (
            <Link to="/">
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

 function addCampaign(mydb) {
    var title = localStorage.getItem("Title");
    var type = localStorage.getItem("Type");
    var phone = localStorage.getItem("Phone");
    var purpose = localStorage.getItem("Purpose");
    var location = localStorage.getItem("Location");
    var picture = localStorage.getItem("Picture");
    var email = localStorage.getItem("Email");
    var number = localStorage.getItem("Number");
    var date = localStorage.getItem("Date");
    mydb.transaction(function (t) {
        t.executeSql("INSERT INTO campaigns (Title, Type, Phone, Purpose, Location, Picture, Email, Number, Date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [title, type, phone, purpose, location, picture, email, number, date]);
    });
}

export default CampaignDetails