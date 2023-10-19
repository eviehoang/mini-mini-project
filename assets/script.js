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
       const html = 
`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="/assets/style.css">
    <title>Mini Project: Student Inquriing</title>
</head>

<body>
<!-- Main -->
<main class="d-flex justify-content-center m-5">
<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${response.username}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${response.location}</h6>
      <p class="card-text">${response.bio}</p>
      <a href="#" class="card-link">${response.gitLink}</a>
      <a href="#" class="card-link">${response.linkedin}</a>
    </div>
  </div>
</main>
<!-- bootstrap -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
    integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
    crossorigin="anonymous"></script>
<!-- our script -->
<script src="/assets/script.js"></script>
</body>

</html>
`
console.log(html)


 fs.writeFile('something.html', html, (err) =>
   err ? console.error(err) : console.log('Success!')
  );

    });





