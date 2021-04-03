import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import './FruitsDetails.css';
import { Link } from 'react-router-dom';

const FruitsDetails = (props) => {
    const { itemName, imgURL, _id, itemPrice } = props.items
    // console.log(props.items)
    return (
        <div>
            <Col style={{ marginLeft: '50px' }}>
                <Card style={{ width: '18rem', margin: '30px' }}>
                    <Card.Img className="style" variant="top" src={imgURL} />
                    <Card.Body>
                        <div className="text-center ">
                            <Card.Title>{itemName}</Card.Title>

                            <div className=" d-flex justify-content-between button-style ">

                                <span><strong>${itemPrice}</strong></span>
                                <Link to={`/checkOut/${_id}`}><Button className="text-center btn_style" variant="primary">Buy now</Button></Link>

                            </div>
                        </div>
                        {/* <div className="text-center"> </div> */}
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default FruitsDetails;