import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

import Badger from './Badger';

function FindMyBadgers() {

    const [badgers, setBadgers] = useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api")
            .then(res => res.json())
            .then((badgerData) => {
                const newName = badgerData.results[0].name.first + ' ' + badgerData.results[0].name.last;
                const newEmail = badgerData.results[0].email;
                setBadgers([
                    {
                        name: newName,
                        email: newEmail
                    }
                ])
            })
    }, [])

    function addBadger() {
        fetch("https://randomuser.me/api")
            .then(res => res.json())
            .then((badgerData) => {
                const newName = badgerData.results[0].name.first + ' ' + badgerData.results[0].name.last;
                const newEmail = badgerData.results[0].email;
                setBadgers([...badgers,
                {
                    name: newName,
                    email: newEmail
                }
                ])
            })
    }

    return <div>
        <h1>Find My Badgers</h1>
        <Button onClick={addBadger}>Add Badger</Button>
        <Container>
            <Row>
                {
                    badgers.map((badger, i) => {
                        return <Col key={i} xs={4}>
                            <Badger name={badger.name} email={badger.email} />
                        </Col>
                    })
                }
            </Row>
        </Container>
    </div>
}

export default FindMyBadgers;
