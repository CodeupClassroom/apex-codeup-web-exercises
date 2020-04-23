console.log('map-filter-reduce-lec');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('numbers before we do anything.', numbers);

// var evens = [];
//
// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         evens.push(numbers[i]);
//     }
// }
//
// console.log(evens);
//
// var odds = [];
//
// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//         odds.push(numbers[i]);
//     }
// }
//
// console.log(odds);

// What does filter do?
// function arrayFilter(array, checkFunction) {
//     const result = [];
//
//     for(let index = 0; index < array.length; index++) {
//         const value = array[index];
//         if(checkFunction(value, index, array)){
//             result.push(value);
//         }
//     }
//
//     return result;
// }

// const evens = arrayFilter(numbers, function(value){
//     return value % 2 === 0
// });
//
// console.log('evens from arrayFilter', evens);
//
// const odds = arrayFilter(numbers, (number) => number %2 !== 0);
//
// console.log('odds from arrayFilter', odds);

// const evens = numbers.filter(function(value){
//    return value % 2 === 0;
// });

const evens = numbers.filter( number => number % 2 === 0 );
console.log('evens from Array.filter', evens);
const odds = numbers.filter( number => number % 2 !== 0 );
console.log('odds from Array.filter', odds);

console.log('Numbers array after filter.', numbers);

// What does map do?
// function arrayMap(array, transformFunction) {
//     const result = [];
//
//     for (let index = 0; index < array.length; index++){
//         const value = array[index];
//         result.push(transformFunction(value, index, array))
//     }
//
//     return result;
// }
//
// const squares = arrayMap(numbers, number => number ** 2);
// console.log(squares);

const plusOnes = numbers.map(function(number){
    return number + 1;
});

const doubles = numbers.map( number => number * 2 );

console.log('plusOnes', plusOnes);
console.log('doubles', doubles);
console.log('Numbers array after map.', numbers);

//sum numbers using a for loop.
// let sumOfAllNumbers = 0;
//
// for (let i = 0; i < numbers.length; i++){
//     const value = numbers[i];
//     sumOfAllNumbers += value;
// }
//
// console.log('Using a for loop sum.', sumOfAllNumbers);

const sumOfAllNumbers = numbers.reduce(function(acc, value){
    return acc + value;
}, 0);

console.log('Sum of all numbers using reduce.', sumOfAllNumbers);

const salesPeople = [
    {name: 'Jim Halpert', sales: 100},
    {name: 'Dwight Schrute', sales: 50},
    {name: 'Andy Bernard', sales: 150},
];

const totalSales = salesPeople.reduce((total, person)=>{
    console.log('total from in reduce', total);
   return total + person.sales;
}, 300);
console.log('totalSales using reduce.', totalSales);
console.log('totalSales average after reduce.', totalSales/salesPeople.length);

//Can I use map instead of reduce?
const mapOfSales = salesPeople.map( person => person.sales + 10);
console.log(mapOfSales);

var mbpModels = [
    {
        id: 'MA464LL/A',
        desc: 'Apple MacBook Pro 15-Inch "Core Duo" 2.0',
        model: 'A1150',
        year: '2006',
        price: 3199
    },
    {
        id: 'MB986LL/A',
        desc: 'Apple MacBook Pro 15-Inch "Core 2 Duo" 2.8',
        model: 'A1286',
        year: 'Mid-2009',
        price: 2799
    },
    {
        id: 'MD311LL/A ',
        desc: 'Apple MacBook Pro 17-Inch "Core i7" 2.4',
        model: 'A1297',
        year: 'Late-2011',
        price: 2399
    },
    {
        id: 'MGXA2LL/A',
        desc: 'Apple MacBook Pro 15-Inch "Core i7" 2.2',
        model: 'A1398',
        year: 'Mid-2014',
        price: 2299
    }
];

// const budgetMacBookPros = mbpModels.filter( macBook => macBook.price <= 2500 );
// console.log(budgetMacBookPros);
//
// const budgetMacBookProsPrices = budgetMacBookPros.map( macBookPro => macBookPro.price );
// console.log(budgetMacBookProsPrices);
//
// const sumOfBudgetMacBookProPrice = budgetMacBookProsPrices
//     .reduce((total, price) => total + price , 0 );

const sumOfBudgetMacBookProPrices = mbpModels
    .filter( macBook => macBook.price <= 2500 )
    .map(  macBookPro => macBookPro.price )
    .reduce((total, price) => total + price , 0 );

console.log(sumOfBudgetMacBookProPrices);