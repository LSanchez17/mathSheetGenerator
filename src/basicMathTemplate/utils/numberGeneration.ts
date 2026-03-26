export const generateTwoPseudoRandomNumbers = (startRange, endRange): number[] => {
    const firstNumber = Math.floor(Math.random() * startRange);
    const secondNumber = Math.floor(Math.random() * endRange);

    return [firstNumber, secondNumber]
}

export const generateWholeDivisionNumbers = (startRange, endRange): number[] => {
    const maxDivisor = Math.max(1, Math.min(startRange, endRange) - 1);
    const divisor = Math.floor(Math.random() * maxDivisor) + 1;
    const maxQuotient = Math.max(1, Math.floor(startRange / divisor));
    const quotient = Math.floor(Math.random() * maxQuotient) + 1;
    const dividend = divisor * quotient;

    return [dividend, divisor]
}