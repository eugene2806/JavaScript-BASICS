const selectLanguage = 'en';
switch (true) {
    case selectLanguage === 'ru':
        console.log('Добрый день!');
        break;
    case selectLanguage === 'de':
        console.log('Gutten tag!');
        break;
    case selectLanguage === 'en':
        console.log('Good morning');
        break;
    default: console.log('Язык не выбран')
}