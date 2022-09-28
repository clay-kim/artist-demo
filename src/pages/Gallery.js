import React, { useState, useEffect } from 'react'
import './Gallery.css'
import axios from 'axios';
import CardArt from '../components/CardArt';
import Modal from 'react-bootstrap/Modal';
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';



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
                    <button type="button" class="btn-close" aria-label="Close" onClick={handleClose}></button>
                </ModalHeader>

                <ModalBody className="gallery-show-grid">
                    <Container className='gallery-show-grid-container'>
                        <Row>
                            <Col xs={12} lg={8}>
                                <img src={popUp.img} alt="img" />
                            </Col>
                            <Col xs={12} lg={4}>
                                <h2>{popUp.title}</h2>
                                <h4>{popUp.year}</h4>
                                <h4>{popUp.description}</h4>
                                <Link to='/store' style={{textDecoration: 'none'}}>
                                <h4 className='available'>{popUp.available}</h4>
                                </Link>
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
                    return <div class="col" onClick={(e) => {popOne(item); handleShow(); }} >
                        <CardArt key={`key-${item.id}`}
                            img={item.img}
                        />
                       
                    </div>
                })}
                </div>
            </div>
        </div>
    )

}

export default Gallery