console.log("Hello World!\n==========\n");



// Exercise 1 Section
// console.log("EXERCISE 1:\n==========\n");

// for (let i = 1; i <= 100; i++){
//     if (i % 2 == 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// // Exercise 2 Section
// console.log("EXERCISE 2:\n==========\n");

// for (let j = 1; j < 100; j++)
// {
//     if (j % 3 == 0 && j % 5 == 0) 
//     {
//         console.log(`${j} = FIZZBUZZ`)
//     }
//     else if(j % 3 == 0) 
//     {
//         console.log(`${j} = FIZZ`) 
//     } 
//     else if (j % 5 == 0)
//     {
//         console.log(`${j} = BUZZ`)
//     }
//     else 
//     {
//         console.log(`${j}`)
//     }
// }

// Exercise 3 Section
// console.log("EXERCISE 3:\n==========\n");
// let a = 1;

// while (a <= 100) 
// {
//     if (a % 2 != 0) {
//          console.log(a);
//     }
//     a++;
// }


// let b = 1;

// do {
//     if (b % 3 == 0 && b % 5 == 0) 
//     {
//         console.log(`${b} = FIZZBUZZ`)
//     }
//     else if(b % 3 == 0) 
//     {
//         console.log(`${b} = FIZZ`) 
//     } 
//     else if (b % 5 == 0)
//     {
//         console.log(`${b} = BUZZ`)
//     }
//     else 
//     {
//         console.log(`${b}`)
//     }
//     b++;
                    
//     } while (b <= 100);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);

let number = false;

for (let i = 1; i <= n; i++) 
{
    if (i == value) 
    {
        console.log(`Found ${i}!`)
        number = true;
        break;
    }
    else
    {
        number = false;
    }
   
}
if (number == false) 
{
    console.log(`Did not find ${value}.`)
    
}

// // Exercise 5 Section
// console.log("EXERCISE 5:\n==========\n");

// let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
// let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
// let m = Math.round(Math.random() * (1000 - 1) + 1);
// let start = Math.round(Math.random() * (10 - 1) + 1);

// for (let i = start; i <= m; i++) 
// {
//     if (i % fizzDivisor == 0 && i % buzzDivisor == 0) 
//     {
//         console.log(`${i} = FIZZBUZZ`)
//     }
//     else if(i % fizzDivisor == 0) 
//     {
//         console.log(`${i} = FIZZ`) 
//     } 
//     else if (i % fizzDivisor == 0)
//     {
//         console.log(`${i} = BUZZ`)
//     }
//     else 
//     {
//         console.log(`${i}`)
//     }
    
// }