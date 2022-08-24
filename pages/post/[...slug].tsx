import React from 'react'
import { gql } from '@apollo/client'
import  client  from '../../apolloClient'

export default function PostPage({post}){
	console.log(post.postContent)
	return (
		<div>
			<div>
				{post.title}
				<div dangerouslySetInnerHTML={{__html: post.postContent.html}} />
			</div>
		</div>
	)
}

export async function getStaticPaths(){
	const {data} = await client.query({
		query: gql`
			query {
			  posts {
			    slug
			  }
			}
		`
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

export async function getStaticProps({params}){
	const slug = params.slug[0]
	const {data} = await client.query({
		query: gql`
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
		`,
		variables: {slug}
	})
	const { posts } = data
	const post = posts[0]
	return {
		props: {
			post
		}
	}
}