import React from 'react'
import { gql } from '@apollo/client'
import  client  from '../../apolloClient'
import Navbar from './../../components/Navbar'
import { NextPage } from 'next'
import { IPosts } from '..'

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

const  PostPage: NextPage<PostPageProps> = ({post}) => {
	console.log(post.postContent)
	return (
		<div>
            <Navbar />
			<div className="pt-[100px] p-4">
				{post.title}
				<div className="postContent" dangerouslySetInnerHTML={{__html: post.postContent.html}} />
			</div>
		</div>
	)
}

export async function getStaticPaths(){
	const { data } = await client.query<IPosts>({
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
	const { data } = await client.query<IPosts>({
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
		variables: { slug }
	})
	const { posts } = data
	const post = posts[0]
	return {
		props: {
			post
		}
	}
}

export default PostPage
