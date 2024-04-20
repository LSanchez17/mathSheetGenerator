import { useState } from 'react';
import { Arithmetic, ArithmeticProps } from './basicMathTemplate/Arithmetic';
import { FactoryCreator } from './components/FactoryCreator';
import { PrintButton } from './components/PrintButton';
import './css/index.css';

function App() {
  const [mathSheet, setMathSheet] = useState(null);
  const createArithmetic = (props: ArithmeticProps) => {
    setMathSheet(<Arithmetic {...props} />);
  }


  return (
    <>
      <div className="mathSheet">
        {mathSheet === null ? <FactoryCreator createArithmetic={createArithmetic}/> : mathSheet}    
      </div>
      {mathSheet && <PrintButton /> }
    </>
  );
}

export default App;
