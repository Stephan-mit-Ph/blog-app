import Navbar from '@/components/Navbar';
import './globals.css';
import { Montserrat } from 'next/font/google';
import Footer from '@/components/Footer';
import { ThemeContextProvider } from '@/context/ThemeContext';
import ThemeProvider from '@/providers/ThemeProvider';
import AuthProvider from '@/providers/AuthProvider';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
	title: 'Lama Dev Blog App',
	description: 'The best blog app!',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
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
