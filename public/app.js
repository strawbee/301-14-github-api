// Let's make an AJAX call to the GitHub API and then do a simple render of the data into the DOM
// token, port, npm install

// $.ajax({
//   url: 'https://api.github.com/user/repos?type=owner',
//   method: 'GET',
//   headers: {
//     Authorization: 'token copy-pasta-your-token-here'
//   }
// })
//   .then(
//     data => data.forEach(repo =>
//       $('#results').append(`<h3>${repo.name}</h3><p>${repo.description}</p><hr>`)),
//     err => console.error(err.status, err.statusText, 'is the way my stuff is broken'));


$.get('/github/user/repos')
  .then(
    data => JSON.parse(data).forEach(repo =>
      $('#results').append(`<h3>${repo.name}</h3><p>${repo.description}</p><hr>`)),
    err => console.error(err.status, err.statusText, 'is the way my stuff is broken'));
