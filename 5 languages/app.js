const selectLanguage = prompt('Выберите язык: ru, de, en');
switch (selectLanguage) {
    case 'ru':
        console.log('Добрый день!');
        break;
    case 'de':
        console.log('Gutten tag!');
        break;
    case 'en':
        console.log('Good morning');
        break;
    default: console.log('Язык не выбран');
}