'use client';

import styles from './styles.module.css';
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import { Moon, Sun } from '@/components/Icons';

const ThemeToggle = () => {
	const { toggle, theme } = useContext(ThemeContext);

	return (
		<div
			className={styles.container}
			onClick={toggle}
			style={
				theme === 'dark'
					? { backgroundColor: 'white', color: '#0f172a' }
					: { backgroundColor: '#0f172a', color: 'white' }
			}
		>
			<Moon className={styles.icon} />
			<div
				className={styles.ball}
				style={
					theme === 'dark'
						? { left: 1, background: '#0f172a', color: 'white' }
						: { right: 1, background: 'white', color: '#0f172a' }
				}
			></div>
			<Sun />
		</div>
	);
};

export default ThemeToggle;
