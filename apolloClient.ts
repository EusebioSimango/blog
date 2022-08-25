import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
	uri: "https://api-sa-east-1.hygraph.com/v2/cl77n220m1a0t01un8rif5vlp/master",
	cache: new InMemoryCache
})

export default client
