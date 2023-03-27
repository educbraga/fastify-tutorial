const t = require('tap');
const app = require('../src/app.js')

const {test} = t;

test('should return hello world', async t => {
	const fastify = app();
	t.teardown(async () => {
		await fastify.close();
	});

	const response = await fastify.inject({
		method: 'GET',
		path: '/hello'
	});

	t.same(response.statusCode, 200);
	t.same(response.json(), {
		message: "hello world"
	})
});