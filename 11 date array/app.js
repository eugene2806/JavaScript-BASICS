const array = ['10/02/2022', '11/03/2022', 'test', '31-02-2022', '32-2022', '30-09-2022', '08/31/2022'];


function parserDate(array) {
   
const dateUSA = array.map(el => {
   return el.split('/');
}).filter(el => {
   if (el.length === 3) {
      if (Number(el[1]) > 0 && Number(el[1]) < 32 && Number(el[0]) > 0 && Number(el[0]) < 13) {
         return el;
      };
   };
});

const dateRUS = array.map(el => {
   return el.split('-');
}).filter(el => {
   if (el.length === 3) {
      if (Number(el[0]) > 0 && Number(el[0]) < 32 && Number(el[1]) > 0 && Number(el[1]) < 13) {
         return el;
      };
   };
});

const res = dateUSA.concat(dateRUS).map(el => el.join('-'));
return res;
};


console.log(parserDate(array));