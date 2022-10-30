import "Source/styles/index.css";

interface User {
  id: number
  firstName: string
  lastName: string
  priority: 1
}

interface Country {
  id: number
  name: string
  cc2: string
  cc3: string
  flag: string
}

interface Provider {
  id: number
  fullname: string
  country: string
  siteUrl: string
  phone: string
  email: string
}

interface Account {
  id: number
  displayName: string
  version: 1
}


/**
 * @class CashFlow
 */
class CashFlow {
  /**
   * [options description]
   * @type {string}
   */
  options: string

  /**
   * [country description]
   * @type {Country}
   */
  country: Country

  /**
   * [provider description]
   * @type {Provider}
   */
  provider: Provider

  /**
   * [constructor description]
   * @param {number}   options  [description]
   * @param {Country}  country  [description]
   * @param {Provider} provider [description]
   */
  constructor(
    options: number,
    country: Country,
    provider: Provider) {
    this.options = (options === 1) ?
      'CASHIN' :
      'CASHOUT';
    this.country = country;
    this.provider = provider;
  }

  /**
   * [getType description]
   * @return {string} [description]
   */
  getType(): string {
    return this
      .options
      .toUpperCase();
  }

  /**
   * [getCountry description]
   * @return {Country} [description]
   */
  getCountry(): Country {
    return this.country;
  }

  /**
   * [getProvider description]
   * @return {Provider} [description]
   */
  getProvider(): Provider {
    return this.provider;
  }
}