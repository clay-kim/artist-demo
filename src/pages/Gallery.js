import React, { useState, useEffect } from 'react'
import './Gallery.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import CardArt from '../components/CardArt';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';




function Gallery({ products, setProducts }) {

    useEffect(() => {
        axios.get("/data/galleryArts.json").then((data) => {
            setProducts(data.data.products);
        
        });
    }, [setProducts]);
    console.log("Gallery Page!!:", products);

    //Modal window for detail view
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [popUp, setPopUp] = useState([]);

    const popOne = (item) => {

        setPopUp(item)
        console.log("PopUp Image Info:", item);

        //popup image info showing
        console.log("PopUp:", item.title, item.year);
    }
   

    return (

        <div className='gallery-container'>
            <h1>Gallery</h1>
            <div className="modal-container">
            <Modal
                show={show}
                onHide={() => setShow(false)}
                size="xl"
                aria-labelledby="example-custom-modal-styling-title"
                centered={true}
                products={popUp}
            >

                <ModalHeader>
                    <ModalTitle>Art Detail</ModalTitle>
                </ModalHeader>

                <ModalBody className="show-grid">
                    <Container>
                        <Row>
                            <Col xs={12} lg={9}>
                                <img src={popUp.img} alt="img" />
                            </Col>
                            <Col xs={6} lg={3}>
                                <h2>{popUp.title}</h2>
                                <h4>{popUp.year}</h4>
                                <h4>{popUp.description}</h4>
                                <p></p>
                            </Col>
                        </Row>
                    </Container>
                </ModalBody>
                <ModalFooter><button class="button-12" role="button" onClick={handleClose}>Close</button></ModalFooter>
            </Modal>
        </div>

            <div className="content">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {products.map((item) => {
                    return <div class="col" >
                        <CardArt key={`key-${item.id}`}
                            img={item.img}
                        />
                        <div className='centered'>
                        <button class="button-6" role="button" onClick={(e) => {popOne(item); handleShow(); }}>View Detail</button>
                        </div>
                    </div>
                })}
                </div>
            </div>
        </div>
    )

}

export default Gallery