const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World! - Balraj');
});

app.get('/demo', (req, res) => {
	// custom header
	res.set('X-full-stack', '4life');
	// status code
	res.status(418);
	// response back
	res.send('I prefer coffee');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
