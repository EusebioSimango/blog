import Link from 'next/link';
import React from 'react';
import { PostType } from '../pages/post/[...slug]';
import { format } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

export interface BlogCardProps {
  post: PostType
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const { text: description } = post.postContent
  const LIMIT = 300
  const isAboveLimit = description.length > LIMIT
  const dotsOrEmpty = isAboveLimit ? "..." : ""

  const publishedDateFormatted = format(new Date(post.postDate), "EEE' - 'd' de 'MMMM', 'yyyy", {
    locale: ptBR
  })

  return (
    <div>
      <Link href={`/post/${post.slug}`}>
        <a className="block">
          <span className='text-darkBg font-bold dark:text-link text-2xl'>{ post.title }</span>
        </a>
      </Link>

      <p className="text-zinc-600">{ publishedDateFormatted.toUpperCase() }</p>
      <p className="mt-2 dark:text-white">{ description.substring(0, LIMIT).replaceAll("\\n", "") + dotsOrEmpty }</p>
      <div className="my-2 w-full border-b-2 border-zinc-600 rounded-sm p-0">
        <Link href={`/post/${post.slug}`}>
          <a className='block'>
            <span className='text-blue dark:text-darkLink font-bold'>Leia Mais</span>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
