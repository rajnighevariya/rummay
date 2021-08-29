import React from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'

export default function cards() {
    return (
        <Container fluid style={{
            background: " #1b1b1b url(../image/pattern_1.png) left top repeat",
        }}>
            <Container >
                <Row className="py-5">
                    <Col sm>
                        <Card >
                            <Card.Img variant="top" src="./image/download.png" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm>
                        <Card >
                            <Card.Img variant="top" src="./image/images.png" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm>
                        <Card >
                            <Card.Img variant="top" src="./image/images.png" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>

    )
}
