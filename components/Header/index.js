// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

/** Code Starts Here.... **/

// created handle to headerContainer AKA (header-container) element inside index.html
const headerContainer = document.querySelector('.header-container');

//Function created for the header component
function header() {
  //create div container for all other elements to sit inside of.
  const divHeader = document.createElement('div');
  divHeader.classList.add('header');
  headerContainer.appendChild(divHeader);

  //create span element to hold the date.
  const spanDate = document.createElement('span');
  spanDate.classList.add('date');
  spanDate.textContent = 'SMARCH 28, 2019';
  divHeader.appendChild(spanDate);

  //create h1 element for the Title of the page
  const headerOne = document.createElement('h1');
  headerOne.textContent = 'Lambda Times';
  divHeader.appendChild(headerOne);

  //create a span tag the will hold the temperature with the html entity.
  const spanTemp = document.createElement('span');
  spanTemp.classList.add('temp');
  spanTemp.textContent = '98°';
  divHeader.appendChild(spanTemp);

  //return the completed div with all elements created inside when function is invoked.
  return divHeader;
}

//This line of code appends the div created inside the function named header() and it is appended to the parent container.
headerContainer.appendChild(header());
