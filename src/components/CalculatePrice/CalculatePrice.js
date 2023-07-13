import React, { useEffect, useState } from 'react';
import { Col, Container, Modal, Row } from 'react-bootstrap';
import { CalendarXFill, CashCoin} from 'react-bootstrap-icons';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import './CalculatePrice.css'

const CalculatePrice = () => {

    const history = useHistory();

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        history.push('/home');
    }
    const handleShow = () => setShow(true);

    const [services] = useProducts();
    const [cart, setCart] = useCart(services);

    const handleRemove = id => {
        const newCart = cart.filter(product => product.id !== id);
        setCart(newCart);
        removeFromDb(id);
        
    }

    const handleProceedToShipping = () => {
        setCart([]);
        clearTheCart();
        handleShow()
        // history.push('/shipping');
    }

    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;

    return (
        <div>
            <Container className="mt-5">
                <Row className="mt-5 pt-4">
                    <Col xs="12" md="9" lg="9">
                        { !cart.length ?
                         <h1 className="text-success text-center mt-5">First, Add Items</h1>
                         :
                            cart.map(m => <div key = {m.id} className="product-list d-flex justify-content-between"> 
                                <div>
                                <h4 className="product-name text-success">{m.title}</h4>
                                <p className="text-dark">Price: {m.price}</p>
                                <p className="text-dark">Quantity: {m.quantity}</p>
                                </div>
                                <div>
                                <button className="btn-log me-5 mt-5" onClick={() => handleRemove(m.id)}> <CalendarXFill/> Remove </button>
                                </div>
                            </div>)
                        }
                    </Col>
                    <Col xs="12" md="3" lg="3">
                    <div className="cart-list">
                        <h3>Order Summary</h3>
                        <h5>Items Ordered: {totalQuantity}</h5>
                        <br />
                        <p  className="text-dark">Total: {total.toFixed(2)} BDT</p>
                        <p className="text-dark">Delivery: {shipping} BDT</p>
                        <p className="text-dark">Tax: {tax.toFixed(2)} BDT</p>
                        <p><b className="text-danger">Grand Total: {grandTotal.toFixed(2)}BDT</b></p>
                        <button onClick={handleProceedToShipping} variant="success" type="submit" className="btn btn-success ms-5" > 
                            <CashCoin/> Confirm

                        </button>
                    </div>
                    </Col>
                </Row>
            </Container>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Thank you Dear Sir/ Madam</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Your, order is successfully placed for delivery.</Modal.Body>
                    <Modal.Footer>
                    <button className="btn btn-primary" onClick={handleClose}>
                        Close
                    </button>
                    </Modal.Footer>
                 </Modal>
        </div>
    );
};

export default CalculatePrice;