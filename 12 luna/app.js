const card = '4068-3413-0895-0780';

function checkCard(numberCard) {
    numberCard = numberCard.trim().replaceAll('-', '').replaceAll(' ', '').split('');

    if (numberCard.length != 16) {
        return false;
    };

    const check = numberCard.reduce((acc, el, index) => {
        if ((index + 1) % 2 === 0) {
            return acc + Number(el);
        };
        el = Number(el * 2);
        if (el < 9) {
            return acc + el;
        };
        return acc + (el - 9);
    },0);
    
    return check % 10 === 0;
};

console.log(checkCard(card));

