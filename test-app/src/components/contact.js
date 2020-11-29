import React, { Component } from 'react'
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import firebase from '../configurations/fbconfig';

const db = firebase.firestore();


class contact extends Component {

    state = {
        
        Comments: '',
       
    };

    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
   }

    submitData = (e) =>{
        e.preventDefault();

    //    console.log(
    //     this.state.Comments),


      db.collection('User Comments').add({
       comment: this.state.Comments,   
     })
}


    render() {
        return (
            <div className="contact-form" id="4">
                <Form onSubmit={this.submitData}>
                    <Container fluid>
                        <Row>
                            <Col><h2 style={{ marginLeft: "10px", marginTop: "10px" }}>WE'D LOVE TO HEAR FROM YOU</h2></Col>
                        </Row>
                        <Row>
                            <Col sm={8}>
                                <Button variant="default" href="mailto:support.bookbarn@gmail.com"type="MAIL US" style={{ color: "white", background: "#A6764E", size: "lg", width: "218px", height: "48px", marginTop: "40px", marginLeft: "350px" }}>
                                    MAIL US
                                </Button>
                                <Button variant="default" href="tel:44345678903"type="CALL US" style={{ color: "white", background: "#A6764E", size: "lg", width: "218px", height: "48px", marginTop: "110px", marginLeft: "350px" }}>
                                    CALL US
                                </Button>
                            </Col>
                            <Col sm={4}>
                                <Form.Group controlId="ControlTextarea1" className="message">
                                    <Form.Label>MESSAGE</Form.Label>
                                    <Form.Control as="textarea" rows={4} name="Comments" onChange={this.handleChange} required />
                                </Form.Group>
                                <Button  variant="default" type="SUBMIT" style={{ color: "white", background: "#A6764E", size: "lg", width: "218px", height: "48px", marginTop: "40px", marginRight: "350px" }}>
                                    SUBMIT
                                </Button>
                            </Col>
                        </Row>
                        
                    </Container>
                </Form>
            </div >
        )
    }
}

export default contact