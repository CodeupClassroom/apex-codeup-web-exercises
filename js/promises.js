

function getUserLastCommit(username) {
    let url = `https://api.github.com/users/${username}/events/public`;

    return fetch(url, {headers: {'Authorization': `token ${GITHUB_TOKEN}`}})
        .then(response => response.json()
            .then( data => data[0].created_at )
        )
}

getUserLastCommit('fmendozaro');
getUserLastCommit('douglas-codeup');

// later on...
//
// getGithubUsernames().then( users => {
//     users.forEach( userObj => {
//         // do something with each username
//         console.log(userObj.login);
//     });
// }).catch(error => console.error(error));


