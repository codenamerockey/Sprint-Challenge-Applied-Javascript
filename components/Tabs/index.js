// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

topicsRequest = axios.get(`https://lambda-times-backend.herokuapp.com/topics`);

const topicSection = document.querySelector('.topics');
topicsRequest
  .then(response => {
    response.data.topics.forEach(topic => {
      //  create a tabs component
      const tab = document.createElement('div');
      tab.classList.add('tab');
      tab.textContent = `${topic}`;
      topicSection.appendChild(tab);
    });
  })
  .catch(err => {
    console.log(err);
  });
