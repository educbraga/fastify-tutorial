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

// READ - GET ALL
fastify.get('/products', function (request, reply) {
  fastify.mysql.query(
    'SELECT id, name, price FROM products',
    function onResult (error, result) {
      reply.send(error || result);
    }
  )
})

// READ - SHOW ONE
fastify.get('/products/:id', function (request, reply) {
  fastify.mysql.query(
    `SELECT id, name, price FROM products WHERE products.id = '${Number(request.params.id)}'`,
    )
})

fastify.put('/products', function (request, reply) {
  reply.send({ hello: 'world' })
})

fastify.delete('/products', function (request, reply) {
  reply.send({ hello: 'world' })
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