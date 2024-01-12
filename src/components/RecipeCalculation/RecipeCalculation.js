/* eslint-disable no-return-assign */
import React, { PureComponent } from 'react';
import readXlsxFile from 'read-excel-file';
import './RecipeCalculation.scss';

export class RecipeCalculation extends PureComponent {
    state = {
        excelData: [],
        targetAmount: 1000000,
        numberOfItems: 10,
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

    generateRandomArrays = (inputArray, totalPrice, maxItems) => {
    // Sort the input array by price
        inputArray.sort((a, b) => a[3] - b[3]);

        const allArrays = [];
        for (let i = 0; i < 100; i++) {
            const tempArray = [];
            let tempTotal = 0;
            const shuffledArray = [...inputArray].sort(() => Math.random() - 0.5);
            let j = 0;
            while (tempTotal <= totalPrice && j < shuffledArray.length && tempArray.length < maxItems) {
                const item = [...shuffledArray[j]];
                const maxQuantity = item[2];
                const remaining = totalPrice - tempTotal;
                const maxPossibleQuantity = Math.floor(remaining / item[3]);
                const quantity = Math.min(maxQuantity, maxPossibleQuantity);
                if (quantity > 0) {
                    const itemTotal = quantity * item[3];
                    item[2] = quantity;
                    tempArray.push(item);
                    tempTotal += itemTotal;
                }
                j++;
            }
            tempArray.sort((a, b) => b[3] - a[3]);
            for (let k = 0; k < tempArray.length; k++) {
                const item = tempArray[k];
                const remaining = totalPrice - tempTotal;
                const maxPossibleQuantity = Math.floor(remaining / item[3]);
                const additionalQuantity = Math.min(item[2], maxPossibleQuantity);
                if (additionalQuantity > 0) {
                    const additionalTotal = additionalQuantity * item[3];
                    item[2] += additionalQuantity;
                    tempTotal += additionalTotal;
                }
            }
            tempArray.push(tempTotal);
            allArrays.push({ array: tempArray, total: tempTotal });
        }
        allArrays.sort((a, b) => Math.abs(totalPrice - a.total) - Math.abs(totalPrice - b.total));
        const result = allArrays.slice(0, 10).map(a => a.array);
        return result;
    };

    onTargetAmountChange = (e) => {
        this.setState({ targetAmount: e.target.value });
    };

    onChangeNumberOfItems = (e) => {
        this.setState({ numberOfItems: e.target.value });
    };

    onCalculate = (e) => {
        const result = this.generateRandomArrays(this.state.excelData, this.state.targetAmount, this.state.numberOfItems);
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
        return (
            <section id='Recipe-Calculation' className='RecipeCalculation'>
                <div className='RecipeCalculation-Input'>
                    <input type="file" id="inputExcel" onChange={(e) => this.onExcelChange(e)}/>
                    <div className='RecipeCalculation-Amount'>
                        <label>Total amount</label>
                        <input type="number" id="inputNumber" value={this.state.targetAmount} onChange={(e) => this.onTargetAmountChange(e)}/>
                        <label>Number of items</label>
                        <input type="number" id="numberOfItems" value={this.state.numberOfItems} onChange={(e) => this.onChangeNumberOfItems(e)}/>
                        <button onClick={(e) => this.onCalculate(e)}>search</button>
                    </div>
                </div>
                <div className='RecipeCalculation-Results'>
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
