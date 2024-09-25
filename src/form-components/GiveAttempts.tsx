import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [request, setRequest] = useState<string>("");

    const handleUse = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    const handleGain = () => {
        const parsedRequest = parseInt(request);
        if (!isNaN(parsedRequest)) {
            setAttemptsLeft(attemptsLeft + parsedRequest);
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts Left: {attemptsLeft}</div>
            <Form.Group controlId="formRequestAttempts">
                <Form.Label>Request Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={(e) => {
                        setRequest(e.target.value);
                    }}
                />
            </Form.Group>
            <Button onClick={handleUse} disabled={attemptsLeft === 0}>
                Use
            </Button>
            <Button onClick={handleGain}>Gain</Button>
        </div>
    );
}
