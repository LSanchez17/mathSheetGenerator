import { MathComputationsProps } from "../utils/interfaces";
import { generateTwoPseudoRandomNumbers } from "../utils/numberGeneration";

export const AllowRepeats = (props: MathComputationsProps) => {
    const {
        operatorToUse,
        numberOfProblems,
        startRange,
        endRange
    } = props


    const problemSet = (
        Array.from({ length: numberOfProblems }, (_, idx) => {
            const [firstNumber, secondNumber] = generateTwoPseudoRandomNumbers(startRange, endRange);
    
            return (
                <div className='numberBlock' key={idx}>
                    <div className='mathSymbol'>
                        <span>{operatorToUse}</span>
                    </div>
                    <div className='numberArithmeticSection'>
                        <span>{firstNumber}</span>
                        <span>{secondNumber}</span>
                    </div>
                    <div className='horizontalLine'></div>
                </div>
            );
        })
    )

    return (<>{problemSet}</>)
}