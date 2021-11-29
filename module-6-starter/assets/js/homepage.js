var userFormE1 = document.querySelector("#user-form");
var nameInputE1 = document.querySelector("#username");

var formSubmitHandler = function(event) {
  event.prevenDefault();
  console.log(event);
};

//get value from input element
var username = nameInputE1.value.trim();

if (username) {
  getUserRepos(username)
  nameInputE1.value = "";
} else {
  alert("Please enter Github username");
}

userFormE1.addEventListener("submit", formSubmitHandler);


var getUserRepos = function(user) {
    // format the github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";
  
    // make a get request to url
    fetch(apiUrl).then(function(response) {
      console.log(response);
      response.json().then(function(data) {
        console.log(data);
      });
    });
  };
  
  getUserRepos("lernantino");
  