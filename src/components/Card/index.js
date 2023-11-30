import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.css';

const Card = ({ key, item }) => {
	return (
		<div
			className={styles.container}
			key={key}
		>
			{item.img && (
				<div className={styles.imageContainer}>
					<Image
						src={item.img}
						alt=''
						fill
						className={styles.image}
						sizes='(min-width: 1540px) 449px, (min-width: 1300px) calc(10.91vw + 222px), (min-width: 1040px) 266px, (min-width: 780px) 319px, (min-width: 660px) 255px, (min-width: 500px) 97px, calc(95vw - 359px)'
					/>
				</div>
			)}
			<div className={styles.textContainer}>
				<div className={styles.detail}>
					<span className={styles.date}>{item.createdAt.substring(0, 10)} - </span>
					<span className={styles.category}>{item.catSlug}</span>
				</div>
				<Link href={`/posts/${item.slug}`}>
					<h1>{item.title}</h1>
				</Link>
				{/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
				<div
					className={styles.desc}
					dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 60) }}
				/>
				<Link
					href={`/posts/${item.slug}`}
					className={styles.link}
				>
					Read More
				</Link>
			</div>
		</div>
	);
};

export default Card;
