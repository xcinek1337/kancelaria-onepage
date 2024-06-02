import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Header } from "@/ui/organisms/Header";
import { ContactBar } from "@/ui/molecules/ContactBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Kancelaria Gołębiowski & KRYSKA | Wrocław ",
	description:
		"Specjalizujemy się w prawie cywilnym, gospodarczym, handlowym, pracy i upadłościowym. Wrocław.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className="p-0 m-0 scroll-smooth box-border" lang="en">
			<body className={`${inter.className}`}>
				<ContactBar />
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
