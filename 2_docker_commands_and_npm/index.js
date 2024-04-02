const express = require('express')

const app = express();

app.get('/', (request, response) => {
	response.send ('Ankur says Hello World !!!');
});

app.listen(6000, () => {
 console.log('Listening on internal port : 6000, external port: 3000');
});

