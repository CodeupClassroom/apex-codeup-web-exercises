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


const wait = miliseconds => {
    return new Promise( (resolved, reject) => {
        setTimeout( () => {
            resolved(miliseconds);
        }, miliseconds);
    });
};

wait(4000).then( (ms) => console.log(`You'll see this after ${ms/1000} seconds`));

wait(5000).then( (ms) => console.log(`You'll see this after ${ms/1000} seconds`));

wait(10000).then( (ms) => console.log(`You'll see this after ${ms/1000} seconds`));
