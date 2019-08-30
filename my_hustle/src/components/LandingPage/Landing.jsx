import React, { Component } from 'react';
import Navbar from './Navbar';
import { Button, Container} from 'semantic-ui-react'
import Services from './Services';
import About from './About';
import Contact from './Contact';
import langingImage from '../../../src/images/photo6.png';


export default class Landing extends Component{

render(){
    return (
        <div>
            <Navbar/>
            <Container className="container">
            <div className="about">
                            <div className="about-text">
                            <h1 className="about-heading">Hire a developer</h1>
                            Start your hustle safely, get clients and get paid.<br></br>
                            Want an application? Hire a developer easily and pay on your budget.<br></br>
                            <div className="button-get-started">
                            <Button className="button-get-started">GET STARTED</Button>
                            </div>
                            </div>
                        </div>
                        <img className="landing-image" src={langingImage} alt="landing"/>
            </Container>
            <Services/>
            <About/>
            <Contact/>
        </div>
        
    )
}

};