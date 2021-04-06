
import React, { useEffect, useState, useContext} from 'react';
import { Image, Table , Button} from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import {UserContext} from '../../App';
// import fakeData from '../../fakeData/fakeData';

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [checkout, setCheckout] = useState([])
    console.log(checkout);
    const { _id } = useParams();
    console.log(_id)

    const handleSubmit = () =>{
        const items = {...loggedInUser, product: checkOutDetails, date: new Date()}
        const url = `https://sleepy-lake-14555.herokuapp.com/itemOrdered`
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(items)
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
            alert('product added successfully')

    }


    useEffect(() => {
        const url = `https://sleepy-lake-14555.herokuapp.com/products`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCheckout(data))

    }, [])
    const checkOutDetails = checkout.find(pd => pd?._id === _id)
    // console.log(checkOutDetails?.itemName)

    return (
        <div style={{width:"60%", margin:'auto'}}>
            <h2 style={{color:'#ddd'}}> id: {_id}</h2>
       <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item Name</th>
                        <th>item price</th>
                        <th>Image</th>
                        <th>checkout</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>{checkOutDetails?.itemName}</td>
                        <td>{checkOutDetails?.itemPrice}</td>
                        <td  className="imgStyle"><Image style={{width:'90px'}}src={checkOutDetails?.imgURL} rounded  /></td>
                        <td> <Link to={`/order/${_id}`}><Button className="height:30px" onClick={handleSubmit} variant="primary">Order now </Button></Link></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default CheckOut;