import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [isInProgress, setIsInProgress] = useState<boolean>(false);

    const startQuiz = () => {
        if (attempts > 0) {
            setIsInProgress(true);
            setAttempts((prevAttempts) =>
                prevAttempts > 0 ? prevAttempts - 1 : prevAttempts,
            );
        }
    };

    const stopQuiz = () => {
        setIsInProgress(false);
    };

    const mulligan = () => {
        setAttempts((prevAttempts) => prevAttempts + 1);
    };

    return (
        <div>
            <h3>Start Attempt</h3>
            <p>Attempts left: {attempts}</p>
            <Button
                onClick={startQuiz}
                disabled={isInProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!isInProgress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={isInProgress}>
                Mulligan
            </Button>
        </div>
    );
}
