import React from 'react';
import './MortgageCalculatorBlock.scss';
import MortgageCalculator from '../MortgageCalculator/MortgageCalculator.component';

const MortgageCalculatorBlock = () => {
    return (
        <div className='MortgageCalculatorBlock'>
            <MortgageCalculator/>
            <div className='MortgageCalculatorBlock-Text'>
                <h2>Try my awesome Calculator</h2>
                <p>A fun side project</p>
                <button className='Button-Disabled'>Register</button>
            </div>
        </div>
    );
};

export default MortgageCalculatorBlock;
