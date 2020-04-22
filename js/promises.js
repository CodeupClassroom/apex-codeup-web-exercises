function getUserLastCommit(username) {
    let url = `https://api.github.com/users/${username}/events/public`;

    return fetch(url, {headers: {'Authorization': `token ${GITHUB_TOKEN}`}})
        .then(response => response.json()
            .then( listOfEvents => {
                for(let event of listOfEvents){
                    if(event.type === 'PushEvent'){
                        return event.created_at;
                    }
                }
            })
        )
}

getUserLastCommit('fmendozaro')
    .then( lastCommitDate => console.log('lastCommitDate',lastCommitDate));

getUserLastCommit('douglas-codeup')
    .then( lastCommitDate => document.body.innerHTML = `${lastCommitDate} lastCommitDate`);
