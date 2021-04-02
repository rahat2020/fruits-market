import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import './FruitsDetails.css';
import { Link } from 'react-router-dom';

const FruitsDetails = (props) => {
    const { name, imgurl, id, price, description } = props.fruits
    console.log(props.fruits)
    return (
        <div>
            <Col style={{ marginLeft: '50px' }}>
                <Card style={{ width: '18rem', margin: '30px' }}>
                    <Card.Img className="style" variant="top" src={imgurl} />
                    <Card.Body>
                        <div className="text-center ">
                            <Card.Title>{name}</Card.Title>

                            <Card.Text>
                                <h5> ${price}</h5>
                                <p> {description}</p>
                            </Card.Text>
                        </div>
                        <div className="text-center">
                           
                             <Link to={`/fruits/${id}`}><Button className="text-center btn_style" variant="primary">Buy now</Button></Link>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default FruitsDetails;