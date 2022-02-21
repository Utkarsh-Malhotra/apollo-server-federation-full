const { ApolloServer, gql } = require('apollo-server');
const { buildSubgraphSchema } = require('@apollo/subgraph');

const typeDefs = gql`
extend type Query {
    latestReviews: Review
}
  
type Review {
    score: Int!
    product: Product!
}
  
  # This is a required "stub" of the Product entity (see below)
extend type Product @key(fields: "upc") {
    upc: String! @external
    reviews: Review
}  
`;

// Reviews subgraph
const resolvers = {
    Review: {
        product(review) {
            console.log("review is------->",review)
            return {
                __typename: "Product",
                upc: review.product.upc
            };
        }
    },
    Query: {
        latestReviews()  {
            return { score: 10 , product: {upc: "1"}};
        }
    }
}

const server = new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs, resolvers })
});

server.listen(4002).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});