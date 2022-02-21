Entities are objects that other subgraphs can extend with additional fields.
@join__field directive suggests,  fields of the same type are defined across two different subgraphs!

APOLLO_KEY=service:federation-example-u2ureo:ZXdVXJNUCqGt1ZmQpTLuNg
APOLLO_GRAPH_REF=federation-example-u2ureo@current
APOLLO_SCHEMA_REPORTING=true

1)npm install -g @apollo/rover

2)rover config auth

3) rover subgraph publish federation-example-u2ureo@current --routing-url https://rover.apollo.dev/quickstart/products/graphql --schema ./products.graphql --name products
4) rover subgraph publish federation-example-u2ureo@current --routing-url https://rover.apollo.dev/quickstart/reviews/

For point 5 check apollo-subgraph-example graphql api
5)Provide an introspection result via stdin
rover subgraph introspect http://localhost:4001 | rover subgraph publish federation-example-u2ureo@current --name users --routing-url http://localhost:4001 --schema -

