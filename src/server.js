const app = require('./app')();

app.listen({port: 3000})
	.then(() => {console.log('Server started on port 3000')})
	.catch(error => {console.log(error)})
