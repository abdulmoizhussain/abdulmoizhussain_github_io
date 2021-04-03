import React from 'react';
import BigNumber from "bignumber.js";

class Percentage extends React.Component {
  state = {
    dollarRate: "154.97",
    price: "12.99",
    bankFeePercent: "5",
    resultNormal: 0,
    resultNormalFeePercent: 0,
    resultNormalAfterAddingBankFee: 0,
    actualPriceCut: 2123.78,
    percentageOfActualPrice: "0",
    serviceFee: "0",
  };

  componentDidMount() {
    this.calculateNormalResult();
  }

  calculateNormalResult = () => {
    const { price, dollarRate, bankFeePercent, actualPriceCut } = this.state;
    const bankFeePercentBig = new BigNumber(bankFeePercent);

    const resultNormBig = new BigNumber(price).multipliedBy(dollarRate);

    const resultNormalFeePercent = resultNormBig.dividedBy(100).multipliedBy(bankFeePercentBig);
    const percentageOfActualPrice = new BigNumber(actualPriceCut).dividedBy(resultNormBig).multipliedBy(100);

    this.setState({
      resultNormal: resultNormBig.toFixed(2),
      resultNormalFeePercent: resultNormalFeePercent.toFixed(2),
      resultNormalAfterAddingBankFee: resultNormalFeePercent.plus(resultNormBig).toFixed(2),
      percentageOfActualPrice: percentageOfActualPrice.toFixed(2),
      serviceFee: percentageOfActualPrice.minus(100).toFixed(2),
    });
  };

  render() {
    const { price, dollarRate, bankFeePercent, resultNormal, resultNormalFeePercent, resultNormalAfterAddingBankFee, actualPriceCut, percentageOfActualPrice, serviceFee } = this.state;
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
      <hr />
      <div>{resultNormal}</div>
      <hr />
      <div>{bankFeePercent}% {resultNormalFeePercent}</div>
      <div>With {bankFeePercent}% {resultNormalAfterAddingBankFee}</div>
      <hr />
      <div>{actualPriceCut} is {percentageOfActualPrice}% of {resultNormal} {"-->"} service fee is {serviceFee}%</div>
    </div>;
  }
}

export default Percentage;
