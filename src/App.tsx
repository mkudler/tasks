import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <h1>Hello World</h1>
            <div>
                <Container>
                    <Row>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        >
                            <Col>
                                <header className="App-header">
                                    Hello World Matthew Kudler UD CISC275 with
                                    React Hooks and TypeScript
                                </header>
                                <div
                                    style={{
                                        backgroundColor: "2px solid red",
                                        padding: "4px",
                                    }}
                                ></div>
                                <ul>
                                    <li>I</li>
                                    <li>Did</li>
                                    <li>It</li>
                                </ul>
                            </Col>
                        </div>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        >
                            <Col>
                                <div>
                                    <div>
                                        <Button
                                            onClick={() => {
                                                console.log("Hello World!");
                                            }}
                                        >
                                            Log Hello World
                                        </Button>
                                    </div>
                                    <img
                                        src="C:/Users/Matthew Kudler/Pictures/20190305_142745.jpg"
                                        alt="A picture of my dogs Summer and Munchkin"
                                    />
                                </div>
                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>
            <div>
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload.
                </p>
            </div>
        </div>
    );
}

export default App;
