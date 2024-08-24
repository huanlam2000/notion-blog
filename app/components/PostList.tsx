import { Post } from '../page';
import Link from 'next/link';
import Image from 'next/image';
import nextSVG from '@/public/next.svg';
const PostList = ({ posts }: { posts: Post[] }) => {
	return (
		<div className='mb-4 flex flex-wrap justify-center gap-2'>
			{posts.map((post) => (
				<div
					key={post.slug}
					className='flex gap-2 flex-col justify-center items-start p-4 border min-w-48'
				>
					<div className='flex'>
						<Link href={`blog/${post.slug}`}>
							<Image
								src={nextSVG}
								alt={post.slug}
								width={300}
								height={150}
							/>
						</Link>
					</div>
					<p className='text-xl font-semibold text-black'>
						<Link href={`blog/${post.slug}`}>{post.title}</Link>
					</p>
					<p className='text-base text-gray-500'>{post.description}</p>
				</div>
			))}
		</div>
	);
};
export default PostList;
