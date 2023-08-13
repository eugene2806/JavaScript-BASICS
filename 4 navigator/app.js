const positionLat = 2;
const positionLong = 2;
const adressLat = 10;
const adressLong = 10;
const distance = Math.sqrt((adressLat - positionLat) ** 2 + (adressLong - positionLong) ** 2);
console.log(`Расстояние до конечного местоположения ${distance}`);