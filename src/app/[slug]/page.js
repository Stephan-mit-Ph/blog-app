import styles from './singlePage.module.css';
import Image from 'next/image';
import Comments from '@/components/Comments';
import Menu from '@/components/Menu';

const SinglePage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.infoContainer}>
				<div className={styles.textContainer}>
					<h1 className={styles.title}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
					</h1>
					<div className={styles.user}>
						<div className={styles.userImageContainer}>
							<Image
								src='/p1.jpeg'
								alt=''
								fill
								className={styles.image}
							/>
						</div>
						<div className={styles.userTextContainer}>
							<span className={styles.username}>John Doe</span>
							<span className={styles.date}>11.02.2023</span>
						</div>
					</div>
				</div>
				<div className={styles.imageContainer}>
					<Image
						src='/p1.jpeg'
						alt=''
						fill
						className={styles.image}
					/>
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.post}>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum
						dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit
						amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Quisquam, voluptatum.
					</p>
                    <div className={styles.comments}>
                        <Comments />
                    </div>
				</div>
				<Menu />
			</div>
		</div>
	);
};

export default SinglePage;
