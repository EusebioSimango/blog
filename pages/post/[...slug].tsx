import React, { useEffect } from 'react'
import { gql } from '@apollo/client'
import  client  from '../../apolloClient'
import Navbar from './../../components/Navbar'
import { NextPage } from 'next'
import Link from 'next/link'
import { IPosts } from '..'
import MetaData from '../../components/MetaData'
import { format } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import loadingImg from "../../public/images/loading.gif";
import Prism from 'prismjs';
import "prismjs/themes/prism-tomorrow.css";


export type PostType = {
	title: string,
	slug: string,
	postDate: string,
	coverImage: {
		url: string,
	}
	postContent: {
		html: string,
		text: string,
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
				text
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
    var publishedDateFormatted = ""

    if (post) {
        var publishedDateFormatted = format(new Date(post.postDate), "EEE' - 'd' de 'MMMM' - 'k'h'", {
            locale: ptBR,
        })
    }

    useEffect(() => {
        Prism.highlightAll();
    }, [post]);	
    
	return (
		<div>
			<MetaData metaData={{
				title: `${ post.title }`,
				description: `${ post.postContent }`,
				author: 'Eusébio Simango',
				keywords: ['adolscente', 'blog', 'eusebio simango', 'programador', 'tecnologia'],
			}} />

      <Navbar /> 
        { post ? (
			<div className="pt-[100px] p-4">
				<div className="text-4xl mb-2 text-center">{ post.title }</div>
                <span className="text-zinc-400 mb-4 text-center">{ publishedDateFormatted.toUpperCase() }</span>
				<div className="postContent" dangerouslySetInnerHTML={{__html: post.postContent.html}} />
			</div> ) : (
                <div className="self-center translate-y-[150%]">
                    <Image src={ loadingImg } width={100} height={100} alt="Loading" />
                </div>
            )}
        <span className="underline text-link font-bold dark:text-darkLink"><Link href="/">Veja outros posts</Link></span>
        <div className="w-full h-1 bg-slate-400 rounded"></div>
		</div>
	)
}

export default PostPage
