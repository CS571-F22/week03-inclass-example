import React from 'react';
import { Card } from 'react-bootstrap';



function Badger(props) {
    return <Card>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
    </Card>
}

export default Badger;
