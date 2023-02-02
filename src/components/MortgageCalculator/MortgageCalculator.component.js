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

    getPurchaseAmount = (val) => {
        this.setState({ purchaseAmount: val });
    };

    getDownPayment = (val) => {
        this.setState({ downPayment: val });
    };

    getRepaymentTime = (val) => {
        this.setState({ repaymentTime: val });
    };

    getInterestRate = (val) => {
        this.setState({ interestRate: val });
    };

    getMap = {
        [DATA_TYPE[0].type]: this.getPurchaseAmount,
        [DATA_TYPE[1].type]: this.getDownPayment,
        [DATA_TYPE[2].type]: this.getRepaymentTime,
        [DATA_TYPE[3].type]: this.getInterestRate
    };

    calculateLoanAmount = () => {
        const {
            purchaseAmount,
            downPayment
        } = this.state;

        return (purchaseAmount - downPayment);
    };

    renderDraggableBar = () => {
        return Object.entries(this.getMap).map(([_, func], index) => {
            return <DraggableBar
                text={DATA_TYPE[index].text}
                scale={DATA_TYPE[index].scale}
                getValue={func} key={index}/>;
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

        if (+interestRate === 0 || +repaymentTime === 0) {
            return 0;
        }

        return (P * ((newInter * C) / (C - 1))).toFixed(0).toLocaleString();
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
                    Estimated repayment per month: <span>${this.calculateMonthlyPayment()}</span>
                </h3>
            </div>
        );
    }
}

export default MortgageCalculator;
