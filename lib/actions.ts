'use server'

import type { Post } from "@/app/page";
export const getAllPosts = async (): Promise<Post[]> => {
  const posts = await fetch(
    `https://notion-api.huantyn.workers.dev/v1/table/${process.env.NOTION_BLOG_ID}`,
    { cache: 'force-cache' },
  ).then((res) => res.json());
  return posts;
};
