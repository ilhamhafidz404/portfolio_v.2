import React, { Component } from 'react';
import { Container, Row, Col, Button  } from 'reactstrap';

class project extends Component {
    constructor(){
        super()

        this.state= {
            namaProject1: "My Portfolio v.1",
            deskripsiProject1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, voluptates architecto deserunt quasi voluptatibus id, dicta sit accusamus nulla suscipit fugit corrupti ea debitis, reiciendis saepe? Exercitationem praesentium quisquam perspiciatis.",
            namaProject2: "Galuh Printing Web",
            deskripsiProject2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, voluptates architecto deserunt quasi voluptatibus id, dicta sit accusamus nulla suscipit fugit corrupti ea debitis, reiciendis saepe? Exercitationem praesentium quisquam perspiciatis.",
            namaProject3: "Lorem Ipsum",
            deskripsiProject3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, voluptates architecto deserunt quasi voluptatibus id,",
        }
    }

    render() {
        return (
            <div className="project">
                <Container>
                    <h2>Project Terbaru</h2>
                    <Row>
                        <Col md="1"></Col>
                        <Col md="10">
                            <div className="examp project1">
                                <h3>{this.state.namaProject1}</h3>
                                <p>{this.state.deskripsiProject1}</p>
                                <a href="">Lihat Project <span><i class="fas fa-arrow-right"></i></span></a>
                            </div>
                        </Col>
                        <Col md="1"></Col>
                        <Col md="1"></Col>
                        <Col md="5">
                            <div className="examp project2">
                                <h3>{this.state.namaProject2}</h3>
                                <p>{this.state.deskripsiProject2}</p>
                                <a href="" className="project2">Lihat Project <span><i class="fas fa-arrow-right"></i></span></a>
                            </div>
                        </Col>
                        <Col md="5">
                            <div className="examp project3">
                                <h3>{this.state.namaProject3}</h3>
                                <p>{this.state.deskripsiProject3}</p>
                                <a href="" className="project3">Lihat Project <span><i class="fas fa-arrow-right"></i></span></a>
                            </div>
                        </Col>
                        <Col md="1"></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default project;