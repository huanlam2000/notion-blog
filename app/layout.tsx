import type { Metadata } from 'next';
import './globals.css';

import Header from './components/Header';

export const metadata: Metadata = {
	title: "Huan's Blog",
	description: 'Welcome to my blog',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning={true}
		>
			<body
				className=' antialiased'
				suppressHydrationWarning={true}
			>
				<Header></Header>
				{children}
				{/* <Footer></Footer> */}
			</body>
		</html>
	);
}
