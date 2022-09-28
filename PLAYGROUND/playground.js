// const welcomeEl = document.getElementById('welcome-el');

// function greetUser(greeting, name, emoji) {
//   welcomeEl.textContent = `
//   ${greeting}, ${name}  ${emoji}
// `
// }

// greetUser('Hello', 'James', '😝');

// addNumber(9, 4);
// function addNumber(a, b) {
//   return a + b;
// }

// getFirst(9, 1, 2, 3);

// function getFirst(...array) {
//   console.log(array[2]);
// };

//////////////////////////////////////////////////////////////////////
//   -- CHALLENGES  --

// CHALLENGE 1

// SETTING THE STAGE
// let player = 'Per';
// let opponent = 'Nick';
// const game = 'AmazingFighter';
// let points = 0;
// let hasWon = false;

// // PLAYING THE GAME
// points += 100;
// hasWon = false;

// // ANNOUNCING THE WINNER
// if (hasWon) {
//   console.log(`
//   ${player} got ${points} points and won the ${game} game!'
//   `);

// } else {
//   console.log(`
//   The winner is ${opponent} ! ${player} lost the game
//   `);
// }

////////////////////////////////////////////////////////////////////////
//CHALLENGE 2

// let myCourses = ['Learn CSS Animations', 'UI Design Fundamentals', 'Intro to Clean Code'];

// function getCourses(array) {
//   for (let i = 0; i < array.length; i++)
//     return array[2];
// }

// const logCourse = getCourses(myCourses);
// console.log(logCourse);

// localStorage.setItem('Practice', logCourse);

// const getFromLocal = localStorage.getItem('Practice');

// console.log(getFromLocal);

////////////////////////////////////////////////////////////
// CHALLENGE 3

// let data = [
//   {
//     player: 'Jane',
//     score: 52
//   },
//   {
//     player: 'Mark',
//     score: 41
//   }
// ];

// //console.log(date.score[0]);

// const fetchBtn = document.getElementById('fetch-btn');

// fetchBtn.addEventListener('click', function () {
//   console.log(data[0].score, data[0].player);
// });
////////////////////////////////////////////////////////////////

//CHALLENGE 3

//

// const sentence = generateSentence("best fruits", ['apple', 'bannans']);


// function generateSentence(desc, array) {
//   let baseString = `
//   The ${array.length} ${desc} are
//   `
//   const lastindex = array.length - 1;

//   for (let i = 0; i < array.length; i++) {
//     if (i === lastindex) {
//       baseString += array[i] + '. ';
//     } else {
//       baseString += array[i] + ', ';
//     }
//   };
//   return baseString;
// }

// console.log(sentence);

///////////////////////////////////////////////////////
// CHALLENGE 4
// rendering images

// const imgs = [
//   'images/hip1.jpg',
//   'images/hip2.jpg',
//   'images/hip3.jpg',
// ];

// const container = document.getElementById('container');

// let btn = document.createElement("button");
// btn.innerHTML = "Submit";
// btn.type = "submit";
// btn.id = "formBtn";
// document.body.appendChild(btn);

// btn.addEventListener('click', function () {
//   renderImages(imgs);
// });

// function renderImages(array) {
//   let imgsDOM = '';
//   for (let i = 0; i < array.length; i++) {
//     imgsDOM += ` <img alt='Employee in the company' class='team-img' src="/${array[i]}"> `
//   }
//   container.innerHTML = imgsDOM;
// }

/////////////////////////////////////////////////////////////////////
// // CHALLENGE 5  -- Rounding numbers

// const totalPrice = 420.69235632455
// const btn = document.getElementById('purchase-btn');
// btn.textContent = `Buy \u20AC ${totalPrice.toFixed(2)}`;

/////////////////////////////////////////////////////////////////////
// CHALLENGE 6 -- covert string to numbers

// // 1st option
// //const totalPrice = JSON.parse('420.69235632455');

// const totalPrice = '420.69235632455';
// const btn = document.getElementById('buy-btn');

// // 2nd option
// btn.textContent = `Buy \u20AC ${Number(totalPrice).toFixed(2)}`;