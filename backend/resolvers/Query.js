// Provide resolver functions for your schema fields
const Query = {
  hello: (parent, args, context, info) => 'Hello world!',
};

// const resolvers = {
//   Query: {
//     author(parent, args, context, info) {
//       return find(authors, { id: args.id });
//     },
//   },
//   Author: {
//     books(author) {
//       return filter(books, { author: author.name });
//     },
//   },
// };

module.exports = Query;
