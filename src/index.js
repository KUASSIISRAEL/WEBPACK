class CashFlow {
  /**
   * [constructor description]
   * @param  {number} options [description]
   * @return {string}         [description]
   */
  constructor(options) {
    this.options = (options === 1) ?
      'CASHIN' :
      'CASHOUT';
  }

  /**
   * [getType description]
   * @return {string} [description]
   */
  getType() {
    return this
      .options
      .uppercase()
  }
}

class Provider {
  /**
   * [constructor description]
   * @param  {string} provider [description]
   * @return {[type]}          [description]
   */
  constructor(provider = null) {
    this.provider = (provider) ?
      provider :
      'AUTO';
  }

  /**
   * [getProvider description]
   * @return {string} [description]
   */
  getProvider() {
    return this
      .provider
      .uppercase()
  }
}


class PaymentGateway {
  /**
   * [constructor description]
   * @param  {string} amount   [description]
   * @param  {string} currency [description]
   * @param  {string} country  [description]
   * @param  {string} cashFlow [description]
   * @return {string}          [description]
   */
  constructor(amount, currency, country, cashFlow, provider) {
    this.amount = parseFloat(amount);
    this.currency = currency;
    this.country = country;
    this.cashFlow = cashFlow;
    this.provider = provider;
  }

  /**
   * [displayAmount description]
   * @return {number} [description]
   */
  displayAmount() {
    console.log(this.amount)
  }

  /**
   * [displayCurrency description]
   * @return {string} [description]
   */
  displayCurrency() {
    console.log(this.currency)
  }

  /**
   * [displayCountry description]
   * @return {string} [description]
   */
  displayCountry() {
    console.log(this.country)
  }

  /**
   * [displayCashFlow description]
   * @return {[type]} [description]
   */
  displayCashFlow() {
    console.log(this.cashFlow)
  }

  /**
   * [displayProvider description]
   * @return {[type]} [description]
   */
  displayProvider() {
    console.log(this.provider)
  }

  /**
   * [cashFlowInfos description]
   * @return {object} [description]
   */
  cashFlowInfos() {
    return {
      'amount': this.amount,
      'currency': this.currency,
      'country': this.country,
      'cashFlow': this.cashFlow,
      'provider': this.provider,
      'createdAt': new Date(),
    }
  }
}