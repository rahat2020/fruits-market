import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './AddProducts.css';
// import { useForm } from "react-hook-form";
import axios from 'axios';
import { useLocation } from 'react-router';

const AddProducts = () => {
    const location = useLocation
    // const { register, handleSubmit, watch, errors } = useForm();
    //  const [imgURL, setImgURL] = useState(null)
    const [items, setItems] = useState({
        itemName: '',
        itemPrice: '',
        imgURL: '',
    })
    const handleChange = (event) => {
        console.log(event.target.name, event.target.value);
        const newData = { ...items }
        newData[event.target.name] = event.target.value;
        setItems(newData);

    }
    const handleImgUpload = event => {
        console.log(event.target.files)
        const imgData = new FormData();
        imgData.set('key', 'decd392034cfcc5e70d8418c3cdfd545');
        imgData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(function (response) {
                const imgData = { ...items }
                imgData.imgURL = response.data.data.display_url
                setItems(imgData)
                // setImgURL(response.data.data.display_url);
                alert("image added to the database");
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleAddProduct = e => {
        e.preventDefault(true);
        if (items.imgURL !== '') {
            console.log(items)
            const url = `http://localhost:3300/addProduct`
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
        // console.log(e,'clicked')
        // const productData = {
        //     name: e.name,
        //     imgURL: imgURL,
        //     price:e.price,
        // }
        // console.log(productData);
        // const url =`http://localhost:3300/addProduct`;

        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(productData)
        // })
        // .then(res => console.log('server side response', res))

    };



    return (
        // <form onSubmit={handleSubmit(onSubmit)}>
        //     <br />
        //     <input {...register("example")} placeholder="items name" ref={register} name="name" />
        //     <br />
        //     <input {...register("exampleRequired", { required: true })} ref={register} placeholder="items price" name="price" />
        //     <br />
        //     <input type="file" onChange={handleImgUpload} />
        //     <br />
        //     <br />
        //     <input type="submit" />
        // </form>

        <Form style={{ width: '600px', margin: 'auto' }}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="email" onBlur={handleChange} placeholder="items name" name="itemName" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Product price</Form.Label>
                <Form.Control type="text" onBlur={handleChange} placeholder="items price" name="itemPrice" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="file" onChange={handleImgUpload} />
            </Form.Group>
            {
                items.imgURL !== '' ? <Button variant="primary" type="submit" onClick={handleAddProduct}>
                    AddProduct
                  </Button> : <Button variant="primary" type="submit" onClick={handleAddProduct}>
                    AddProduct
                  </Button>
            }
        </Form>

    );
};

export default AddProducts;