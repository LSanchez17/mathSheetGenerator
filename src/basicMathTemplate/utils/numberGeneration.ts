export const generateTwoPseudoRandomNumbers = (startRange, endRange): number[] => {
    const firstNumber = Math.floor(Math.random() * startRange);
    const secondNumber = Math.floor(Math.random() * endRange);

    return [firstNumber, secondNumber]
}