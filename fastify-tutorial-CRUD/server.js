// Require the framework and instantiate it

// CommonJs
const fastify = require('fastify')({
  logger: false
})

fastify.register(require('@fastify/mysql'), {
  connectionString: 'mysql://root:secret@localhost:3309/fastify-tutorial-CRUD',
})

require('./routes')(fastify);

// Run the server!
fastify.listen({ port: 3000 }, function (error, address) {
  if (error) {
    fastify.log.error(error)
    process.exit(1)
  }
  console.log(`Server is now listening on ${address}`)
  // Server is now listening on ${address}
})