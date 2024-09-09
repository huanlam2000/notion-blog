import Post from './Post';
const PostList = ({
	posts,
	postListLabel,
}: {
	posts: Post[];
	postListLabel: string;
}) => {
	if (posts.length <= 0) {
		return null;
	}
	return (
		<>
			<h3
				id='#'
				className=' text-gray-950 text-lg mt-8 mb-2 font-medium dark:text-gray-100'
			>
				{postListLabel}
			</h3>
			<section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mb-12'>
				{posts.map((post) => (
					<Post
						key={post.slug}
						post={post}
					/>
				))}
			</section>
		</>
	);
};
export default PostList;
