import { Lusitana, Ubuntu, DM_Serif_Display } from 'next/font/google';
import localFont from "next/font/local";

export const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
 });
export const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
 });

export const lusitana = Lusitana({ weight:'400' ,subsets: ['latin'] });

export const ubuntu = Ubuntu({ weight:'400' ,subsets: ['latin'] });

export const dmSerifDisplay = DM_Serif_Display({ weight:'400' ,subsets: ['latin'] });
