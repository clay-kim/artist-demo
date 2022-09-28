import React, { useEffect, useState, useRef } from 'react'
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
import emailjs from '@emailjs/browser';

function Store({ products, setProducts }) {

    useEffect(() => {
        axios.get("/data/pieces.json").then((data) => {
            setProducts(data.data.pieces);
        });
    }, [setProducts]);
    console.log("this is from Gallery page:");


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

    //Modal:Art Inquiry form 
    const [userEmail, setUserEmail] = useState("");
    const [userMessage, setUserMessage] = useState("");
    const [show3, setShow3] = useState(false);

    const handleEmail = (e) => {
        setUserEmail(e.target.value);
    }
    const handleMessage = (e) => {
        setUserMessage(e.target.value);
    }
    const handleItem = (e) => {
        setUserMessage(e.target.value);
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pkwhcsu', 'template_6kk4wze', form.current, 'NNsAiQ8PXH7vXzF9y')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setUserEmail('');
        setUserMessage('');
    };


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
                <Modal className="modal"
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
                        <Container className='container'>
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
                                        <button className="buyBtn" onClick={(e) => {handleShow2();}}>Acquire this Artwork</button>
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
                    <Modal.Title>Inquiry</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form ref={form} onSubmit={sendEmail}>


                        <div className="form-group-item">
                            <img src={popUp.img} alt="item" width="100px"></img>
                            <div>
                            <label for="user_email">Item:   {popUp.title}</label>
                            </div>
                        </div>
                        <br></br>
                            <input type = "hidden" class="form-control" id="exampleFormControlInput1"
                            value = {popUp.title}
                            name="user_item"
                            onChange={handleItem}/>

                        <div class="form-group">
                            <label for="user_email">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1"
                                placeholder="name@example.com"
                                value={userEmail}
                                name="user_email"
                                onChange={handleEmail} />
                        </div>

                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                placeholder="Ask for anything!"
                                name="message"
                                value={userMessage}
                                onChange={handleMessage}
                            />
                        </div>
                        <button type="submit" className="submit-button" onClick={()=>{handleClose2(); handleClose();}}>Submit</button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>

            </div>




        </div>
    )

}

export default Store
