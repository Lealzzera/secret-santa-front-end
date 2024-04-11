import type { Metadata } from "next";
import "./globals.css";
import { font_monospace, font_sans } from "@/functions/fonts";
import UserEventsContextProvider from "@/context/userEventsContext";

export const metadata: Metadata = {
	title: "Amigo Secreto",
	description: "Descubra quem é o seu amigo secreto",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			className={`${font_monospace.variable} ${font_sans.variable}`}
			lang='pt-BR'
		>
			<UserEventsContextProvider>
				<body className='container'>{children}</body>
			</UserEventsContextProvider>
		</html>
	);
}
