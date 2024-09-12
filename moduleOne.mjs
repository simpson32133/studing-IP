const sum = (a, b) => a + b;
const mult = (a, b) => a * b;
export {sum, mult};

class Comment {
    constructor(text) {
        this.text = text;
        this.votesQty = 0;
    }

    upvote() {
        this.votesQty += 1;
    }

    static mergeComments(first, second) {
        return `${first}, ${second}`;
    }
}

const comment = new Comment('New comment');

console.log(comment instanceof Comment);
console.log(comment instanceof Object);

comment.upvote();
console.log(comment.votesQty);
comment.upvote();
console.log(comment.votesQty);



// Расширения других классов


fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response=> response.json())
    .then(json => {console.log(json)})
    .catch(error => console.error(error));

const getData = (url) =>
    new Promise((resolve, reject) => {
        fetch(url)
        .then(response => response.json())
        .then( json => resolve(json))
        .catch(error => reject(error))
    })


getData('https://jsonplaceholder.typicode.com/todos')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))




setTimeout(() => console.log('ghbdtn'), 2100)