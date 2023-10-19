const inquirer = require('inquirer')
const fs = require('fs')
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'Where are you located',
            name: 'location',
        },
        {
            type: 'input',
            message: 'Give 1 fun fact about yourself.',
            name: 'bio',
        },
        {
            type: 'input',
            message: 'What is your github url?',
            name: 'gitLink',
        },
        {
            type: 'input',
            message: 'What is your linkedin url?',
            name: 'linkedin',
        },
    ])
    .then((response) => {
        console.log(response)
        console.log(html)
        html

    });
      const html = 
`<main class="d-flex justify-content-center m-5">
<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${response.username}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${response.location}</h6>
      <p class="card-text">${response.bio}</p>
      <a href="#" class="card-link">${response.gitLink}</a>
      <a href="#" class="card-link">${response.linkedin}</a>
    </div>
  </div>
</main>`






 fs.writeFile('index.html', html, (err) =>
   err ? console.error(err) : console.log('Success!')
  );