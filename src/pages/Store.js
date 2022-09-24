import React, { useEffect, useState } from 'react'
import "./Store.css"
import axios from 'axios'
import Card from '../components/Card';
import Modal from 'react-bootstrap/Modal';
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Store({ products, setProducts }) {

    useEffect(() => {
        axios.get("/data/pieces.json").then((data) => {
            setProducts(data.data.pieces);
        });
    }, [setProducts]);
    console.log("this is from Test page:");


    //Modal window for detail view
    const [show, setShow] = useState(false);
    const handleClose = () => {handleTab(0); setShow(false)};
    const handleShow = () => setShow(true);
    const [popUp, setPopUp] = useState([]);
    const [state, setState] = useState(0);

    const popOne = (item) => {

        setPopUp(item);
        console.log("Buying Image Info:", item);
    }

    const handleTab = (index) => {
        console.log("Tab:", index);
        setState(index);
    }


    const [show2, setShow2] = useState(false);

    // const handleClose = () => setShow(false);
    const handleShow2 = () => setShow2(true);
    const handleClose2 = () => setShow2(false);


    return (
        <div className='store-container'>
            <h1>Arts for Sale</h1>

            <div className="content">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {products.map((item) => {
                        return <div class="col" onClick={(e) => { popOne(item); handleShow(); }} key={`key-${item.id}`}>
                            <Card className="card-box"
                                img={item.img}
                                title={item.title}
                                description={item.description}
                                price={item.price}
                            />
                            <div className='centered'>

                            </div>
                        </div>
                    })}
                </div>
            </div>


            <div className="modal-container">
                <Modal
                    show={show}
                    onHide={() => {handleTab(0); setShow(false)}}
                    size="xl"
                    aria-labelledby="example-custom-modal-styling-title"
                    centered={true}
                    products={popUp}
                >

                    <ModalHeader className='modal-header'>
                        <ModalTitle>Art for Sale</ModalTitle>
                        <button type="button" class="btn-close" aria-label="Close" onClick={handleClose}></button>
                    </ModalHeader>

                    <ModalBody className="show-grid">
                        <Container className='modal-container'>
                            <div className="modal-content">

                                <div className="details">
                                    <div className="big-pic">
                                        <img src={popUp.src?.[state]} />
                                    </div>
                                    <div className="box">
                                        <div className="row">
                                            <h2>{popUp.title}</h2>
                                            <span>$ {popUp.price}</span>
                                        </div>
                                        <p>{popUp.year}</p>
                                        <p>{popUp.description}</p>

                                        <div className="thumb">
                                            {popUp.src?.map((img, index) => (
                                                <img src={img} alt="pic" key={index}
                                                    onClick={() => handleTab(index)} />
                                            ))}
                                        </div>
                                        <button className="buyBtn" onClick={(e) => {handleShow2();}}>Buy</button>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </ModalBody>
                </Modal>
            </div>


            <div className="modal-form">                                
                <Modal 
                show={show2} onHide={handleClose2}
                centered={true}
                products={popUp}
                >

                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose2}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose2}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>




        </div>
    )

}

export default Store
