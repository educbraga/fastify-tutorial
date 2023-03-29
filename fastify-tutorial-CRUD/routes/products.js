exports.productsRoutes = (fastify) => {
	// CREATE
	fastify.post('/products', function(request, reply) {
		fastify.mysql.query(
			`INSERT INTO products (id, name, price) VALUES ('${request.body.id}', '${request.body.name}', '${request.body.price}')`,
			function onResult(error, result) {
				reply.send(error || result);
			}
		)
	})

	// READ
	fastify.get('/products', function(request, reply) {
		fastify.mysql.query(
			'SELECT id, name, price FROM products',
			function onResult(error, result) {
				reply.send(error || result);
			}
		)
	})

	fastify.get('/products/:id', function(request, reply) {
		fastify.mysql.query(
			`SELECT id, name, price FROM products WHERE products.id = '${Number(request.params.id)}'`,
			function onResult(error, result) {
				reply.send(error || result)
			})
	})

	// UPDATE
	fastify.put('/products/:id', function(request, reply) {
		fastify.mysql.query(
			`UPDATE products SET name = '${request.body.name}', price = '${request.body.price}' WHERE products.id = ${Number(request.params.id)}`,
			function onResult(error, result) {
				reply.send(error || result)
			})
	})

	// DELETE
	fastify.delete('/products/:id', function(request, reply) {
		fastify.mysql.query(
			`DELETE FROM products WHERE products.id = ${Number(request.params.id)}`,
			function onResult(error, result) {
				reply.send(error || result)
			})
	})
}