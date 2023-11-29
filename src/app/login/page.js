'use client';

import { signIn, useSession } from 'next-auth/react';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
	const router = useRouter();
	const { status } = useSession();

	if (status === 'loading') {
		return <div className={styles.loading}>Loading...</div>;
	}

	if (status === 'authenticated') {
		router.push('/');
	} else {
		router.push('/login');
	}

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div
					className={styles.socialButton}
					onClick={() => signIn('google')}
				>
					Sign in with Google
				</div>
				<div
					className={styles.socialButton}
					onClick={() => signIn('github')}
				>
					Sign in with GitHub
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
