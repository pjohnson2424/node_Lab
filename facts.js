const factList = {
 factArray: [
        {
            fact: 'I love flying my drone and exploring the world like a bird.'
        },

        {
            fact: 'Basketball rules all other sports.'
        },

        {
           fact: 'My dog Hazel is a brown Border Collie.'
        }
    ],

    randomFact: (arr) => {
        let index = Math.floor(Math.random() * arr.length)
        return arr[index].fact;
    },
};

module.exports = factList;