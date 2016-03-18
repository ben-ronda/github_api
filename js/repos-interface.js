var getUsers = require('./../js/repos.js').getUsers;

$(document).ready(function(){
  $('#find').click(function(event){
    event.preventDefault();
    var username = $('#username').val();
    getUsers(username);
  });
});
