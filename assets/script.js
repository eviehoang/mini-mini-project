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
        response.confirm === response.password
            ? console.log('Success!')
            : console.log('You forgot your password already?!')
    }
    );