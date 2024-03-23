import { useState } from 'react';
import { Arithmetic } from './basicMathTemplate/Arithmetic';
import { FactoryCreator } from './components/FactoryCreator';
import './css/index.css';

function App() {
  const [mathSheet, setMathSheet] = useState(null);
  const createArithmetic = ({ numberOfProblems, operator, skillTier }) => {
    setMathSheet(<Arithmetic numberOfProblems={numberOfProblems} operator={operator} skillTier={skillTier} />);
  }


  return (
    <div className="mathSheet">
      {mathSheet === null ? <FactoryCreator createArithmetic={createArithmetic}/> : mathSheet}
    </div>
  );
}

export default App;
