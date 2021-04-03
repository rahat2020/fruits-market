import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
// import fakeData from '../../fakeData/fakeData';
import FruitsDetails from '../FruitsDetails/FruitsDetails';

const Home = () => {
    const [item, setItem] = useState({})

    useEffect(()=>{
        const url = `http://localhost:3300/products`;
        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data))

    },[])
    console.log(item);
    return (
        <div>
            <h2 style={{margin:'auto', textAlign:'center', fontFamily:'Roboto',textDecoration:'underline', color:'#007BCE', fontWeight:'bolder'}}>Fruits list here</h2>
         <Row>
             {
                item.length > 0 && item.map(items => <FruitsDetails items={items} key={items._id}></FruitsDetails>)
             }
         </Row>
        </div>
    );
};

export default Home;