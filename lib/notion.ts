import { NotionAPI } from 'notion-client';

export const notion = new NotionAPI({
	activeUser: process.env.NOTION_ACTIVE_USER,
	authToken: process.env.NOTION_TOKEN,
});
