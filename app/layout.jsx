import { Inter } from 'next/font/google'
import Navbar from '@/app/components/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'My NextJS App',
	description: 'Generated by Joshua Wilde Hawk using create next app',
}

export default function RootLayout({ children }) {
	return (
		<html
			lang='en'
			className={inter.className}>
			<body>
				<Navbar />
				<main className='px-4 mx-auto my-8 max-w-7xl'>{children}</main>
			</body>
		</html>
	)
}
