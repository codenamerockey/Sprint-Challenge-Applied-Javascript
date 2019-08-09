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

let articleAPI = axios.get(
  'https://lambda-times-backend.herokuapp.com/articles'
);

const cardsContainer = document.querySelector('.cards-container');

function articleCard(obj) {
  const divCard = document.createElement('div');
  divCard.classList.add('card');

  const headline = document.createElement('div');
  headline.classList.add('headline');
  headline.textContent = `${obj.headline}`;
  divCard.appendChild(headline);

  const authorDiv = document.createElement('div');
  authorDiv.classList.add('author');
  divCard.appendChild(authorDiv);

  const imgDiv = document.createElement('div');
  imgDiv.classList.add('img-container');
  authorDiv.appendChild(imgDiv);

  const image = document.createElement('img');
  image.setAttribute('src', `${obj.authorPhoto}`);
  imgDiv.appendChild(image);

  const authorSpan = document.createElement('span');
  authorSpan.textContent = `By ${obj.authorName}`;
  authorDiv.appendChild(authorSpan);

  return divCard;
}

console.log(
  articleAPI.then(response => {
    const js = response.data.articles.javascript;
    console.log(js);
    js.forEach(article => {
      cardsContainer.appendChild(articleCard(article));
    });

    const bs = response.data.articles.bootstrap;
    console.log(bs);
    bs.forEach(article => {
      cardsContainer.appendChild(articleCard(article));
    });

    const tech = response.data.articles.technology;
    console.log(tech);
    tech.forEach(article => {
      cardsContainer.appendChild(articleCard(article));
    });

    const jq = response.data.articles.jquery;
    console.log(jq);
    jq.forEach(article => {
      cardsContainer.appendChild(articleCard(article));
    });

    const node = response.data.articles.node;
    console.log(node);
    node.forEach(article => {
      cardsContainer.appendChild(articleCard(article));
    });
    // console.log(
    //   js.forEach(object => {
    //     console.log(object.headline);
    //   })
    // );
  })
);
