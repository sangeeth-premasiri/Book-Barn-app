import React, { Component } from 'react'
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import firebase from '../configurations/fbconfig';

const db = firebase.firestore();

class newBooks extends Component {

    state = {
        bookInformation: [],
        BookName: '',
        Author: '',
        Price: '',
        ISBN: '',
        username: '',
        password: '',
    };

    

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleState = (x) => {
        this.setState({
            username : '', password : ''        })
    }

    submitData = (e) => {
        e.preventDefault();

        // console.log(
        //     this.state.BookName,
        //     this.state.Author,
        //     this.state.Price,
        //     this.state.ISBN
        // )

        if(this.state.username ==='bookadmin' && this.state.password === 'pwdadmin'){
           

               console.log("ok")
             }
             else {
           
             this.handleState()
             window.alert("Invalid UserData")
             }
        

        db.collection('Books Information').add({
            BookName: this.state.BookName,
            Author: this.state.Author,
            Price: this.state.Price,
            ISBN: this.state.ISBN,

        

        })
    }

    
    
      

    render() {

        
        return (
            <div id="3">
                <Form className="book-form" onSubmit={this.submitData}>
                    <Container fluid>
                        <Row>
                            <Col><h2 style={{ marginLeft: "10px", marginTop: "5px" }}>Add New Books to the Collection</h2></Col>
                        </Row>
                        <Row>
                            <Col><Form.Group className="form-item">
                                <Form.Label>Book Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Book Name" name="BookName" required onChange={this.handleChange} />
                            </Form.Group>
                            </Col>
                            <Col><Form.Group className="form-item">
                                <Form.Label>Author</Form.Label>
                                <Form.Control type="text" placeholder="Enter Author" name="Author" required onChange={this.handleChange} />
                            </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col><Form.Group className="form-item">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" placeholder="Enter Price" name="Price" required onChange={this.handleChange} />
                            </Form.Group>
                            </Col>
                            <Col><Form.Group className="form-item">
                                <Form.Label>ISBN</Form.Label>
                                <Form.Control type="text" placeholder="Enter ISBN" name="ISBN" required onChange={this.handleChange} />
                            </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col><Form.Group controlId="formBasicEmail" className="form-item">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type="text" required placeholder="Enter Username" className="form-boxes" name="username" 
                                    onChange={this.handleChange} />
                               
                            </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicPassword" className="form-item" >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" required placeholder="Password" name="password" 
                                        onChange={this.handleChange} />
                                   
                                </Form.Group>
                            </Col>
                            <Col>
                                <Button variant="default" type="submit" style={{ color: "white", background: "#A6764E", size: "lg", width: "218px", height: "48px", marginTop: "40px", marginLeft: "130px" }}>
                                    SUBMIT
                            </Button>
                            </Col>
                        
                        </Row>

                    </Container>
                </Form>

            </div>
        )
    }
}

export default newBooks
