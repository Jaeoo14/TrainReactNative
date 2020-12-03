/* eslint-disable prettier/prettier */
export function getCoinIconUri(coinName) {
    switch (coinName) {
        case 'Bitcoin': // btc
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/btc@2x.png?raw=true';
        case 'Ethereum': //eth
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/eth@2x.png?raw=true';
        case 'XRP': //xrp
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/xrp@2x.png?raw=true';
        case 'EOS': //eos
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/eos@2x.png?raw=true';
        case 'Bitcoin Cash': // bch
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/bch@2x.png?raw=true';
        case 'Litecoin': // ltc
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/ltc@2x.png?raw=true';
        case 'Tether': // usdt
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/usdt@2x.png?raw=true';
        case 'Chainlink': //link
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/link@2x.png?raw=true';
        case 'Cardano': //ada
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/ada@2x.png?raw=true';
        case 'Polkadot': // dot
            return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/dot@2x.png?raw=true';
        default:
            return 'https://icon-icons.com/icons2/1386/PNG/64/generic-crypto-cryptocurrency-cryptocurrencies-cash-money-bank-payment_95642.png';
    }
}
