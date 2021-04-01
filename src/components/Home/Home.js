import React from 'react';
import { Row } from 'react-bootstrap';
import fakeData from '../../fakeData/fakeData';
import FruitsDetails from '../FruitsDetails/FruitsDetails';

const Home = () => {
    return (
        <div>
            <Row>
                {
                    fakeData.map(fruits => <FruitsDetails key={fruits.id} fruits={fruits}></FruitsDetails>)
                }
            </Row>
        </div>
    );
};

export default Home;