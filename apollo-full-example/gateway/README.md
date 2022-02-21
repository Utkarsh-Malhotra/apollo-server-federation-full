APOLLO_KEY=service:My-Graph-dcvxmj:zW0MICB-Q53YZDQaEw6fQQ
APOLLO_GRAPH_REF=My-Graph-dcvxmj@current
APOLLO_SCHEMA_REPORTING=true

1)npm install rover

2)rover config auth

3)rover subgraph introspect http://localhost:4001 | rover subgraph publish My-Graph-dcvxmj@current --name product-subgraph --routing-url http://localhost:4001 --schema -

4)rover subgraph introspect http://localhost:4002 | rover subgraph publish My-Graph-dcvxmj@current --name reviews-subgraph --routing-url http://localhost:4002 --schema -

5)Run this on server - 
query GetReviewsAndProducts {
  latestReviews {
    score
    product {
      upc
      price # Not defined in reviews!
    }
  }
}

price is not known by review so server will connect with product api to fetch price.