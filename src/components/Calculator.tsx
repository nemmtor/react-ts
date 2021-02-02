import React from 'react';

import { getSumOf2Numbers } from '../utils';

interface Props {
    isVisible: boolean;
    numbersToAdd: [number, number];
}

export const Calculator = ({ isVisible, numbersToAdd }: Props): JSX.Element | null => {
    const sum = getSumOf2Numbers(...numbersToAdd);

    if (!isVisible) return null;

    return <h1>{sum}</h1>;
};
