const hasLicense = true;
const age = 19;
const isDrunk = false;

if (hasLicense && age >= 18 && !isDrunk) {
    console.log('Может сесть за руль');
} else {
    console.log('Не Может сесть за руль');
}
// Второй вариант
const res = hasLicense && age >= 18 && !isDrunk ? 'Может' : 'Не может';
console.log(res);