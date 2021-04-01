import React from 'react';
import fakeData from '../../fakeData/fakeData';
// import { useParams } from 'react-router';

const CheckOut = () => {
    // const {fruits} = useParams()
    const handleAddProduct = () =>{
        fetch('http://localhost:3300/addProduct',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(fakeData)
            
        })
    }
    return (
        <div>
            this is a checkOut page 
            <button onClick={handleAddProduct}>Add</button>
        </div>
    );
};

export default CheckOut;