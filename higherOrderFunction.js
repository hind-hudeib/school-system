// ----------------------------------------------Fifth exercise------------------------------------------------
function arrayPower(arr) {
    const map1 = arr.map(x => Math.pow(2, x));
    console.log(map1);
}

array = [1, 2, 3, 4, 5, 6, 7];
arrayPower(array);







// ----------------------------------------------Sixth exercise------------------------------------------------
function evenOdd(array) {
    return array.map(function(num) {
      if (typeof num !== 'number') {
        return "N/A";
      } else if (num % 2 === 0) {
        return "even";
      } else {
        return "odd";
      }
    });
  }

const arr2 = [1,2,3,4,'hind',5,6,7,8];


evenOdd(arr2);

