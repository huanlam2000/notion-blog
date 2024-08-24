'use client';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { NotionRenderer } from 'react-notion-x';
import * as Ntypes from 'notion-types';
import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import Icon from '../icon.png';

const Code = dynamic(() =>
	import('react-notion-x/build/third-party/code').then((m) => m.Code),
);

const Modal = dynamic(
	() => import('react-notion-x/build/third-party/modal').then((m) => m.Modal),
	{
		ssr: false,
	},
);

export const NotionPage = ({
	recordMap,
}: {
	recordMap: Ntypes.ExtendedRecordMap;
}) => {
	return (
		<article>
			<NotionRenderer
				recordMap={recordMap}
				darkMode={true}
				fullPage={true}
				showTableOfContents={true}
				minTableOfContentsItems={2}
				disableHeader={true}
				components={{
					Code,
					Modal,
					nextImage: Image,
					nextLink: Link,
				}}
			/>
			<style
				global
				jsx
			>{`
				.notion {
					font-size: 18px;
					font-family:
						ui-sans-serif,
						system-ui,
						-apple-system,
						BlinkMacSystemFont,
						'Segoe UI',
						Roboto,
						'Helvetica Neue',
						Arial,
						'Noto Sans',
						sans-serif,
						'Apple Color Emoji',
						'Segoe UI Emoji',
						'Segoe UI Symbol',
						'Noto Color Emoji';
				}

				.notion img {
					position: relative;
				}

				.notion img::after {
					content: '';
					display: block;
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background-color: white;
				}

				.notion-list li {
					padding-top: 2px;
				}

				.notion-hash-link {
					margin-top: 7px;
				}

				.notion-viewport {
					position: relative;
				}

				.notion-aside-table-of-contents {
					max-width: 250px;
				}

				.notion-table-of-contents-item {
					white-space: wrap;
					line-height: 1.25rem;
				}

				.notion-code {
					font-family:
						SFMono-Regular,
						Consolas,
						Liberation Mono,
						Menlo,
						monospace !important;
				}

				.notion-asset-caption {
					text-align: center;
					width: 100%;
				}

				.notion-list {
					overflow: hidden;
					width: 100%;
				}

				.notion-bookmark-title {
					font-weight: 500;
				}

				.notion-to-do {
					margin-left: 16px;
				}

				.dark .notion {
					--fg-color: rgba(255, 255, 255, 0.9);
					--fg-color-0: var(--fg-color);
					--fg-color-1: var(--fg-color);
					--fg-color-2: var(--fg-color);
					--fg-color-3: var(--fg-color);
					--fg-color-4: var(--fg-color);
					--fg-color-5: rgba(255, 255, 255, 0.7);
					--fg-color-6: #fff;
					--fg-color-icon: #fff;

					--bg-color: #18181b;
					--bg-color-0: rgb(71, 76, 80);
					--bg-color-1: rgb(63, 68, 71);
					--bg-color-2: rgba(135, 131, 120, 0.15);

					--notion-red: rgb(255, 115, 105);
					--notion-pink: rgb(226, 85, 161);
					--notion-blue: rgb(82, 156, 202);
					--notion-purple: rgb(154, 109, 215);
					--notion-teal: rgb(77, 171, 154);
					--notion-yellow: rgb(255, 220, 73);
					--notion-orange: rgb(255, 163, 68);
					--notion-brown: rgb(147, 114, 100);
					--notion-gray: rgba(151, 154, 155, 0.95);
					--notion-red_background: rgb(89, 65, 65);
					--notion-pink_background: rgb(83, 59, 76);
					--notion-blue_background: rgb(54, 73, 84);
					--notion-purple_background: rgb(68, 63, 87);
					--notion-teal_background: rgb(53, 76, 75);
					--notion-yellow_background: rgb(89, 86, 59);
					--notion-orange_background: rgb(89, 74, 58);
					--notion-brown_background: rgb(67, 64, 64);
					--notion-gray_background: rgb(69, 75, 78);
					--notion-red_background_co: rgba(89, 65, 65, 0.3);
					--notion-pink_background_co: rgba(83, 59, 76, 0.3);
					--notion-blue_background_co: rgba(120, 162, 187, 0.3);
					--notion-purple_background_co: rgba(68, 63, 87, 0.3);
					--notion-teal_background_co: rgba(53, 76, 75, 0.3);
					--notion-yellow_background_co: rgba(89, 86, 59, 0.3);
					--notion-orange_background_co: rgba(89, 74, 58, 0.3);
					--notion-brown_background_co: rgba(67, 64, 64, 0.3);
					--notion-gray_background_co: rgba(69, 75, 78, 0.3);
				}
			`}</style>
		</article>
	);
};
