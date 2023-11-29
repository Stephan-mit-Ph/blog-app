import Navbar from '@/components/Navbar';
import './globals.css';
import { Montserrat } from 'next/font/google';
import Footer from '@/components/Footer';
import { ThemeContextProvider } from '@/context/ThemeContext';
import ThemeProvider from '@/providers/ThemeProvider';
import AuthProvider from '@/providers/AuthProvider';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
	title: 'phBlog - The best blog app!',
	description: 'phBlog is the best blog app in the world!',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
				<meta charSet='UTF-8' />
				<meta
					name='description'
					content={metadata.description}
				/>
				<title>{metadata.title}</title>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</head>
			<body className={montserrat.className}>
				<AuthProvider>
					<ThemeContextProvider>
						<ThemeProvider>
							<div className='container'>
								<div className='wrapper'>
									<Navbar />
									{children}
									<Footer />
								</div>
							</div>
						</ThemeProvider>
					</ThemeContextProvider>
				</AuthProvider>
			</body>
		</html>
	);
}
