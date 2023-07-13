import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { ArrowBarLeft, CartDashFill } from 'react-bootstrap-icons';
import { useHistory, useParams } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb } from '../../utilities/fakedb';


const ServiceDetails = () => {
    // Use UseParam here 
    const { id } = useParams();
    // Use UseState Here 
    const [service, setService] = useState({});
    const history = useHistory();
    const [services] = useProducts();
    const [cart, setCart] = useCart(services);
    // Data fetch here 
    useEffect(() => {
        fetch('../medicine.json')
            .then(res => res.json())
            .then(data => handleSingleData(data))
    }, []);

    // Find single data using function 
    const handleSingleData = (data) => {
        setService(data.find(d => d.id === id))
    }

    // Single button back function 
    const seeMealHandler = () => {
        history.push('/services');
    }

    const handleAddToCart = (id) => {
        const exists = cart.find(pd => pd.id === id);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.id !== id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, service];
        }
        else {
            service.quantity = 1;
            newCart = [...cart, service];
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(id);

    }
    
    return (
        <div>
            <Container className="text-center alert alert-danger" style={{ "marginTop": "80px" }}>
                <div>
                    <img className="img-fluid mb-3" style={{ "height": "400px", "width": "500px" }} src={service.img} alt="" />
                    <h3 style={{color: "#e6520e"}}>Medicine Name: {service.title}</h3>
                    <h5>Unit Price: {service.price} BDT</h5>
                    <h5>Medicine Type: {service.type}</h5>
                    <p className="w-75 mx-auto text-dark">{service.deatails}</p>
                    <h6 className="w-75 mx-auto">Dosages: {service.dosage}</h6>
                    <h6 className="w-75 mx-auto text-danger"><b>Side Effect: </b>{service.sideeffect}</h6>
                    <div>
                        <Button variant="info" onClick={seeMealHandler}><ArrowBarLeft size={25} /> 
                        See All Medicine</Button>
                        <Button 
                            // Workable button this is
                                className="float-center mx-5" 
                                variant="primary" 
                                onClick={() => handleAddToCart(service.id)}
                            ><CartDashFill/> Add to Cart List</Button>
                    </div>

                </div>
   
        </Container>
        </div>
    );
};

export default ServiceDetails;