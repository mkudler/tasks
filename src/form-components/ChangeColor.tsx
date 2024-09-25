import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "brown",
];

export function ChangeColor(): React.JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>(COLORS[0]);

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color) => (
                <Form.Check
                    inline
                    key={color}
                    type="radio"
                    name="color-options"
                    id={`color-${color}`}
                    label={color}
                    value={color}
                    checked={selectedColor === color}
                    onChange={(e) => {
                        setSelectedColor(e.target.value);
                    }}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    color: "white",
                    padding: "10px",
                    marginTop: "10px",
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
