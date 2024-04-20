import { AllowRepeats } from './subComputations/AllowRepeats';
import { AllowNoRepeats } from './subComputations/AllowNoRepeats';
import { getTier } from '../utils/difficulty'
import { getOperator } from '../utils/operator'
import { DifficultyTier } from '../utils/enums';
import '../css/index.css'

export interface ArithmeticProps {
    numberOfProblems: number;
    operator: string;
    skillTier: DifficultyTier;
    allowRepeats: boolean;
}

export const Arithmetic = (props: ArithmeticProps) => {
    const {
        numberOfProblems,
        operator,
        skillTier,
        allowRepeats
    } = props

    const operatorToUse = getOperator(operator)
    const [startRange, endRange] = getTier(skillTier)

    return (
    <>
        {allowRepeats ? 
            (<AllowRepeats 
                operatorToUse={operatorToUse}
                numberOfProblems={numberOfProblems}
                startRange={startRange}
                endRange={endRange}
            />) : 
            (<AllowNoRepeats 
                operatorToUse={operatorToUse}
                numberOfProblems={numberOfProblems}
                startRange={startRange}
                endRange={endRange}
            />)}
    </>
    )
}