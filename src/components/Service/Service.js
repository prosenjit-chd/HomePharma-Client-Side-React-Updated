import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { CartDashFill, ClockFill, EnvelopeFill, EyeFill } from 'react-bootstrap-icons';
import { useHistory } from 'react-router';
import './Service.css';

// use props 
const Service = (props) => {
    // use distructure here 
    const { id, title, price, deatails, img, meal, catagory } = props.course;

    // use use History function 
    const history = useHistory();

    // use handaler 
    const handleDetailView = () => {
        history.push(`/service/${id}`)
    }
    // use bootstrap component 
    return (
        <Col>
            <Card className="h-100 cart-font">
                <Card.Img variant="top" src={img} className="card-img"/>
                <Card.Body>
                        <Card.Title className="card-title" style={{color: "#e6520e"}}>{title}</Card.Title>
                        <Card.Text className="cart-text text-success">
                            <b className="text-success">Unit Price:  </b> {price} BDT
                        </Card.Text>
                        <Card.Text className="text-dark">
                            {deatails.slice(0, 130)}
                        </Card.Text>
                        <div className="card-details">
                        <ClockFill />  <span className="card-md-icon-1">{meal}</span><EnvelopeFill /><b> Catagory: </b> {catagory}
                        </div>
                </Card.Body>
                <Card.Footer>                       
                        <Button 
                        // Workable button this is
                            className="float-end" 
                            variant="info" 
                            onClick={handleDetailView}
                        ><EyeFill />  More Details</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Service;