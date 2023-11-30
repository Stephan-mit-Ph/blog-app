import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

const MenuPosts = ({ withImage }) => {
	return (
		<div className={styles.items}>
			<Link
				href='/blog?cat=travel'
				className={styles.item}
			>
				{withImage && (
					<div className={styles.imageContainer}>
						<Image
							src='/travel.png'
							alt=''
							fill
							className={styles.image}
							sizes='(min-width: 1560px) 66px, (min-width: 1520px) calc(50vw - 704px), (min-width: 1300px) calc(2vw + 26px), 37px'
						/>
					</div>
				)}
				<div className={styles.textContainer}>
					<span className={`${styles.category} ${styles.travel}`}>Travel</span>
					<h3 className={styles.postTitle}>
						Beyond Borders: Exploring Hidden Gems in Uncharted Destinations
					</h3>
					<div className={styles.detail}>
						<span className={styles.username}>John Doe</span>
						<span className={styles.date}> - 10.03.2023 </span>
					</div>
				</div>
			</Link>
			<Link
				href='/blog?cat=culture'
				className={styles.item}
			>
				{withImage && (
					<div className={styles.imageContainer}>
						<Image
							src='/culture.png'
							alt=''
							fill
							className={styles.image}
							sizes='(min-width: 1560px) 66px, (min-width: 1520px) calc(50vw - 704px), (min-width: 1300px) calc(2vw + 26px), 37px'
						/>
					</div>
				)}
				<div className={styles.textContainer}>
					<span className={`${styles.category} ${styles.culture}`}>Culture</span>
					<h3 className={styles.postTitle}>
						Cultural Fusion: Embracing Diversity for a Global Tapestry
					</h3>
					<div className={styles.detail}>
						<span className={styles.username}>John Doe</span>
						<span className={styles.date}> - 10.03.2023</span>
					</div>
				</div>
			</Link>
			<Link
				href='/blog?cat=food'
				className={styles.item}
			>
				{withImage && (
					<div className={styles.imageContainer}>
						<Image
							src='/food.png'
							alt=''
							fill
							className={styles.image}
							sizes='(min-width: 1560px) 66px, (min-width: 1520px) calc(50vw - 704px), (min-width: 1300px) calc(2vw + 26px), 37px'
						/>
					</div>
				)}
				<div className={styles.textContainer}>
					<span className={`${styles.category} ${styles.food}`}>Food</span>
					<h3 className={styles.postTitle}>
						Culinary Adventures: Bringing Global Flavors to Your Kitchen
					</h3>
					<div className={styles.detail}>
						<span className={styles.username}>John Doe</span>
						<span className={styles.date}> - 10.03.2023</span>
					</div>
				</div>
			</Link>
			<Link
				href='/blog?cat=fashion'
				className={styles.item}
			>
				{withImage && (
					<div className={styles.imageContainer}>
						<Image
							src='/fashion.png'
							alt=''
							fill
							className={styles.image}
							sizes='(min-width: 1560px) 66px, (min-width: 1520px) calc(50vw - 704px), (min-width: 1300px) calc(2vw + 26px), 37px'
						/>
					</div>
				)}
				<div className={styles.textContainer}>
					<span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
					<h3 className={styles.postTitle}>
						Trendspotting: Navigating the Hottest Fashion Trends of the Season
					</h3>
					<div className={styles.detail}>
						<span className={styles.username}>John Doe</span>
						<span className={styles.date}> - 10.03.2023</span>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default MenuPosts;
