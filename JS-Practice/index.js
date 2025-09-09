// function pow(x,n) {
//     let result = x; 
//     for(let i = 1; i<n; i++) {
//         result *= x;
//     }
//     return result;
// }

// let x = prompt("Enter value of X",'');
// let n = prompt("Enter value of N",'');

// if(n<1){
//     alert("Number is negative")
// } else {
//     alert( pow(x,n) );
// }

// function add (a) {
//     return a + 7;
// }

// function mul (a,b) {
//     return a*b;
// }

// function capitalize (val) {
//     return String(val).charAt(0).toUpperCase() + String(val).slice(1)
// }

// function lastletter(val){
//     return String(val).charAt(val.length-1);
// }

// console.log(lastletter("abcd"));
// console.log(capitalize("this is a test"))
// console.log(add(2));
// console.log(mul(2,4))

// let ans = parseInt(prompt("Enter the numbers : "));

// for(let i = 1; i<=ans; i++){
//     if(i%3 === 0 && i%5 === 0) {
//         console.log("FizzBuzz");
//     } else if ( i%3 === 0 ){
//         console.log("Fizz");
//     } else if ( i%5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// const arr = ['one', 'two', 'three']

// console.log(arr)

// delete arr[0]

// console.log(arr); 

// arr.shift();

// console.log(arr)

// arr.pop(1);

// console.log(arr)

// arr.unshift("one");

// console.log(arr)

// arr.push("three");

// console.log(arr)

// const num = 5.5;

// console.log(num.toFixed(3));

// console.log(Math.round(num))

// function sumInput(){
    
//     let arr1 = [];

//     while(true){
//         let val = prompt("Enter value?",0);
//         if(val === "" || val === null || !isFinite(val)) break;
//         arr1.push(+val);
//     }

//     let sum = 0;
//     for(let arr of arr1){
//         sum += arr;
//     }
//     return sum;
// }

// alert( sumInput() )

// function getMaxSubSum(arr){

//     let sum = 0;

//     for(let i = 0; i<arr.length; i++) {
//         let newSum = 0;
//         for(let j = i; j<arr.length; j++){
//             newSum += arr[j];
//             sum = Math.max(sum,newSum);
//         }
//     }
    
//     return sum;

// }

// alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
// alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
// alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
// alert( getMaxSubSum([1, 2, 3]) ); // 6
// alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100


// function camelize(Str){
//     return Str.split('-').map( (word,index) => index == 0 ? word : word[0].toUpperCase + word.slice(1)).join('');
// }

// alert(camelize("background-color"));

// let arr = [5, 3, 8, 1];

// function filterRange(arr,a,b) {
    
//     // let arr1 = [];
//     // for(let i = 0; i<arr.length; i++){
//     //     if(arr[i]>=a && arr[i]<=b){
//     //         arr1.push(arr[i]);
//     //     }
//     // }
//     // return arr1;

//     return arr.filter(item => item>=a && item<=b)

// }

// let filtered = filterRange(arr, 1, 4);

// alert( filtered );

// alert( arr );

// let arr = [5, 3, 8, 1];

// function filterRangeInPlace(arr,a,b){
    
//     for(let i = 0; i<arr.length; i++){
//         let val = arr[i];
        
//         if(val < a || val > b){
//             arr.splice(i,1);
//             i--;
//         }
//     }

// }

// filterRangeInPlace(arr, 1, 4);

// alert( arr ); 

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a,b) => b-a);

// alert( arr ); 

// let arr = ["HTML", "JavaScript", "CSS"];

// function copySorted(arr){
//     return arr.slice().sort()
// }

// let sorted = copySorted(arr);

// alert( sorted );
// alert( arr );

// console.log(sorted);
// console.log(arr);

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(i => i.name)

// alert( names ); 

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map( user => ({
//     fullName : `${user.name} ${user.surname}`,
//     id: user.id
// }))

// alert( usersMapped[0].id )
// alert( usersMapped[0].fullName )

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// function sortByAge(arr){
//     arr.sort((a,b) => a.age - b.age)
// }

// sortByAge(arr);

// alert(arr[0].name);
// alert(arr[1].name);
// alert(arr[2].name);

// let arr = [1, 2, 3];

// function shuffle(arr){
//     arr.sort(() => Math.random() - 0.5)
// }

// shuffle(arr);
// alert(arr)

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// function getAverageAge(arr){
//     return arr.reduce((acc,curr) => acc + curr.age,0) / arr.length
// }

// alert( getAverageAge(arr) );
// console.log(getAverageAge(arr))

