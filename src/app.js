const fastify = require('fastify');

function buildApp(){
	const app = fastify();
	
	app.get('/hello', async(request, reply) => {
		return reply.send({
			message: 'hello world' 
		});
	});
	return app;
}

module.exports = buildApp