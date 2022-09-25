
// const age = 35;
// const ageEl = document.getElementById('age-el');
// ageEl.textContent = ageCount();

// function ageCount() {

//   if(age < 6) {
//     return ('free');
//   } else if(age < 18) {
//     return ('child discount');
//   } else if(age < 27) {
//     return ('student discount');
//   } else if(age < 67) {
//     return ('full price');
//   } else
//     return ('senior citizen discount'); 
// }

// let largestCountries = ['China', 'India', 'USA', 'Indonesia', 'Pakistan'];
// countCountries(largestCountries);

// function countCountries(array) {

//     for(let i = 0; i <= array.length; i++ )
//       console.log(' - ' + array[i]);
//     }

// let largestCountries = ['Tuvalu', 'India', 'USA', 'Indonesia', 'Monaco'];
// const list = countCountries(largestCountries);
// console.log(list);


// function countCountries(array) {
//   let newArray = [...array];
//       newArray.shift();
//       newArray.unshift('China');
//       newArray.pop();
//       newArray.push('Pakistan');
//   return newArray;        
// }

//////////////////////////////////////////////////////////////////

// let dayOfmonth = 13;
// let weekday = 'Friday';


// let today = new Date();

// let date = today.getDate();

// let dayOfweek = today.toLocaleDateString('en-US', {
//   weekday: 'long',})

// console.log(date);

// console.log(dayOfweek);

// let month = today.toLocaleDateString('en-US', {
//   month: 'long',})

// console.log(month);  


// const checkDate = ( date === dayOfmonth && dayOfweek === weekday) ? 'No' : '😆';

// console.log(checkDate);

/////////////////////////////////////////////////////////////////

// let hands = ['rock', 'paper', 'scissor'];

// // create a function that returns random item from the array.

// // get random index and item

// getHand(hands);

// function getHand(array) {
//   const randomIndex = Math.floor(Math.random() * array.length); 
//   console.log(randomIndex); 

//   const randomItem = array[randomIndex];
//   console.log(randomItem);
// }

////////////////////////////////////////////////////////
//let hex = "😀".codePointAt(0).toString(16)
//let emo = String.fromCodePoint("0x"+hex);

//console.log(hex, emo);




// converting emoji into hex string

let hexApple = '🍎'.codePointAt(0).toString(16);
let hexOrange = '🍊'.codePointAt(0).toString(16);

// console.log(hexApple);
// console.log(hexOrange);

let fruit = ['🍎', '🍊', '🍎', '🍎', '🍊'];
let appleShelf = document.getElementById('apple-shelf');
let orangeShelf = document.getElementById('orange-shelf');

//appleShelf.textContent = '🍎';

sortFruit(fruit);

function sortFruit(array) {
  for (let i = 0; i <= array.length; i++) {
    if (array[i] === '🍎') {
      appleShelf.textContent += array[i]
    } else if (array[i] === '🍊') {
      orangeShelf.textContent += array[i]
    }
  }
}