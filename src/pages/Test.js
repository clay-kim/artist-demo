import React, { useEffect, useState } from 'react'
import "./Test.css"
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

function Test({ products, setProducts }) {

   

    return (
        <div className='test-container'>
            <h1>SALE SALE SALE</h1>

            <div className="content">
             
            </div>


        </div>
    )

}

export default Test
