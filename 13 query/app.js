const parametrs = {
    search: 'Вася',
    take: 10
};

function conversionQuery (parametrs) {
    let str = '';
    let count = 1;
    for(const key of Object.keys(parametrs)) {
        if (count < Object.keys(parametrs).length) {
            str = str + `${key}=${parametrs[key]}&`
        } else {
            str = str + `${key}=${parametrs[key]}`
        };
        count ++;
    };
    return str = str.padStart(str.length + 2, '/');
};

console.log(conversionQuery(parametrs));
