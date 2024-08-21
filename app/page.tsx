import Image from 'next/image';
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

export const getAllPosts = async (): Promise<Post[]> => {
	const posts = await fetch(
		`https://notion-api.huantyn.workers.dev/v1/table/${process.env.NOTION_BLOG_ID}`,
		{ cache: 'no-cache' },
	).then((res) => res.json());
	return posts;
};

export default async function Home() {
	const posts = await getAllPosts();
	console.log('posts: ', posts);
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			{posts.map((post) => (
				<Link
					href={`/blog/${post.slug}`}
					key={post.id}
					className=' w-max h-14 px-4 py-2 border-[.5px] border-slate-300 hover:border-blue-300 flex flex-col'>
					<h4 className=' text-sm text-center text-green-700'>{post.title}</h4>
				</Link>
			))}
		</main>
	);
}
