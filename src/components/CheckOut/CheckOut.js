import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData/fakeData';

const CheckOut = () => {
    const [checkout, setCheckout] = useState([])
    console.log(checkout);
    const {id} = useParams();
    console.log(id)

    useEffect(()=>{
        fetch(`http://localhost:3300/products/${id}`)
        .then(res => res.json())
        .then(data => setCheckout(data));
    },[])

    // const itemsOrder = checkout.find(pd => pd._id === id)
    
    // console.log(itemsOrder); 
    // const handleAddProduct = () =>{
    //     fetch('http://localhost:3300/addProduct',{
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(fakeData)
            
    //     })
    // }
    return (
        <div>
            <h2> id: {id}</h2>
            <h4 > this is just a simple project</h4>
            {
                checkout.map(check => <li>price: {check.price} name: {check.name}</li>)
            }
            {/* <button onClick={handleAddProduct}>Add</button> */}
        </div>
    );
};

export default CheckOut;