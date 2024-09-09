import Image from 'next/image';
import Link from 'next/link';
import type { Post } from '../page';
import BlogImage from '@/public/blog-image.jpg';

const Post = ({ post }: { post: Post }) => {
	return (
		<div
			key={post.slug}
			className='max-w-80 p-2 border-2 border-transparent hover:border-cyan-600 dark:hover:border-gray-400 rounded-xl transition-all duration-500 ease-in-out'
		>
			<Link
				href={`blog/${post.slug}`}
				prefetch={true}
			>
				<Image
					src={BlogImage}
					alt={post.slug}
					width={300}
					height={200}
					loading='lazy'
					className='rounded-md flex items-center'
				/>
			</Link>
			<p className='text-xl font-bold text-gray-900 dark:text-white my-1 mt-2'>
				<Link href={`blog/${post.slug}`}>{post.title}</Link>
			</p>
			<p className='text-sm font-medium text-gray-500/70 dark:text-gray-400'>
				{post.description}
			</p>
		</div>
	);
};

export default Post;
