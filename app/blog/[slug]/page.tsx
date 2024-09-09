import { getAllPosts } from '@/lib/actions';
import { notion } from '@/lib/notion';
import { notFound } from 'next/navigation';
import { NotionPage } from '@/app/components/NotionPage';
import { Suspense } from 'react';

export default async function Post({ params }: { params: { slug: string } }) {
	await new Promise((resolve) => setTimeout(resolve, 3000));
	const posts = await getAllPosts();

	const post = posts.find((post) => post.slug === params.slug);

	if (!post) {
		notFound();
	}

	const recordMap = await notion.getPage(post.id);
	return <NotionPage recordMap={recordMap} />;
}
