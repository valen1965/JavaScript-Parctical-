// const divEl = document.getElementById('div-el');

// divEl.innerHTML = '<button id="buy-btn">Buy !</button >';
// const buyBtn = document.getElementById('buy-btn');

// buyBtn.addEventListener('click', function () {
//   divEl.innerHTML += '<p>"Thanks for buying"</p>'
// });

let myLeads = [];
const inputBtn = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');

inputBtn.addEventListener('click', function () {
  myLeads.push(inputEl.value);
  inputEl.value = '';
  renderLeads();
});

function renderLeads() {
  let listItems = '';
  for (let i = 0; i < myLeads.length; i++) {
    // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>";

    // Using template string

    listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>
    `;

  }
  ulEl.innerHTML = listItems;
}



// alternative way to append HTML elements
// const li = document.createElement("li")
// li.textContent = myLeads[i];
// ulEl.append(li);


/////////////////////////////////////////////

// Practical tasks on template strings/literals

// const recipient = "james";
// const sender = 'Vlad';
// // Create a new variable, sender, and set its value to your name.
// // Refactore the email string to use template string

// //const email = "Hey" + recipient + "! How is it going? Cheers Vlad";


// const email = `
          
//           Hey ${recipient}! 
//           How is it going? 
//           Cheers ${sender}
// `;

// console.log(email);