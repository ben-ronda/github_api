var apiKey = require('./../.env').apiKey;

getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey + '&sort=updated').then(function(response) {
    $('#publicRepos').empty();
    response.forEach(function(repository) {
      $('#repoResults').append("<li><a href=" + repository.html_url + " target='_blank'>" + repository.name + "</a></li>");
      console.log("success");
    });
  }).fail(function(error){
    alert(error.responseJSON.message);
  });
};

exports.getUsers = function(username){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('#userResults').html("<h4>Name: " + response.name + "</h4>");
    console.log(response.name);
    getRepos(username);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
