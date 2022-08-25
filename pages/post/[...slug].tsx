import React from 'react'
import { gql } from '@apollo/client'
import  client  from '../../apolloClient'
import Navbar from './../../components/Navbar'
import { NextPage } from 'next'
import { IPosts } from '..'
import MetaData from '../../components/MetaData'


export type PostType = {
	title: string,
	slug: string,
	coverImage: {
		url: string,
	}
	postContent: {
		html: string
	}
}

interface PostPageProps {
	post: PostType
}

const GET_POSTS_BY_SLUG_QUERY = gql`
	query {
		posts {
			slug
		}
	}
`

const GET_POST_BY_SLUG_QUERY = gql`
	query PostBySlug($slug: String!){ 
		posts (where: {slug : $slug}){
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

export async function getStaticPaths(){
	const { data } = await client.query<IPosts>({
		query: GET_POSTS_BY_SLUG_QUERY
	})
	const { posts } = data
	const paths = posts.map( post => ({
		params: {slug: [post.slug]}
	}))

	return {
		paths, 
		fallback: false
	}
}

export async function getStaticProps({ params }){
	const slug = params.slug[0]
	const { data } = await client.query<IPosts>({
		query: GET_POST_BY_SLUG_QUERY,
		variables: { slug }
	})
	const post = data.posts[0]

	return {
		props: {
			post
		}
	}
}

const  PostPage: NextPage<PostPageProps> = ({post}) => {

	return (
		<div>
			<MetaData metaData={{
				title: `${ post.title }`,
				description: `${ post.postContent }`,
				author: 'Eusébio Simango',
				keywords: ['adolscente', 'blog', 'eusebio simango', 'programador', 'tecnologia'],
			}} />

      <Navbar />
			<div className="pt-[100px] p-4">
				{post.title}
				<div className="postContent" dangerouslySetInnerHTML={{__html: post.postContent.html}} />
			</div>
		</div>
	)
}

export default PostPage
