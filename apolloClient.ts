import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
	uri: process.env.GRAPHCMS_URI,
	cache: new InMemoryCache
})

export default client
