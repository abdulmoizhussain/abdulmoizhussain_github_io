import React from 'react';



class Percentage extends React.Component {
    state = {
        dollarRate: "0",
        price: "0",
        bankFeePercent: "5",
        resultNormal: 0,
        resultNormalFeePercent: 0,
        resultNormalAfterAddingBankFee: 0,
        actualPriceCut: 2123.78,
    };

    calculateNormalResult = () => {
        const { price, dollarRate, bankFeePercent } = this.state;
        const bankFeePercentInt = parseFloat(bankFeePercent);
        const resultNorm = parseFloat(price) * parseFloat(dollarRate);

        this.setState({
            resultNormal: resultNorm,
            resultNormalFeePercent: (resultNorm / 100) * bankFeePercentInt,
            resultNormalAfterAddingBankFee: ((resultNorm / 100) * bankFeePercentInt) + resultNorm,
        });
    };

    render() {
        const { price, dollarRate, bankFeePercent, resultNormal, resultNormalFeePercent, resultNormalAfterAddingBankFee, actualPriceCut } = this.state;
        return <div>
            <div>
                Rate:&nbsp;
            <input type="text" placeholder="Dollar Rate" value={dollarRate} onChange={ev => {
                    this.setState({ dollarRate: ev.target.value }, this.calculateNormalResult);
                }} />
            </div>
            <div>
                Price:&nbsp;
            <input type="text" placeholder="Price" value={price} onChange={ev => {
                    this.setState({ price: ev.target.value }, this.calculateNormalResult);
                }} />
            </div>
            <div>
                Bank Fee %:&nbsp;
            <input type="text" placeholder="Bank Fee %" value={bankFeePercent} onChange={ev => {
                    this.setState({ bankFeePercent: ev.target.value }, this.calculateNormalResult);
                }} />
            </div>
            <div>{resultNormal}</div>
            <div>{bankFeePercent}% {resultNormalFeePercent}</div>
            <div>With {bankFeePercent}% {resultNormalAfterAddingBankFee}</div>
            <div>{resultNormal} is {((resultNormal / actualPriceCut) * 100).toFixed(2)}% of {actualPriceCut} {"-->"} service fee is {(100 - ((resultNormal / actualPriceCut) * 100)).toFixed(2)}</div>
        </div>;
    }
}

export default Percentage;
