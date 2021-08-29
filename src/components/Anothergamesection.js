import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Anothergamesection() {

    var listOfAnotherGame = [
        {
            gameImage: "image/cardRoyale.png",
            gameName: "Teen Patti Battle",
            gameUrl: "https://go.onelink.me/3477382853?pid=TPC_Website_2018&amp;c=More_Games"
        },
        {
            gameImage: "image/seep.png",
            gameName: "Teen Patti Battle",
            gameUrl: "https://go.onelink.me/3477382853?pid=TPC_Website_2018&amp;c=More_Games"
        },
        {
            gameImage: "image/tpl.png",
            gameName: "Teen Patti Battle",
            gameUrl: "https://go.onelink.me/3477382853?pid=TPC_Website_2018&amp;c=More_Games"
        },
        {
            gameImage: "image/seep.png",
            gameName: "Teen Patti Battle",
            gameUrl: "https://go.onelink.me/3477382853?pid=TPC_Website_2018&amp;c=More_Games"
        },
        {
            gameImage: "image/rummy.png",
            gameName: "Teen Patti Battle",
            gameUrl: "https://go.onelink.me/3477382853?pid=TPC_Website_2018&amp;c=More_Games"
        },
        {
            gameImage: "image/seep.png",
            gameName: "Teen Patti Battle",
            gameUrl: "https://go.onelink.me/3477382853?pid=TPC_Website_2018&amp;c=More_Games"
        },
        {
            gameImage: "image/tpl.png",
            gameName: "Teen Patti Battle",
            gameUrl: "https://go.onelink.me/3477382853?pid=TPC_Website_2018&amp;c=More_Games"
        },
        {
            gameImage: "image/seep.png",
            gameName: "Teen Patti Battle",
            gameUrl: "https://go.onelink.me/3477382853?pid=TPC_Website_2018&amp;c=More_Games"
        },
        {
            gameImage: "image/tpl.png",
            gameName: "Teen Patti Battle",
            gameUrl: "https://go.onelink.me/3477382853?pid=TPC_Website_2018&amp;c=More_Games"
        },
        {
            gameImage: "image/seep.png",
            gameName: "Teen Patti Battle",
            gameUrl: "https://go.onelink.me/3477382853?pid=TPC_Website_2018&amp;c=More_Games"
        },
        {
            gameImage: "image/tpl.png",
            gameName: "Teen Patti Battle",
            gameUrl: "https://go.onelink.me/3477382853?pid=TPC_Website_2018&amp;c=More_Games"
        },
        {
            gameImage: "image/seep.png",
            gameName: "Teen Patti Battle",
            gameUrl: "https://go.onelink.me/3477382853?pid=TPC_Website_2018&amp;c=More_Games"
        },
    ];
    return (
        <Container fluid style={{
            background: "url(../image/sectionBg.png)"
        }}>
            <Container >
                <Row className="justify-content-md-center ">
                    <div style={{ justifyContent: "center", padding: "8px 0", textAlign: "center" }}>
                        <h1 style={{ color: "white" }}>
                            Try our other games
                        </h1>
                        <p >Millions of players playing ours games worldwide!</p>
                    </div>
                </Row>
                <Row className="justify-content-md-center">
                    <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        padding: " 20px 50px",
                        justifyContent: "center"
                    }}>
                        {listOfAnotherGame.map((game) => (
                            <div style={{ padding: "0 8px" }}>
                                <Link href={game.gameUrl} className="appIcon" style={{ textDecoration: "none" }}>
                                    <img src={game.gameImage} alt="" />
                                    <p style={{ color: "white" }}>{game.gameName}</p>
                                </Link>
                            </div>
                        ))}

                    </div>
                </Row>
            </Container >

        </Container >
    )
}
