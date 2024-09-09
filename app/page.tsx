import PostList from '@/app/components/PostList';
import { getAllPosts } from '@/lib/actions';
import { filters } from '@/lib/const';
import Link from 'next/link';

export type Post = {
	id: string;
	slug: string;
	description: string;
	title: string;
	tags: string[];
	series: string[];
	date: string;
};

export default async function Home() {
	const posts = await getAllPosts();
	posts[0].description =
		'lorem ipsum dolor sit amet, consectetur adip euismod tempor incididunt ut labore et dolore magna aliqu Lorem ipsum dolor sit amet';
	return (
		<main className='max-w-5xl px-10 mx-auto pt-10 sm:px-6 lg:px-8'>
			<div className='my-4'>
				I built this blog for learning purpose, motivation from{' '}
				<a
					className='text-blue-600 hover:underline'
					href='https://thanhle.blog'
					target='_blank'
				>
					Thanh Le Blog
				</a>
			</div>
			{/* filters */}
			<div className='my-4 space-x-2'>
				{Object.values(filters).map((val) => (
					<Link
						key={val}
						href={`#${val}}`}
						className='inline-flex text-sm dark:text-white px-4 py-1 rounded text-center font-medium border dark:bg-gray-800 border-gray-700 hover:bg-gray-700'
					>
						{val}
					</Link>
				))}
			</div>
			<PostList
				posts={posts.slice(0, 6)}
				postListLabel={filters.new}
			/>
			<PostList
				posts={posts.filter((p) => p.tags?.includes('learn'))}
				postListLabel={filters.learn}
			/>
			<PostList
				posts={posts.filter((p) => p.tags?.includes('thought'))}
				postListLabel={filters.thought}
			/>
			<PostList
				posts={posts.filter((p) => p.tags?.includes('others'))}
				postListLabel={filters.others}
			/>
		</main>
	);
}
