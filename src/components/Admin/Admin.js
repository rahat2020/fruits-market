import React, { useEffect } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
const Admin = () => {
    const { _id } = useParams();
    console.log(_id)
    useEffect(()=>{
        fetch('http://localhost:3300/deleteItems')
 
    },[])

    return (
        <div>
            <h3 style={{margin:'auto', textAlign:'center'}}>this is admin page</h3>
            <ProSidebar>
                <Menu iconShape="square">
                    <MenuItem>Dashboard</MenuItem>
                    <SubMenu title="Components" >
                      <Link to={`/addProducts/${_id}`}><MenuItem>+ addProduct</MenuItem></Link>
                        <MenuItem>Edit product</MenuItem>
                        <MenuItem>Manage Product</MenuItem>
                    </SubMenu>
                </Menu>
            </ProSidebar>;

                        {/* <thead>
                            <tr>
                                <th>#</th>
                                <th>items Name</th>
                                <th>items price</th>
                                <th>images</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>{itemOrder.itemName}</td>
                                <td>{itemOrder.itemPrice}</td>
                                <td className="imgStyle"><Image src={itemOrder.imgURL} rounded /></td>
                            </tr>
                           
                        </tbody> */}
        </div>
    );
};

export default Admin;