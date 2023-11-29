
import styles from './styles.module.css';
import Link from 'next/link';
import AuthLinks from '@/components/AuthLinks';
import ThemeToggle from '@/components/ThemeToggle';
import { Facebook, Instagram, Tiktok, Youtube } from '@/components/Icons';

const Navbar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.social}>
				<Facebook />
				<Instagram />
				<Tiktok />
				<Youtube />
			</div>
			<div className={styles.logo}>phBlog</div>
			<div className={styles.links}>
				<ThemeToggle />
				<Link
					href='/'
					className={styles.link}
				>
					Homepage
				</Link>
				<Link
					href='/'
					className={styles.link}
				>
					Contact
				</Link>
				<Link
					href='/'
					className={styles.link}
				>
					About
				</Link>
				<AuthLinks />
			</div>
		</div>
	);
};

export default Navbar;
