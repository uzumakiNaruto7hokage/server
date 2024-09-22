console.log('Hello, world!');
function sendTask1() {
  let url = "https://2c0a260c-302f-4cbe-93f7-61ce2d62a563-00-3d583mmvzsbap.sisko.replit.dev/broadcast"
  let data = {
    type:"CMD",
    code:"pip install rich",
    repeating:false,
  }
  fetch(url, {
    method: 'POST', // Specify the request type
    headers: {
        'Content-Type': 'application/json',  // Specify the content type
    },
    body: JSON.stringify(data),  // Convert the data to JSON
  })
  .then(response => response.json())  // Parse the JSON response from the server
  .then(result => {
    console.log('Success:', result);  // Handle the success response
  })
  .catch(error => {
    console.error('Error:', error);  // Handle errors
  });
}

function sendTask2() {
  let url = "https://2c0a260c-302f-4cbe-93f7-61ce2d62a563-00-3d583mmvzsbap.sisko.replit.dev/broadcast"
  let data = {
    type:"CMD",
    code:"pip install colorma",
    repeating:false,
  }
  fetch(url, {
    method: 'POST', // Specify the request type
    headers: {
        'Content-Type': 'application/json',  // Specify the content type
    },
    body: JSON.stringify(data),  // Convert the data to JSON
  })
  .then(response => response.json())  // Parse the JSON response from the server
  .then(result => {
    console.log('Success:', result);  // Handle the success response
  })
  .catch(error => {
    console.error('Error:', error);  // Handle errors
  });
}

function sendTask3() {
  let url = "https://2c0a260c-302f-4cbe-93f7-61ce2d62a563-00-3d583mmvzsbap.sisko.replit.dev/broadcast"
  let data = {
    type:"python",
    code:"print(variable)",
    repeating:false,
  }
  fetch(url, {
    method: 'POST', // Specify the request type
    headers: {
        'Content-Type': 'application/json',  // Specify the content type
    },
    body: JSON.stringify(data),  // Convert the data to JSON
  })
  .then(response => response.json())  // Parse the JSON response from the server
  .then(result => {
    console.log('Success:', result);  // Handle the success response
  })
  .catch(error => {
    console.error('Error:', error);  // Handle errors
  });
}