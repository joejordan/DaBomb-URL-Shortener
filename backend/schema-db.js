/*
 *  Create sqlite database schema via knex
 */
async function CreateSchema(db) {
  // Create user table
  await db.schema
    .hasTable('users')
    .then(exists => {
      if (!exists) {
        return db.schema.createTable('users', t => {
          t.increments('id').primary();
          t.string('email');
          t.string('passwordHash');
        });
      }
    })

    .catch(e => {
      console.log(e);
    });

  // Create shorturls table
  db.schema
    .hasTable('shorturls')
    .then(exists => {
      if (!exists) {
        return db.schema.createTable('shorturls', t => {
          t.increments('id').primary();
          t.string('longurl');
          t.string('longurlhash');
          t.string('userid');
          t.datetime('creationdate');
        });
      }
    })

    // .then(() => {
    //   //console.log(db.schema);
    //   db.insert({ email: 'me@domain.com' }).into('users').then(console.log('hi'));
    // })

    .catch(e => {
      console.log(e);
    });
}

module.exports = CreateSchema;
