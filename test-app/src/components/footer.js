import React, { Component } from 'react'
import { Container, Row, Col} from 'react-bootstrap';

class footer extends Component {
    render() {
        return (
            <div className="footer" id="5">
                <Container fluid>
                    <Row >
                        <Col className="footer-items"><h4>VISIT US</h4><br /><address>497 Evergreen Rd. Roseville. CA 95673<br />+44 345 678 903</address></Col>
                        <Col className="footer-items"><h4>ONLINE SUPPORT</h4><br /><a href="mailto:support.bookbarn@gmail.com"><strong>SUPPORT.BOOKBARN@GMAIL.COM</strong></a></Col>
                        <Col className="footer-items-icons">
                            <Row>
                                <Col><a href="https://www.twitter.com/book-barn"  target="_blank" rel="noreferrer" aria-labelledby="twitter-link"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                </Col>
                                <Col><a href="https://www.facebook.com/book-barn" target="_blank" rel="noreferrer" aria-labelledby="facbook-link"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                </Col>
                            </Row>
                       </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default  footer
