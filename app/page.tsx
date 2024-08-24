import Image from 'next/image';
import Link from 'next/link';
import PostList from './components/PostList';

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
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<PostList posts={posts} />
		</main>
	);
}
