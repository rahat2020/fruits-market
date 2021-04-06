import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import FruitsDetails from '../FruitsDetails/FruitsDetails';
// import CircularProgress from '@material-ui/core/CircularProgress';
import './Home.css';
const Home = () => {
    const [item, setItem] = useState({})
    // const [spinner, setSpinner] = useState(true)
    useEffect(() => {
        const url = `https://sleepy-lake-14555.herokuapp.com/products`;
        fetch(url)
            .then(res => res.json())
            .then(data =>
                setItem(data))

    }, [])
    console.log(item);
    return (
        <div>
            
            <Row>
        
                {
                    item.length > 0 ? item.map(items => <FruitsDetails items={items} key={items._id}></FruitsDetails>):
                    <div className="d-flex justify-content-center col-md-12 ">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">loading...</span>
                    </div>
                </div>
                }
            </Row>


        </div>
    );
};

export default Home;