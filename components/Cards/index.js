// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

/**Code Starts Here**/

//Getting the data from the server endpoint below
let articleAPI = axios.get(
  'https://lambda-times-backend.herokuapp.com/articles'
);

//Getting a handle on the section I need to append the tabs too.
const cardsContainer = document.querySelector('.cards-container');

//Function created for the card component;
function articleCard(obj) {
  //create div container element for all other elements to sit inside of.
  const divCard = document.createElement('div');
  divCard.classList.add('card');

  //create div container  element for headline
  const headline = document.createElement('div');
  headline.classList.add('headline');
  headline.textContent = `${obj.headline}`; // populates the data from the server when the object is passed as an argument to the function
  divCard.appendChild(headline);

  //create div container for author section
  const authorDiv = document.createElement('div');
  authorDiv.classList.add('author');
  divCard.appendChild(authorDiv);

  // create div container for author image
  const imgDiv = document.createElement('div');
  imgDiv.classList.add('img-container');
  authorDiv.appendChild(imgDiv);

  // create image element for author photo
  const image = document.createElement('img');
  image.setAttribute('src', `${obj.authorPhoto}`); // populates the data from the server when the object is passed as an argument to the function
  image.setAttribute('alt', 'picture of the author');
  imgDiv.appendChild(image);

  // create span element to hold authors name.
  const authorSpan = document.createElement('span');
  authorSpan.textContent = `By ${obj.authorName}`; // populates the data from the server when the object is passed as an argument to the function
  authorDiv.appendChild(authorSpan);

  //return the entire div with all the elements created inside when function is invoked
  return divCard;
}

//Using the returned promise from the api to loop through each article object/array and also append the function that creates the cards to the Dom container holding it. Within that function the object is being passed as an argument to the function, which is populating the data, based on the textContent fields and src attribute inside the function.
articleAPI.then(response => {
  //Individual object data structure
  const js = response.data.articles.javascript;
  console.log(js);
  js.forEach(article => {
    cardsContainer.appendChild(articleCard(article)); //card being appended to the DOM
  });

  //Individual object data structure
  const bs = response.data.articles.bootstrap;
  console.log(bs);
  bs.forEach(article => {
    cardsContainer.appendChild(articleCard(article)); //card being appended to the DOM
  });

  //Individual object data structure
  const tech = response.data.articles.technology;
  console.log(tech);
  tech.forEach(article => {
    cardsContainer.appendChild(articleCard(article)); //card being appended to the DOM
  });

  //Individual object data structure
  const jq = response.data.articles.jquery;
  console.log(jq);
  jq.forEach(article => {
    cardsContainer.appendChild(articleCard(article)); //card being appended to the DOM
  });

  //Individual object data structure
  const node = response.data.articles.node;
  console.log(node);
  node.forEach(article => {
    cardsContainer.appendChild(articleCard(article)); //card being appended to the DOM
  });
  // console.log(
  //   js.forEach(object => {
  //     console.log(object.headline);
  //   })
  // );
});
