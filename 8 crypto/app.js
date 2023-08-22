const decryptor = prompt('Введите пароль для шифрования');
const password = prompt('Введите пароль');

function encryptionPassword(decryptor) {
    const array = decryptor.split('').reverse();
    const lastElement = array.pop();
    const firstElement = array.shift();
    array.push(firstElement);
    array.unshift(lastElement);
    const twoElement = array.splice(1, 1)[0];
    array.push(twoElement);
    return array.join('');
}


function decryptingPassword(decryptor, password) {
    const coded = encryptionPassword(decryptor).split('');
    const lastElement = coded.pop();
    const oneElement = coded.shift();
    coded.unshift(lastElement);
    const last = coded.pop();
    coded.push(oneElement);
    coded.unshift(last);
    coded.reverse();
    const decrypt = coded.join('');
    if (password === decrypt) {
        return true;
    } 
        return false;
}

console.log(decryptingPassword(decryptor, password));
