import { MathComputationsProps } from "../utils/interfaces";
import { generateTwoPseudoRandomNumbers, generateWholeDivisionNumbers } from "../utils/numberGeneration";
import { Operators } from "../../utils/enums";

export const AllowRepeats = (props: MathComputationsProps) => {
    const {
        operatorToUse,
        numberOfProblems,
        startRange,
        endRange,
        wholeNumberDivision
    } = props

    const generateNumbers = () => {
        if (wholeNumberDivision && operatorToUse === Operators.divide) {
            return generateWholeDivisionNumbers(startRange, endRange);
        }
        return generateTwoPseudoRandomNumbers(startRange, endRange);
    }

    const problemSet = (
        Array.from({ length: numberOfProblems }, (_, idx) => {
            const [firstNumber, secondNumber] = generateNumbers();
    
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