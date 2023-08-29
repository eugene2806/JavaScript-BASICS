const card = '4068-3413-0895-0780';

function checkCard(numberCard) {
    numberCard = numberCard.trim().replaceAll('-', '').replaceAll(' ', '').split('');

    if (numberCard.length != 16) {
        return false;
    }
    const chek = numberCard.map((el, index) => {
        if ((index + 1) % 2 === 0) {
            return Number(el);
        };
        el = Number(el * 2);
        if (el < 9) {
            return  el;
        };
        return el - 9;
    }).reduce((acc, el) => acc += el);
    if (chek % 10 === 0) {
        return true;
    };
    return false;
};

console.log(checkCard(card));

