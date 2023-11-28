import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.css';

const Card = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<Image src='/food.png' alt='' fill className={styles.image} />
			</div>
			<div className={styles.textContainer}>
				<div className={styles.detail}>
					<span className={styles.date}> - 11.02.2023</span>
					<span className={styles.category}>CULTURE</span>
				</div>
				<Link href='/'>
					<h1 className={styles.title}>
						Lorem ipsum dolor sit ahmet consectetur adipisicing elit.
					</h1>
				</Link>
				<p className={styles.desc}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum
					dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
				</p>
				<Link className={styles.link} href='/'>Read More</Link>
			</div>
		</div>
	);
};
export default Card;
