const array = 
['10/02/2022', '31/06/2022', '11/03/2022', 'test', '20-02-2022', '32-2022', '30-09-2022', '31-09-2022',
'08/31/2022', '29-02-2023', '31-04-2010'];

function checkValidDate(date) {

   if (Number(date[0]) > 0 && Number(date[0]) < 32 && Number(date[1]) > 0 && Number(date[1]) < 13) {
      switch(date[1]) {
         case '04':
         case '06':
         case '09':
         case '11':
            if (Number(date[0]) < 31) {
               return date;
            };
            break;
         case '02': 
            if (Number(date[2]) % 4 === 0 && Number(date[2]) % 100 === 0) {
               if (Number(date[2]) % 400 === 0) {
                  if (Number(date[0]) === 29) {
                     return date;
                  } else {
                     if (Number(date[0]) === 28) {
                        return date;
                     };
                  };
               };
            } else {
               if (Number(date[2]) % 4 != 0) {
                  if (Number(date[0]) === 28) {
                     return date;
                  };
               } else {
                  if (Number(date[0]) === 29) {
                     return date;
                  };
               };
               
            };
            break;
         default: return date;
      };
   };
};

function parserDate(array) {
   
const dateUSA = array.map(el => {
   return el.split('/');
}).filter(el => {
   if (el.length === 3) {
      [el[0], el[1]] = [el[1], el[0]];
      const validDate = checkValidDate(el);
      return validDate;   
      };
});

const dateRUS = array.map(el => {
   return el.split('-');
}).filter(el => {
   if (el.length === 3) {
      const validDate = checkValidDate(el);
      return validDate; 
   };
});

const res = dateUSA.concat(dateRUS).map(el => el.join('-'));
return res;
};


console.log(parserDate(array));