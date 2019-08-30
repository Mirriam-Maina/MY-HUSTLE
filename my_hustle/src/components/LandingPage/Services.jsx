import React, { Component } from 'react';
import { Container, Card } from 'semantic-ui-react'


export default class Services extends Component{

    render(){
        return(
            <div className="services">
                <Container textAlign='center' className="section-heading">Services</Container>
                <Container>
                    <Card.Group>
                    <Card className="card-services">
                        <Card.Content>
                        <Card.Header className="card-header"></Card.Header>
                        <Card.Description>
                        <div className="feature-content">
                            <h2>Heading Here</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                            ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                            </p>
                            </div>
                        </Card.Description>
                        </Card.Content>
                    </Card>
                    <Card className="card-services">
                        <Card.Content>
                        <Card.Header className="card-header"></Card.Header>
                        <Card.Description>
                        <div className="feature-content">
                            <h2>Heading Here</h2>
                            <p >
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                            ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                            </p>
                            </div>
                        </Card.Description>
                        </Card.Content>
                    </Card>
                    <Card className="card-services">
                        <Card.Content>
                        <Card.Header className="card-header"></Card.Header>
                        <Card.Description>
                        <div className="feature-content">
                            <h2>Heading Here</h2>
                            <p >
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                            ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                            </p>
                            </div>
                        </Card.Description>
                        </Card.Content>
                    </Card>
                    <Card className="card-services">
                        <Card.Content>
                        <Card.Header className="card-header"></Card.Header>
                        <Card.Description>
                            <div className="feature-content">
                            <h2>Heading Here</h2>
                            <p >
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                            ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                            </p>
                            </div>
                        </Card.Description>
                        </Card.Content>
                    </Card>     
                    </Card.Group>
                </Container>
            </div>

        );
    }


}


