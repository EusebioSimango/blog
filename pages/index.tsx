import { gql } from '@apollo/client'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import  client  from '../apolloClient'
import { NextPage } from 'next'
import { PostType } from './post/[...slug]'

export interface IPosts {
	posts:	PostType[]
}

const  Home: NextPage<IPosts > = ({posts}) => {
	console.log(posts)
	return (
		<div>
			<Head>
				<title>Giniuss</title>
				<meta name="description" content="A vida de um nerd adolescente em Moçambique" />
			</Head>
			<Navbar />
			<div className='pt-20 px-4'>
				{posts.map( (post, i) => <a href={`/posts/${post.slug}`} key={i}>{post.title}</a>)}
			</div>
		</div>    
	)
}

export async function getStaticProps(){
	const {data} = await client.query<IPosts>({
		query: gql`
			query { 
			  posts {
			    title
			    slug
			    postDate
			    coverImage {
			      url
			    }
			    postContent {
			      html
			    }
			  }
			}
		`
	})
	const { posts } = data
	return {
		props: {
			posts
		}
	}
}

export default Home
