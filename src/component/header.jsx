import React, { Component } from 'react';
import {Container } from 'reactstrap';

class header extends Component {
    render() {
        return (
            <header>
                <Container>
                    <div className="text">
                        <h1>Hallo saya <span>ILHAM HAFIDZ</span>,<br/> seorang frontend developer amatiran</h1>
                        <p>Saya meng-khususkan diri untuk pembuatan web statis dengan fully responsive. Saya berbagi tentang keseharian saya di <a className="instagram cta">Instagram</a>, menyimpan project di <a className="github cta">Github</a>, dan mengambil vektor <a className="freepik cta">Freepik</a>.</p>
                    </div>
                </Container>
            </header>
        );
    }
}

export default header;