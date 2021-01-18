import React, { Component } from 'react';
import { Container } from "reactstrap";

class skill extends Component {
    render() {
        return (
            <div className="skill">
                <Container>
                    <h2>Skill Programming</h2>
                    <div className="language">
                        <p>
                            {/* <i class="fas fa-circle html"></i> */}
                            <p><span className="html">HTML<i class="fab fa-html5"></i></span></p>
                            {/* <i class="fas fa-circle css"></i> */}
                            <p><span className="css">CSS<i class="fab fa-css3-alt"></i></span></p>
                            {/* <i class="fas fa-circle sass"></i> */}
                            <p><span className="sass">SASS<i class="fab fa-sass"></i></span></p>
                            {/* <i class="fas fa-circle sass"></i> */}
                            <p><span className="bootstrap">BOOTSTRAP<i class="fab fa-bootstrap"></i></span></p>
                            {/* <i class="fas fa-circle js"></i> */}
                            <p><span className="js">JAVASCRIPT<i class="fab fa-js"></i></span></p>
                            {/* <i class="fas fa-circle css"></i> */}
                            <p><span className="react">REACTJS<i class="fab fa-react"></i></span></p>
                        </p>
                    </div>
                </Container>
            </div>
        );
    }
}

export default skill;