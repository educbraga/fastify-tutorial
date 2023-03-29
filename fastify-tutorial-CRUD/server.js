// Require the framework and instantiate it

// CommonJs
const fastify = require('fastify')({
  logger: false
})

fastify.register(require('@fastify/mysql'), {
  connectionString: 'mysql://root:secret@localhost:3309/fastify-tutorial-CRUD',
})

// CREATE
fastify.post('/products', function (request, reply) {
  fastify.mysql.query(
      `INSERT INTO products (id, name, price) VALUES ('${request.body.id}', '${request.body.name}', '${request.body.price}')`,
    function onResult (error, result) {
      reply.send(error || result);
    }
  )
})

// READ
fastify.get('/products', function (request, reply) {
  fastify.mysql.query(
    'SELECT id, name, price FROM products',
    function onResult (error, result) {
      reply.send(error || result);
    }
  )
})

fastify.get('/products/:id', function (request, reply) {
  fastify.mysql.query(
    `SELECT id, name, price FROM products WHERE products.id = '${Number(request.params.id)}'`,
    function onResult (error, result) {
      reply.send(error || result)
    })
})

// UPDATE
fastify.put('/products/:id', function (request, reply) {
  fastify.mysql.query(
    `UPDATE products SET name = '${request.body.name}', price = '${request.body.price}' WHERE products.id = ${Number(request.params.id)}`,
     function onResult (error, result) {
      reply.send(error || result)
  })
})

// DELETE
fastify.delete('/products/:id', function (request, reply) {
  fastify.mysql.query(
    `DELETE FROM products WHERE products.id = ${Number(request.params.id)}`,
    function onResult (error, result) {
      reply.send( error || result )
    })
})

// Run the server!
fastify.listen({ port: 3000 }, function (error, address) {
  if (error) {
    fastify.log.error(error)
    process.exit(1)
  }
  console.log(`Server is now listening on ${address}`)
  // Server is now listening on ${address}
})