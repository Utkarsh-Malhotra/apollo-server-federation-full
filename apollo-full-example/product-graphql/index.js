const { ApolloServer, gql } = require('apollo-server');
const { buildSubgraphSchema } = require('@apollo/subgraph');

const typeDefs = gql`
extend type Query {
  getProducts: String
}
type Product @key(fields: "upc") {
    upc: String!
    name: String!
    price: Int
  }  
`;

const resolvers = {
    Product: {
      __resolveReference(reference) {
        return fetchProductByUPC(reference.upc);
      }
    },
    // ...
}

const fetchProductByUPC = (upcid) => {
    console.log(`UPC id is ---------------------> ${upcid}`)
    return { upc: upcid, price: "1000", name: "utk" }
}

const server = new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs, resolvers })
  });
  
  server.listen(4001).then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
  });