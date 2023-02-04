import React, { PureComponent } from 'react';
import './MortgageCalculator.scss';
import DraggableBar from '../DraggableBar/DraggableBar.component';
import { MONTHS, DATA_TYPE } from './MortgageCalculator.config';

export class MortgageCalculator extends PureComponent {
    state = {
        purchaseAmount: 0,
        downPayment: 0,
        repaymentTime: 0,
        interestRate: 0
    };

    getBarValue = (val, type) => {
        this.setState({ [type]: val });
    };

    calculateLoanAmount = () => {
        const {
            purchaseAmount,
            downPayment
        } = this.state;

        return (purchaseAmount - downPayment);
    };

    renderDraggableBar = () => {
        return DATA_TYPE.map(el => {
            return <DraggableBar
                text={el.text}
                scale={el.scale}
                type={el.type}
                getValue={this.getBarValue} key={el.type}/>;
        });
    };

    calculateMonthlyPayment = () => {
        const {
            repaymentTime,
            interestRate
        } = this.state;
        const P = this.calculateLoanAmount();
        const newInter = (interestRate / 100) / MONTHS;
        const C = Math.pow((1 + newInter), (repaymentTime * MONTHS));

        if (+interestRate === 0 && +repaymentTime !== 0) {
            return (P / (repaymentTime * MONTHS)).toFixed(0);
        }

        if (+interestRate === 0 || +repaymentTime === 0) {
            return 0;
        }

        return (P * ((newInter * C) / (C - 1))).toFixed(0);
    };

    render () {
        return (
            <div className='MortgageCalculator'>
                <h2>Mortgage Calculator</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <div className='MortgageCalculator-Input'>
                    {this.renderDraggableBar()}
                </div>
                <h3>
                    Loan amount: <span>${this.calculateLoanAmount().toLocaleString()}</span>
                </h3>
                <h3>
                    Estimated repayment per month: <span>${(+this.calculateMonthlyPayment()).toLocaleString()}</span>
                </h3>
            </div>
        );
    }
}

export default MortgageCalculator;
