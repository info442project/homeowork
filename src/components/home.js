import React from 'react';

const Home = ({name, paragraph, authorImage})=>{

    return(
    <div>
        <div className="home_container">
            <div className="home_head_wrapper">
            <h1>Helping the<br/><span>community</span></h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p>{paragraph}</p>
            </div>
            <div className="image_container">
                <img src={authorImage} alt="Logo"></img>
                <div className="bg"></div>
            </div>
            
        </div>
    </div>
    )
}

export default Home;