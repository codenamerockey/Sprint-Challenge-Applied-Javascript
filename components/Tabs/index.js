// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//Getting the data from the server endpoint below
topicsRequest = axios.get(`https://lambda-times-backend.herokuapp.com/topics`);

//Getting a handle on the section I need to append the tabs too.
const topicSection = document.querySelector('.topics');

//Using the returned promise from the api to loop through each topic and also create each tab element as it is looping over the topics returned.
topicsRequest
  .then(response => {
    response.data.topics.forEach(topic => {
      //  creating a tabs component
      const tab = document.createElement('div');
      tab.classList.add('tab');
      tab.textContent = `${topic}`;
      topicSection.appendChild(tab);
    });
  })
  .catch(err => {
    console.log(err);
  });
