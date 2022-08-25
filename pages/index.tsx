import { gql } from '@apollo/client'
import Navbar from '../components/Navbar'
import  client  from '../apolloClient'
import { NextPage } from 'next'
import { PostType } from './post/[...slug]'
import MetaData from '../components/MetaData'

export interface IPosts {
	posts:	PostType[]
}

const  Home: NextPage<IPosts > = ({posts}) => {
	console.log(posts)
	return (
		<div>
			<MetaData metaData={{
				title: 'Giniuss',
				author: 'Eusébio Simango',
				description: 'A vida de um nerd adolescente em Moçambique',
				keywords: ['adolscente', 'blog', 'eusebio simango', 'programador', 'nerd', 'ciencia', 'tecnologia']
			}} />
			<Navbar />
			<div className='pt-20 px-4'>
				{posts.map( (post, i) => <a href={`/post/${post.slug}`} key={i}>{post.title}</a>)}
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
