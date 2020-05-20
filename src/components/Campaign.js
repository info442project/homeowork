import React from 'react';
import Header from './header';
import Footer from './Footer';
import data from './yourdata';

const Campaign = ()=>{
    return (
        <div>
            <Header name={data.name} contactEmail = {data.contactEmail}></Header>
            <h4 style={{ textAlign: "center", marginBottom: "40px" }}>Campaign</h4>
            <Footer contactEmail = {data.contactEmail} socialLinks = {data.social}></Footer>
        </div>
    )
}

export default Campaign