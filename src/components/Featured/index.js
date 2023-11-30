import Image from 'next/image';

import styles from './styles.module.css';

const Featured = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				<b>Hey, ph here! </b>Discover my stories and creative ideas.
			</h1>
			<div className={styles.post}>
				<div className={styles.imgContainer}>
					<Image
						src='/p1.jpeg'
						alt=''
						fill
						sizes='(min-width: 1540px) 449px, (min-width: 1300px) calc(10.91vw + 222px), (min-width: 1040px) 266px, (min-width: 780px) 319px, (min-width: 660px) 255px, (min-width: 500px) 97px, calc(95vw - 359px)'
					/>
				</div>
				<div className={styles.textContainer}>
					<h1 className={styles.postTitle}>
						Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
					</h1>
					<p className={styles.postDesc}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, quam nisi magni ea
						laborum inventore voluptatum laudantium repellat ducimus unde aspernatur fuga. Quo,
						accusantium quisquam! Harum unde sit culpa debitis.
					</p>
					<button className={styles.button}>Read More</button>
				</div>
			</div>
		</div>
	);
};

export default Featured;
