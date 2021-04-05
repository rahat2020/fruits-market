import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import FruitsDetails from '../FruitsDetails/FruitsDetails';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Home.css';
const Home = () => {
    const [item, setItem] = useState({})
    const [spinner, setSpinner] = useState(true)
    useEffect(() => {
        const url = `http://localhost:3300/products`;
        fetch(url)
            .then(res => res.json())
            .then(data =>
                {setItem(data)
                setSpinner(false)
                }
            )

    }, [])
    console.log(item);
    return (
        <div>
            
            <Row>
            {
                item.length === 0 && <div className="d-flex justify-content-center align-items-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
                {
                    item.length > 0 && item.map(items => <FruitsDetails items={items} key={items._id}></FruitsDetails>)
                }
            </Row>


        </div>
    );
};

export default Home;