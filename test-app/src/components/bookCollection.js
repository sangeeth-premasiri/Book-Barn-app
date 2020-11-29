import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import firebase from '../configurations/fbconfig';

const db = firebase.firestore();


class bookCollection extends Component {

    state = {
        bookInformation: []
    }
    componentDidMount() {

        db.collection('Books Information').get().then(data => {
            data.docs.forEach(doc => {
                this.setState({
                    bookInformation: [...this.state.bookInformation, doc.data()]
                })
                // console.log('bookCollection',doc.data());
            })
        })
    }
    render() {
        return (
            <div className="collection-section" id="2">
                <h2 style={{ color: "white", marginLeft: "10px" }}>Checkout our collection here</h2>
               
                <Table striped bordered hover variant="default" style={{ backgroundColor: "#A6764E", marginTop: "0", paddingTop: "0", }} >
                    <thead>
                    <tr>
                         <th className="table-row">Book Name</th>
                         <th className="table-row">Author</th>
                         <th className="table-row">Price</th>
                         <th className="table-row">ISBN</th>
                        </tr> 
                    </thead>
                </Table>   
                

                    {
                        this.state.bookInformation.length ? (
                            this.state.bookInformation.map(item => {
                                return (
                                    <div>
                                        <Table>
                                        <tbody style={{ color: "white" }}>
                                            <tr>
                                                <td className="table-row-td">{item.BookName}</td>
                                                <td className="table-row-td">{item.Author}</td>
                                                <td className="table-row-td">{item.Price}</td>
                                                <td className="table-row-td">{item.ISBN}</td>
                                            </tr>

                                        </tbody>
                                        </Table>
                                       
                                    </div>
                            )
                        })
                    ) : (
                <p>Loading</p>
                        )
                }
                

            </div>
            
        )
    }
}

export default bookCollection
