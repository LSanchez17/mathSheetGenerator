import { useState } from 'react'
import { Operators, DifficultyTier } from '../utils/enums';
import '../css/index.css'

export const FactoryCreator = ({createArithmetic}) => {
    const [factoryProps, setFactoryProps] = useState({
        numberOfProblems: 0,
        operator: '',
        skillTier: '',
        allowRepeats: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFactoryProps({
            ...factoryProps,
            [name]: value
        });
    }

    const handleClick = () => {
        if (factoryProps.numberOfProblems === 0) return alert('Please enter a number of problems')
        if (factoryProps.operator === '') return alert('Please select an operator')
        if (factoryProps.skillTier === '') return alert('Please select a skill tier')

        createArithmetic(factoryProps);
    }

    return (
        <div className="factoryInputs">
            <label>Number of Problems</label>
            <input type="number" name="numberOfProblems" onChange={handleChange} />

            <label>Operator</label>
            <select name="operator" onChange={handleChange}>
                <option value="" selected disabled hidden>Choose here</option>
                <option value="+">{Operators.plus}</option>
                <option value="-">{Operators.minus}</option>
                <option value="*">{Operators.multiply}</option>
                <option value="/">{Operators.divide}</option>
                <option value="%">{Operators.modulo}</option>
            </select>

            <label>Skill Tier</label>
            <select name="skillTier" onChange={handleChange}>
                <option value="" selected disabled hidden>Choose here</option>
                <option value="eTier">{DifficultyTier.eTier}</option>
                <option value="dTier">{DifficultyTier.dTier}</option>
                <option value="cTier">{DifficultyTier.cTier}</option>
                <option value="bTier">{DifficultyTier.bTier}</option>
                <option value="aTier">{DifficultyTier.aTier}</option>
                <option value="sTier">{DifficultyTier.sTier}</option>
                <option value="sPlusTier">{DifficultyTier.sPlusTier}</option>
            </select>

            <div className='repeatsInput'>    
                <label>Allow Repeat Problems?</label>
                <input type="checkbox" name="allowRepeats" onChange={handleChange} />
            </div>

            <button onClick={handleClick}>Create Arithmetic Sheet</button>
        </div>
    )

}