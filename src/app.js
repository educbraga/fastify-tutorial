const fastify = require('fastify');

function buildApp(){
	const app = fastify();
	
	const schema = {
		response: {
			200: {
				type: 'object',
				properties: {
					message: {
						type: 'string'
					},
					// card: {
					// 	type: 'string'
					// }
				}
			}
		}
	}

	function getValueFromDatabase(){
		return {
			message: 'Hello World',
			card: '1111 2222 3333 4444'
		}
	}

	app.get('/hello', {schema}, async(request, reply) => {
		const responseFromDatabase = getValueFromDatabase()
		return reply.send(responseFromDatabase);
	});
	return app;
}

module.exports = buildApp