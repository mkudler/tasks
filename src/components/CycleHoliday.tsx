import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "New Year's Day"
    | "Valentine's Day"
    | "Independence Day"
    | "Halloween"
    | "Christmas";
const holidayEmojis: Record<Holiday, string> = {
    "New Year's Day": "🎉",
    "Valentine's Day": "💖",
    "Independence Day": "🎆",
    Halloween: "🎃",
    Christmas: "🎄",
};
const alphabeticalHolidays: Holiday[] = [
    "Christmas",
    "Halloween",
    "Independence Day",
    "New Year's Day",
    "Valentine's Day",
];
const yearlyHolidays: Holiday[] = [
    "New Year's Day",
    "Valentine's Day",
    "Independence Day",
    "Halloween",
    "Christmas",
];
export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, setCurrentHoliday] =
        useState<Holiday>("New Year's Day");
    const advanceByAlphabet = () => {
        const currentIndex = alphabeticalHolidays.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % alphabeticalHolidays.length;
        setCurrentHoliday(alphabeticalHolidays[nextIndex]);
    };
    const advanceByYear = () => {
        const currentIndex = yearlyHolidays.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % yearlyHolidays.length;
        setCurrentHoliday(yearlyHolidays[nextIndex]);
    };
    return (
        <div>
            <p>Holiday: {holidayEmojis[currentHoliday]}</p>
            <Button onClick={advanceByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}
