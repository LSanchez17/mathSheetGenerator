import { getTier } from '../utils/difficulty'
import { getOperator } from '../utils/operator'
import '../css/index.css'

export const Arithmetic = ({ numberOfProblems, operator, skillTier }) => {
    const TOTAL_MATH_PROBLEMS = numberOfProblems
    const operatorToUse = getOperator(operator)
    const [startRange, endRange] = getTier(skillTier)

    return (
    <>
        {
            Array.from({ length: TOTAL_MATH_PROBLEMS }, (_, idx) => {
                const firstNumber = Math.floor(Math.random() * startRange);
                const secondNumber = Math.floor(Math.random() * endRange);
        
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
        }
    </>
    )
}