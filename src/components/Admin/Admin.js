import React, { useEffect, useState } from 'react';
import { Image, Table, Button } from 'react-bootstrap';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './Admin.css';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link, useParams } from 'react-router-dom';
const Admin = () => {
    const [deleteItems, setDeleteItems] = useState([])
    // const [admin, setAdmin] = useState([])
    const { _id } = useParams();
    // console.log(_id)
    useEffect(() => {
        const url = `https://sleepy-lake-14555.herokuapp.com/products`;
        fetch(url)
            .then(res => res.json())
            .then(data =>
                setDeleteItems(data)


            )

    }, [])


    const handleDeleteItems = (id) => {

        fetch(`https://sleepy-lake-14555.herokuapp.com/deleteItems/${id}`, {
            method: 'DELETE'
        })
            .then(res => {
                if (res) {
                    alert('delted successfully');
                    console.log(res)
                }
            })

        console.log('button is clcked')
    }


    return (
        <div>
            <h3 style={{ margin: 'auto', textAlign: 'center' }}>this is admin page</h3>
            <div>
                <ProSidebar>
                    <Menu iconShape="square">
                        <MenuItem> Dashboard</MenuItem>

                        <Link to={`/addProducts/${_id}`}><MenuItem>+ addProduct</MenuItem></Link>
                        <MenuItem>Edit product</MenuItem>
                        <MenuItem>Manage Product</MenuItem>

                    </Menu>
                </ProSidebar>


            </div>
            <div style={{ marginTop:'-168px', marginLeft: '100px' }}>
                <Table striped bordered hover style={{ width: "60%", margin: 'auto' }}>
                    <thead style={{ margin: 'auto', textAlign: 'center' }}>
                        <tr>
                            <th>#</th>
                            <th>items Name</th>
                            <th>items price</th>
                            <th>images</th>
                            <th>Dlt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            deleteItems.map((itemOrder) => (
                                <tr>
                                    <td>1</td>
                                    <td>{itemOrder.itemName}</td>
                                    <td>{itemOrder.itemPrice}</td>
                                    <td ><Image style={{ width: '90px' }} src={itemOrder.imgURL} rounded /></td>
                                    <td><Button style={{ width: '90px', }} onClick={() => handleDeleteItems(itemOrder._id)} variant="primary">Delete </Button></td>

                                </tr>
                            ))
                        }

                    </tbody>
                </Table>

            </div>
        </div>
    );
};

export default Admin;