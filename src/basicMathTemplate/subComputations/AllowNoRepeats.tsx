import { MathComputationsProps } from "../utils/interfaces"
import { generateTwoPseudoRandomNumbers, generateWholeDivisionNumbers } from "../utils/numberGeneration"
import { Operators } from "../../utils/enums"

export const AllowNoRepeats = (props: MathComputationsProps) => {
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

    const problems = new Set()
    
    const problemSet = (
        Array.from({ length: numberOfProblems }, (_, idx) => {
            const [firstNumber, secondNumber] = generateNumbers()

            const numberToAddToSet = `${firstNumber}${operatorToUse}${secondNumber}`
            const reverseNumberToAddToSet = numberToAddToSet.split("").reverse().join("");

            console.log('numberToCheck the set for:', numberToAddToSet)
            console.log('reverseNumberToCheck the set for:', reverseNumberToAddToSet)

            if (problems.has(numberToAddToSet) || problems.has(reverseNumberToAddToSet)) {
                let noRepeatAchieved = false;
                let jsxToReturn;

                while (!noRepeatAchieved) {
                    const [firstNumber, secondNumber] = generateNumbers()
                    const numberToAddToSet = `${firstNumber}${operatorToUse}${secondNumber}`
                    const reverseNumberToAddToSet = numberToAddToSet.split("").reverse().join("");

                    if (!problems.has(numberToAddToSet) && !problems.has(reverseNumberToAddToSet)) {
                        problems.add(numberToAddToSet)
                        noRepeatAchieved = true;

                        jsxToReturn = (
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
                        )
                    }
                }
                return jsxToReturn;
            } 
            else {
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
                )
            }
        })
    )
    
    return (<>{problemSet}</>)
}