import "./globals.css"
import type { Metadata } from "next"
import { Nav, Footer } from "@/components"

export const metadata: Metadata = {
	title: "Konrad.dev",
	description: "Konrad.dev portfolio",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className='flex flex-col min-h-screen'>
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	)
}
