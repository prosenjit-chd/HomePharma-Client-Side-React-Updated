import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Col, ListGroup, InputGroup, FormControl } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    // Use USe State here 
    const [service, setService] = useState([]);

    // Use Use Effect here 
    useEffect(() => {
        fetch('./medicine.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    return (
        // Side Bar here 
    <Container style={{ "marginTop": "80px" }}>
        <Row className="g-4">
            <Col xs="12" md="2" lg="3" className="side-bar">

            <ListGroup>
            <InputGroup className="mb-3">
            <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Search Type"
            />
             </InputGroup>
                <ListGroup.Item>Anxiety</ListGroup.Item>
                <ListGroup.Item>Cough and Cold</ListGroup.Item>
                <ListGroup.Item>Diabetes</ListGroup.Item>
                <ListGroup.Item>Gastro</ListGroup.Item>
                <ListGroup.Item>Heart Failure</ListGroup.Item>
                <ListGroup.Item>Allergies</ListGroup.Item>
                <ListGroup.Item>Asthma</ListGroup.Item>
                <ListGroup.Item>Cancer</ListGroup.Item>
                <ListGroup.Item>GRE Pain</ListGroup.Item>
                <ListGroup.Item>Constipation</ListGroup.Item>
                <ListGroup.Item>Diarrhoea</ListGroup.Item>
                <ListGroup.Item>Fever</ListGroup.Item>
                <ListGroup.Item>Kidney</ListGroup.Item>
                <ListGroup.Item>Back Pian</ListGroup.Item>
                <ListGroup.Item>Joint Break</ListGroup.Item>
                <ListGroup.Item>Rectum Canal</ListGroup.Item>
                <ListGroup.Item>Ankailogy spondalaties</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>More Fever</ListGroup.Item>
            </ListGroup>
            </Col>
            {/* Data Maping here  */}
            <Col xs="12" md="2" lg="9">
            <h2 className="t-color">See All Medicines </h2>
                <Row xs={1} md={2} lg={2} className= "g-5 mb-4"> 
                    {
                        service.map(course => <Service key={course.id} course={course} />)
                    }
                </Row>
            </Col>
        </Row>
    </Container>
    );
};

export default Services;