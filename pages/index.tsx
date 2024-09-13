import { gql } from '@apollo/client'
import Navbar from '../components/Navbar'
import  client  from '../apolloClient'
import { NextPage } from 'next'
import { PostType } from './post/[...slug]'
import MetaData from '../components/MetaData'
import BlogCard from '../components/BlogCard'

export interface IPosts {
	posts:	PostType[]
}

const GET_ALL_POSTS = gql`
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
				text
			}
		}
	}
`

export async function getStaticProps(){
	const {data} = await client.query<IPosts>({
		query: GET_ALL_POSTS,
	})
	const { posts } = data
	return {
		props: {
			posts
		},
		revalidate: 60 * 60 * 4,
	}
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
			<div className='pt-20 px-4 container mx-auto'>
				{posts.map( (post, i) => {
					return (
						<BlogCard 
							key={i}
							post={post} 
						/>
					)
				})}
			</div>
		</div>    
	)
}

export default Home
