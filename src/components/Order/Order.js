import React, { useEffect, useState, useContext } from 'react';
// import { useParams } from 'react-router';
import { UserContext } from '../../App';
import { Image, Table, Button } from 'react-bootstrap';


const Order = () => {
    const [order, setOrder] = useState([])
    console.log(order);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // alert("Your order is confirmed!!")
    // const [_id] = useParams


    useEffect(() => {
        fetch('http://localhost:3300/ordered?email=' + loggedInUser.email)
            .then(response => response.json())
            .then(data => setOrder(data))

    }, [])

    return (
        <div>
            <div style={{margin:'auto', textAlign:'center'}}>
                <h3>You order is confirmed!!!</h3>
                <strong>you have ordered: {order.length} items</strong>
            </div>
            <br/>
           
               
                    {/* //  <li>{itemOrder.itemName}</li> */}
                    <Table striped bordered hover style={{ width: "60%", margin: 'auto' }}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>items Name</th>
                                <th>items price</th>
                                <th>images</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                               order.map((itemOrder)=>(
                                <tr>
                                <td>1</td>
                                <td>{itemOrder.product?.itemName}</td>
                                <td>{itemOrder.product?.itemPrice}</td>
                                <td className="imgStyle"><Image src={itemOrder.product?.imgURL} rounded /></td>
                                </tr>
                               ))
                           }
                           
                        </tbody>
                    </Table>
               
        </div>
    );
};

export default Order;