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

// ----------------------------------------------Seventh exercise------------------------------------------------
function fizzbuzz(arr) {
    const output = [];
  
    arr.forEach((number) => {
      if (number % 3 === 0 && number % 5 === 0) {
        output.push("Fizz Buzz");
      } else if (number % 3 === 0) {
        output.push("Fizz");
      } else if (number % 5 === 0) {
        output.push("Buzz");
      } else {
        output.push(number);
      }
    });
  
    return output;
  }

  let array = [1,2,3,4,5,6,7,8];
  fizzbuzz(array);
  

// --------------------------------program to find the factorial of a number--------------------------------------

function factorial(x) {
    // if number is 0
    if (x == 0) {
        return 1;
    }
    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}


factorial(5);

// take input from the user
const num = prompt('Enter a positive number: ');

// calling factorial() if num is positive
if (num >= 0) {
    const result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}
else {
    console.log('Enter a positive number.');
}