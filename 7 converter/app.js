const currencyDeposit = prompt('Выберите валюту которую хотите обменять => RUB, USD, EUR');
const deposit = prompt('Введите сумму которую хотите обменять');
const currencyExchange = prompt('Выберите валюту на которую хотите обменять => RUB, USD, EUR');

function conversionRates(currencyDeposit, currencyExchange) {
    if(currencyDeposit && currencyExchange) {
        switch(true) {
            case currencyDeposit === 'RUB' && currencyExchange === 'USD':
                return 0.010183;
            case currencyDeposit === 'USD' && currencyExchange === 'RUB':
                return 98.21;
            case currencyDeposit === 'RUB' && currencyExchange === 'EUR':
                return 0.009262;
            case currencyDeposit === 'EUR' && currencyExchange === 'RUB':
                return 107.97;
            case currencyDeposit === 'EUR' && currencyExchange === 'USD':
                return 1.1;
            case currencyDeposit === 'USD' && currencyExchange === 'EUR':
                return 0.90955;
                default: return 0;
        }
    }
    return;
}

function exchange(moneyAmount, currencyDeposit, currencyExchange) {
    const result = conversionRates(currencyDeposit, currencyExchange);
    console.log(`Ставка обмена ${result} Из ${currencyDeposit} => ${currencyExchange}` )
    if (result) {
        return moneyAmount * result;
    }
    return null;
}

console.log(`${exchange(deposit, currencyDeposit, currencyExchange)} ${currencyExchange}`);