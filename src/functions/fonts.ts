import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

export const font_monospace = IBM_Plex_Mono({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-monospace",
	display: "swap",
});

export const font_sans = IBM_Plex_Sans({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-sans",
	display: "swap",
});
