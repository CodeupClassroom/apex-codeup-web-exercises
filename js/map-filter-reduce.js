console.log('map filter reduce exercise');

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const moreThanThreeLanguages = users.filter( user => user.languages.length >= 3 );
console.log(moreThanThreeLanguages);

const userEmails = users.map( user => user.email );
console.log(userEmails);

const totalYearsOfExp = users.reduce((totalYears, user) => totalYears + user.yearsOfExperience , 0);

console.log('Total years of exp', totalYearsOfExp);
console.log('Average years of exp', totalYearsOfExp/userEmails.length);

const longestEmail = users.reduce((longest, user) => {
    if (user.email.length > longest.length) {
        return user.email;
    } else {
        return longest;
    }
}, '');

console.log(longestEmail);

const everyone = users.reduce((names, user) => {
    if (names !== '') {
        names += ', ';
    }
    return names + user.name;
}, '');

console.log(everyone);

//Using join.
console.log('Using join instead of reduce.', users.map( user => user.name ).join( ', ' ));

const allLanguages = users.reduce((languages, user) => {
    user.languages.forEach((language) => {
        if(!languages.includes(language)){ // If we don't already have the language
            languages.push(language)       // Add it here.
        }
    });
    return languages;
}, []);

console.log(allLanguages);