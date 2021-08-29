
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export default function Innersection() {
    return (
        <Container fluid style={{ backgroundColor: " bisque" }}>
            <Container>
                <Row >
                    <Col sm className="my-5">
                        <Card >
                            <Card.Body>
                                <iframe width="599" height="345" src="https://www.youtube.com/embed/tx5OerUuTQE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm className="my-5">
                        <Card style={{
                            height: "100%", border: "none",
                            background: "transparent"
                        }}>
                            <Card.Body style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                maxWidth: "76%",
                                width: "76%"
                            }}>
                                <Card.Title style={{
                                    fontSize: "23px",
                                    width: "364px",
                                    maxWidth: "71%",
                                    margin: "0 auto",
                                    textAlign: "center",
                                    padding: "20px 0",
                                }}>Now you can play Rummay anytime anywhere!</Card.Title>
                                <Card.Text style={{ textAlign: "center" }}>
                                    Just Download Rummay and have Unlimited Fun! Also try Teen Patti Variations and New Game Modes.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </Container >
    )
}
