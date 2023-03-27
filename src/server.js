const fastify = require('fastify');

const app = fastify();

app.get('/hello', async(request, reply) => {
	return reply.send({ message: 'hello world' });
})

app.listen({port: 3000})
	.then(() => {
		console.log('server started on port 3000')
	})
	.catch(error => {
		console.log(error)
	})