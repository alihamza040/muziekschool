import React from 'react';
import ReactDOM from 'react-dom';
const { getQuote, getRandomQuote } = require('mijnapplicatie/src/inspirational-quotes/lib'),
quote = getQuote();


console.log(`Here's a quote by "${quote.author}": "${quote.text}"\n`); // will return quote with author

console.log(getRandomQuote()); // will return a random quote

console.log(getQuote({ author: false })); // will return quote without author

ReactDOM.render(`Here's a quote by "${quote.author}": "${quote.text}"\n`, document.getElementById('root'));
