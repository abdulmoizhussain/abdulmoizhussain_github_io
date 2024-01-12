import React from 'react';
// import BigNumber from "bignumber.js";

export default class App extends React.Component {
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

  render() {
    return <div>
      <textarea></textarea>
    </div>;
  }
}
