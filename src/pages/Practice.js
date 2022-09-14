import React, { useState, useEffect } from 'react'
import './Practice.css'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../components/Card';
import Modal from 'react-bootstrap/Modal';
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';




function Practice({ products, setProducts }) {

    useEffect(() => {
        axios.get("/data/products.json").then((data) => {
            setProducts(data.data.products);

        });
    }, [setProducts]);
    console.log("Practice Page!!:");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div className='practice-container'>
            <h1>Practice Page</h1>
            <div className="content">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {products.map((product) => {
                        return <div class="col"> <Card product={product}
                            img={product.img}
                            title={product.title}
                            description={product.description}
                        />
                        </div>
                    })}
                </div>

            </div>

            <div className="modal-container">
                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    size="xl"
                    aria-labelledby="example-custom-modal-styling-title"
                    centered={true}

                >

                    <ModalHeader>
                        <ModalTitle>Art Detail</ModalTitle>
                    </ModalHeader>

                    <ModalBody className="show-grid">
                        <Container>
                            <Row>
                                <Col xs={12} lg={9}>
                                    <img src={products.img} alt="logo" />
                                </Col>
                                <Col xs={6} lg={3}>
                                    <h2>Title of Painting</h2>
                                    <h4>Descriptions:</h4>
                                    <p> more detail..</p>
                                </Col>
                            </Row>
                        </Container>


                    </ModalBody>
                    <ModalFooter>여기엔 버튼 <button onClick={handleClose}>Cancel</button> </ModalFooter>
                </Modal>
            </div>

        </div>


    )

}


export default Practice