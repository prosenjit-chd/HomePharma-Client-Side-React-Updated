import React from 'react';
import { Card, Button, Col, Row, Container } from 'react-bootstrap';
// External CSS style added here 
import './About.css'

const About = () => {
    return (
        <div className="mt-5">
            {/* This is Card Component form Bootstrap. Here, uses all are bootstrap component  */}
            <Card className="text-center">
                <Card.Img className="mt-5" variant="top" src="https://i.pinimg.com/originals/67/2c/a1/672ca1cc340534742ca116112c625911.jpg" style={{'height': '480px'}} />
                <Card.Header>About Us</Card.Header>
                <Card.Body>
                    <Card.Title style={{color: "#e6520e"}}>Home Pharma History</Card.Title>
                    <Card.Text className="w-75 mx-auto text-dark">
                    Pharmacy is the clinical health science that links medical science with chemistry and it is charged with the discovery, production, disposal, safe and effective use, and control of medications and drugs. The practice of pharmacy requires excellent knowledge of drugs, their mechanism of action, side effects, interactions, mobility and toxicity. At the same time, it requires knowledge of treatment and understanding of the pathological process. Some specialties of pharmacists, such as that of clinical pharmacists, require other skills, e.g. knowledge about the acquisition and evaluation of physical and laboratory data. [1]

                    The scope of pharmacy practice includes more traditional roles such as compounding and dispensing of medications, and it also includes more modern services related to health care, including clinical services, reviewing medications for safety and efficacy, and providing drug information. Pharmacists, therefore, are the experts on drug therapy and are the primary health professionals who optimize the use of medication for the benefit of the patients.
                    </Card.Text>
                    {/* In Active button usees here. It is not clickable.  */}
                    <Button variant="danger">More</Button>
                </Card.Body>
                <Card.Footer className="text-muted">Last Updated 2 days ago</Card.Footer>
            </Card>
            {/* Data Maping here  */}
            <Container style={{ "marginTop": "40px" }}>
            <Col xs="12" md="12" lg="12">
                <h2 className="t-color">BOARD OF DIRECTORS</h2>
                <Row xs={1} md={2} lg={2} className= "g-4 mb-4"> 
                    <Card className="h-100 cart-font">
                        <Card.Img variant="top" src="https://pbs.twimg.com/media/FB9ii7LUUAEBlhd?format=jpg&name=large" />
                        <Card.Body>
                            <Card.Title className="text-danger">Prosenjit Chowdhury</Card.Title>
                            <Card.Text className="text-dark">
                            I have hands-on professionalism in designing software applications that meet the technical requirements and functionality of the clients. I can also make configuration changes, write codes to match the functions specified by the senior programmer and execute tests to ensure functionality
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="h-100 cart-font">
                        <Card.Img variant="top" src="https://pbs.twimg.com/media/F06Eu2AaEAApK66?format=jpg&name=large" />
                        <Card.Body>
                            <Card.Title className="text-danger">Prodip Chowdhury</Card.Title>
                            <Card.Text className="text-dark">
                            Esteemed Shareholders, my colleagues on the Board, distinguished ladies and gentlemen. Once again, a very warm welcome and good afternoon to all of you. We hope you and your families are healthy and safe. On behalf of all the GE T&D board members and the GE team, I would like to welcome you.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Col>
            </Container>
            {/* Data Maping here  */}
            <Container style={{ "marginTop": "60px" }}>
            <Col xs="12" md="12" lg="12">
                <h2 className="t-color">Achivements</h2>
                <Row xs={1} md={2} lg={3} className= "g-2 mb-4"> 
                    <Card className="h-100 cart-font">
                        <Card.Img variant="top" src="https://pbs.twimg.com/media/FCCEvHtUUAQi5Vp?format=jpg&name=900x900" />
                        <Card.Body>
                            <Card.Title className="text-danger">Best Pharmecy of 2020</Card.Title>
                            <Card.Text className="text-dark">
                            The qualification required is 10+2 with Physics and Chemistry as a compulsory subjects with any one of the Mathematics or Biology subject. Note: D. Pharm (Diploma of Pharmacy) holders are eligible for admission (lateral entry). you can be confident that your certification will maintain its value. We are cenceer about our customer. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="h-100 cart-font">
                        <Card.Img variant="top" src="https://i0.wp.com/medstorebasehor.com/wp-content/uploads/2020/08/Screen-Shot-2020-08-05-at-10.17.27-AM-e1596737948833-1024x787.jpeg?resize=768%2C590&ssl=1" />
                        <Card.Body>
                            <Card.Title className="text-danger">Auality Assurance Certificate</Card.Title>
                            <Card.Text className="text-dark">
                            ASQ Certifications are recognized as a mark of quality excellence in many industries. They are designed to help you advance your career, improve your organization, and prepare you to be a more accomplished and effective quality-focused professional.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="h-100 cart-font">
                        <Card.Img variant="top" src="https://image.slidesharecdn.com/b9758055-8cd2-4164-a8ea-ae8703afcba4-150317195630-conversion-gate01/95/ptcb-certificate-1-638.jpg?cb=1426622200" />
                        <Card.Body>
                            <Card.Title className="text-danger">Certificate of Safety and Reliability</Card.Title>
                            <Card.Text className="text-dark">
                                IL-check is made every 48 month and include detailed inspection and
                                service of structure, wings etc. as well as very extensive tests and
                                service carried out on electronics, hydraulics etc. Recommended
                                improvements are also done. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Col>
            </Container>
        </div>
    );
};

export default About;