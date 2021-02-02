import React, { useState } from 'react';

import { Calculator } from './components';
import { useHelloWorld } from './hooks';

const getRandomNumber = (): number => Math.floor(Math.random() * 10);

export const App = (): JSX.Element => {
    const [calculatorIsVisible, setCalculatorIsVisible] = useState(false);
    const [randomNumber, setRandomNumber] = useState(getRandomNumber());

    const { logHello, someNumber } = useHelloWorld();

    const handleCalculatorToggle = (): void => {
        logHello();
        setCalculatorIsVisible((prevState) => !prevState);
        if (calculatorIsVisible) {
            setRandomNumber(getRandomNumber());
        }
    };

    return (
        <>
            <h1>Hello world</h1>
            <button onClick={handleCalculatorToggle}>Toggle</button>
            <Calculator isVisible={calculatorIsVisible} numbersToAdd={[randomNumber, someNumber]} />
        </>
    );
};
