import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <Container fluid style={{
                background: " #1b1b1b url(../image/pattern_1.png) left top repeat",
            }}>
                <Row className="py-5">
                    <Col style={{
                        maxWidth: "450px",
                        margin: "0 auto",
                    }}>
                        <div className="social" style={{ textAlign: "center" }}>
                            <h2 style={{ color: "white", wordSpacing: "2px", letterSpacing: "3px" }}>We are social</h2>
                            <p style={{ color: "white", letterSpacing: "3px" }}>Join our Teen Patti community and share your experience with other users.</p>
                            <Link style={{ padding: "0 5px" }} to="https://www.facebook.com/octroteenpatti/" target="_blank">
                                <img src="image/fb.png" alt="Facebook" />
                            </Link>
                            <Link style={{ padding: "0 5px" }} to="https://twitter.com/octroteenpatti?lang=en" target="_blank">
                                <img src="image/twitter.png" alt="Twitter" />
                            </Link>
                            <Link style={{ padding: "0 5px" }} to="https://www.youtube.com/channel/UCZPfwuZI3UNMCv2qcZEHzQQ" target="_blank">
                                <img src="image/yt.png" alt="YouTube" />
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
