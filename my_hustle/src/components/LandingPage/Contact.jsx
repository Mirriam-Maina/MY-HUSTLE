import React, { Component } from 'react';
import { Container, Form , Button, TextArea} from 'semantic-ui-react';


export default class Contact extends Component{
    render(){

        return(
            <div className="contact-us">
                <Container textAlign="center" className="section-heading">Contact Us</Container>
                <Container>
                <Form>
                    <Form.Group widths="equal">
                    <Form.Field>
                    <label>First Name</label>
                    <input/>
                    </Form.Field>
                    <Form.Field>
                    <label>Last Name</label>
                    <input/>
                    </Form.Field>
                    </Form.Group>
                    <Form.Field>
                    <label>Email</label>
                    <input/>
                    </Form.Field>
                    <Form.Field>
                    <label>Subject</label>
                    <input/>
                    </Form.Field>
                    <Form.Field>
                    <label>Message</label>
                    <TextArea/>
                    </Form.Field>
                    <Button type='submit' className="contact">Send Message</Button>
                </Form>
                </Container>
            </div>
        );
    }
}