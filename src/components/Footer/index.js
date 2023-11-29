import styles from './styles.module.css';
import Link from 'next/link';
import { Instagram, Facebook, Tiktok, Youtube } from '@/components/Icons';

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<div className={styles.logo}>
					<h1 className={styles.logoText}>phBlog</h1>
				</div>
				<p className={styles.desc}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim necessitatibus similique
					aspernatur obcaecati veritatis.
				</p>
				<div className={styles.icons}>
					<Instagram />
					<Facebook />
					<Tiktok />
					<Youtube />
				</div>
			</div>
			<div className={styles.links}>
				<div className={styles.list}>
					<span className={styles.listTitle}>Links</span>
					<Link href='/'>Homepage</Link>
					<Link href='/'>Blog</Link>
					<Link href='/'>About</Link>
					<Link href='/'>Contact</Link>
				</div>
				<div className={styles.list}>
					<span className={styles.listTitle}>Tags</span>
					<Link href='/'>Style</Link>
					<Link href='/'>Fashion</Link>
					<Link href='/'>Coding</Link>
					<Link href='/'>Travel</Link>
				</div>
				<div className={styles.list}>
					<span className={styles.listTitle}>Social</span>
					<Link href='/'>Facebook</Link>
					<Link href='/'>Instagram</Link>
					<Link href='/'>Tiktok</Link>
					<Link href='/'>Youtube</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
