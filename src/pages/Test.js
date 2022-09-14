import React, { useEffect, useState, useParams } from 'react'
import "./Test.css"
import axios from 'axios'
import CardArt from '../components/CardArt';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import logo from '../images/main_painting.jpg';



function Test({ products, setProducts }) {


  useEffect(() => {
    axios.get("/data/products.json").then((data) => {
      setProducts(data.data.products);
    });
  }, [setProducts]);
  console.log("this is from Test page:");


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  


  //------testing-----
  const [popUp, setPopUp] = useState([]);

  const popOne = (item) => {
    
    setPopUp([item])
    console.log("PopUp Image Info:", item); 
    
    //popup image info showing
    console.log("PopUp:" ,[popUp].title);
  }




  return (

    <div className='gallery-container'>
        <h1>Test</h1>
        <div className="content">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">


                {products.map((item) => {
                    return <div class="col" >
                        <CardArt key={`key-${item.id}`}
                            img={item.img}
                        /> <button className="btn btn-primary" onClick={(e) =>{popOne(item); handleShow(); }}>Button</button>

                        
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
                            <h2>Title: </h2>
                            <h4>Descriptions:{popUp.id}</h4>
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

export default Test
