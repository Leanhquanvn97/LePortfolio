import React from 'react';
import './MortgageCalculatorBlock.scss';
import MortgageCalculator from '../MortgageCalculator/MortgageCalculator.component';

const MortgageCalculatorBlock = () => {
    return (
        <div className='MortgageCalculatorBlock'>
            <MortgageCalculator/>
            <div className='MortgageCalculatorBlock-Text'>
                <h2>Try our awesome Calculator</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <button>Register</button>
            </div>
        </div>
    );
};

export default MortgageCalculatorBlock;
