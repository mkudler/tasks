import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    // State to track whether the answer is revealed
    const [isRevealed, setIsRevealed] = useState<boolean>(false);

    return (
        <div>
            <Button
                onClick={() => {
                    setIsRevealed(!isRevealed);
                }}
            >
                Reveal Answer
            </Button>
            {/* Display the answer only if revealed */}
            {isRevealed && <p>42</p>}
        </div>
    );
}
