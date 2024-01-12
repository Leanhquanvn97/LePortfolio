/* eslint-disable no-return-assign */
import React, { PureComponent } from 'react';
import readXlsxFile from 'read-excel-file';
import './RecipeCalculation.scss';

export class RecipeCalculation extends PureComponent {
    state = {
        excelData: [],
        targetAmount: 1000000,
        numberOfRow: 0,
        ouputArray: []
    };

    onExcelChange = (e) => {
        if (e) {
            readXlsxFile(e.target.files[0]).then((rows) => {
                const total = rows.length;
                this.setState({ excelData: rows.splice(1, total) });
            });
        }
    };

    generateRandomArrays = (inputArray, totalPrice) => {
    // Sort the input array by price
        inputArray.sort((a, b) => a[3] - b[3]);

        const allArrays = [];
        for (let i = 0; i < 100; i++) {
            const tempArray = [];
            let tempTotal = 0;
            const shuffledArray = [...inputArray].sort(() => Math.random() - 0.5); // shuffle the input array
            let j = 0; // index for iterating over the shuffled array
            while (tempTotal <= totalPrice && j < shuffledArray.length) {
                const item = [...shuffledArray[j]]; // copy the item
                const maxQuantity = item[2];
                const remaining = totalPrice - tempTotal;
                const maxPossibleQuantity = Math.floor(remaining / item[3]);
                const quantity = Math.min(maxQuantity, maxPossibleQuantity);
                if (quantity > 0) {
                    const itemTotal = quantity * item[3];
                    item[2] = quantity; // update the quantity of the item
                    tempArray.push(item);
                    tempTotal += itemTotal;
                }
                j++;
            }
            tempArray.push(tempTotal);
            allArrays.push({ array: tempArray, total: tempTotal });
        }
        // Sort the arrays by the absolute difference between their total price and the input total price
        allArrays.sort((a, b) => Math.abs(totalPrice - a.total) - Math.abs(totalPrice - b.total));
        // Select the 10 arrays with the smallest difference
        const result = allArrays.slice(0, 10).map(a => a.array);
        return result;
    };

    onTargetAmountChange = (e) => {
        this.setState({ targetAmount: e.target.value });
    };

    onCalculate = (e) => {
        const result = this.generateRandomArrays(this.state.excelData, this.state.targetAmount);
        this.setState({ ouputArray: result });
    };

    elementRefs = [];

    displayTable = (el, index) => {
        return (
            <div>
                <table className='RecipeCalculation-Table' ref={ (ref) => {
                    this.elementRefs[index] = ref;
                } }>
                    <thead>
                        <tr>
                            <th>Stt</th>
                            <th>Tên</th>
                            <th>Số Lượng</th>
                            <th>Giá Tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {el.map((value, index) => {
                            if (typeof value === 'number') {
                                return (<tr key={index}>
                                    <td>Tổng</td>
                                    <td></td>
                                    <td></td>
                                    <td>{value}</td>
                                </tr>);
                            }
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{value[1]}</td>
                                    <td>{value[2]}</td>
                                    <td>{value[3]}</td>
                                </tr>);
                        })}
                    </tbody>
                </table>
            </div>
        );
    };

    render () {
        console.log(this.elementRefs[0]);

        return (
            <section>
                <input type="file" id="inputExcel" onChange={(e) => this.onExcelChange(e)}/>
                <input type="number" id="inputNumber" value={this.state.targetAmount} onChange={(e) => this.onTargetAmountChange(e)}/>
                <button onClick={(e) => this.onCalculate(e)}>Tim</button>
                <div className='RecipeCalculation'>
                    {this.state.ouputArray.map((el, index) => {
                        return (
                            <div key={index}>
                                <h1>
                                File # {index}
                                </h1>
                                {this.displayTable(el, index)}
                            </div>
                        );
                    })}
                </div>
            </section>
        );
    }
}

export default RecipeCalculation;
