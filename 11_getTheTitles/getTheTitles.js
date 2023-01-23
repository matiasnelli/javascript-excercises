const getTheTitles = function(array) {
    return array.map(book => book.title)
};

const books =[
    {
        title: 'The Little Prince',
        author: 'Antoine de Saint-Exupéry'
    },
    {
        title: 'It',
        author: 'Stephen King'
    }
]

console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;