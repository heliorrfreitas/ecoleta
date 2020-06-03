import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('AEEE');

    response.json(['diego', 'rui', 'robson', 'renan']);
});

app.listen(3333);

// npm install express -D 
// npm install ts-node -D
// npm install ts-node-dev -D