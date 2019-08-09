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

// created handle to headerContainer element inside index.html
const headerContainer = document.querySelector('.header-container');

function header() {
  const divHeader = document.createElement('div');
  divHeader.classList.add('header');
  headerContainer.appendChild(divHeader);

  const spanDate = document.createElement('span');
  spanDate.classList.add('date');
  spanDate.textContent = 'SMARCH 28, 2019';
  divHeader.appendChild(spanDate);

  const headerOne = document.createElement('h1');
  headerOne.textContent = 'Lambda Times';
  divHeader.appendChild(headerOne);

  const spanTemp = document.createElement('span');
  spanTemp.classList.add('temp');
  spanTemp.textContent = '98°';
  divHeader.appendChild(spanTemp);

  return divHeader;
}

headerContainer.appendChild(header());
