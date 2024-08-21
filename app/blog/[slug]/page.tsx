import { getAllPosts } from '@/app/page';
import { notion } from '@/lib/notion';
import { notFound } from 'next/navigation';
import { NotionPage } from '@/app/components/NotionPage';

export default async function Post({ params }: { params: { slug: string } }) {
	const posts = await getAllPosts();

	const post = posts.find((post) => post.slug === params.slug);

	if (!post) {
		notFound();
	}

	const recordMap = await notion.getPage(post.id);
	return <NotionPage recordMap={recordMap} />;
}
