/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

const name = 'douglas';
const email = 'douglas@codeup.com';
const languages = ['html', 'css', 'javascript', 'java', 'c#', 'ruby'];

users.push({
  name,
  email,
  languages
});

let emails = [];
let names = [];

users.forEach( user => emails.push(user.email) );
console.log(emails);

users.forEach( user => names.push(user.name) );
console.log(names);

let developers = [];
users.forEach( user => {
  const {name, email, languages} = user;
  developers.push(`${name}'s email is ${email} ${name} knows ${languages.join(', ')}`);
});

console.log(developers);

// TODO: Use `let` for the following variable
var list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
developers.forEach(function (developer) {

  // TODO: rewrite the assignment below to use template strings
  list += '<li>' + developer + '</li>';
});
list += '</ul>';
