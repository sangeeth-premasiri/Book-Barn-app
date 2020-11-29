import React, { Component } from 'react'
import { Jumbotron,Button } from 'react-bootstrap';

class landingSection extends Component {
    render() {
        return (
            <div>
                <Jumbotron className="main-section" id="1">
                    <div className="main-text">
                    <h1>READ THE WAY YOU LIKE IT</h1>
                    <p className="para">
                      We have all kind of books that you want
                    </p>
                    <p>
                        <Button href="#2" variant="default" style={{ color: "white", background: "#A6764E", size: "lg", width: "218px", height: "48px", display: "inline-block", textAlign: "center" }}>CHECK NOW</Button>
                    </p>
                    </div>
                </Jumbotron>
            </div>
        )
    }
}

export default landingSection
