import React from "react";
import {Container, Row} from 'react-bootstrap';

function Success() {
    return (
        <Container className="p-5">
            <Row className="justify-content-center">
                <h3>You have sucessfully made a purchase!</h3>
            </Row>
        </Container>
    )
}

export default Success;