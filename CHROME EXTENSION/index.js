//chrome://extensions/
let myLeads = [];
//let oldLeads = [];
const inputBtn = document.getElementById('input-btn');
const deleteBtn = document.getElementById('delete-btn');
const saveTabBtn = document.getElementById('tab-btn');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

saveTabBtn.addEventListener('click', function () {
  chrome.tabs.query({ active: true, lastFocusedWindow: true },
    function (tabs) {
      myLeads.push(tabs[0].url);
      localStorage.setItem('myLeads', JSON.stringify(myLeads));
      render(myLeads);
    });
});

function render(leads) {
  let listItems = '';
  for (let i = 0; i < leads.length; i++) {

    listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>
    `;

  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener('dblclick', function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener('click', function () {
  if (inputEl.value === '') {
    alert('Invalid Input')
    return;
  }
  myLeads.push(inputEl.value);
  inputEl.value = '';
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});




// Storing an array in local Storage

//localstorage.names = JSON.stringify(names);

// Retrieving string from local storage and coverting into an array.

//var storedNames = JSON.parse(localStorage.names);