import React from 'react';
import styles from './styles.module.css';
import Pagination from '@/components/Pagination';
import Card from '@/components/Card';

const CardList = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Recent Posts</h1>
			<div className={styles.post}>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<Pagination />
		</div>
	);
};

export default CardList;
