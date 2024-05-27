import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { Header } from '@/ui/organisms/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Kancelaria Gołębiowski & Kryska',
	description: 'Specjalizujemy się w prawie cywilnym, gospodarczym, handlowym, pracy i upadłościowym. Wrocław.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html  lang='en'>
			<body className={inter.className}>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
{
	/* <html lang="en">
				<body className={inter.className}>
					<Header />
					<main className="mx-8 my-8 sm:mx-24">{children}</main>
					<BottomNav />
					<Footer />
					{sidebar}
				</body>
			</html> */
}
