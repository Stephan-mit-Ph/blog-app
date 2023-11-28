import styles from './styles.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Comments = () => {
	const status = 'authenticated';
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Comments</h1>
			{status === 'authenticated' ? (
				<div className={styles.write}>
					<textarea placeholder='write a comment...' className={styles.input} />
					<button className={styles.button}>Send</button>
				</div>
			) : (
				<Link href='/login' className={styles.login}>
					Login to write comment
				</Link>
			)}
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt='' width={50} height={50} className={styles.image}/>
                        <div className={styles.userInfo}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2024</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Incididunt mollit amet consequat commodo. Adipisicing tempor qui sunt exercitation cupidatat deserunt labore dolor sint. Ea proident cillum sit dolor id laborum id anim fugiat elit aliqua consequat in irure. Culpa non velit aliquip duis veniam dolor quis fugiat non et nulla exercitation. Aute nulla est ipsum ex commodo cillum eiusmod fugiat velit voluptate elit fugiat deserunt deserunt.
                    </p>
                </div>
            </div>
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt='' width={50} height={50} className={styles.image}/>
                        <div className={styles.userInfo}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2024</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Incididunt mollit amet consequat commodo. Adipisicing tempor qui sunt exercitation cupidatat deserunt labore dolor sint. Ea proident cillum sit dolor id laborum id anim fugiat elit aliqua consequat in irure. Culpa non velit aliquip duis veniam dolor quis fugiat non et nulla exercitation. Aute nulla est ipsum ex commodo cillum eiusmod fugiat velit voluptate elit fugiat deserunt deserunt.
                    </p>
                </div>
            </div>
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt='' width={50} height={50} className={styles.image}/>
                        <div className={styles.userInfo}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2024</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Incididunt mollit amet consequat commodo. Adipisicing tempor qui sunt exercitation cupidatat deserunt labore dolor sint. Ea proident cillum sit dolor id laborum id anim fugiat elit aliqua consequat in irure. Culpa non velit aliquip duis veniam dolor quis fugiat non et nulla exercitation. Aute nulla est ipsum ex commodo cillum eiusmod fugiat velit voluptate elit fugiat deserunt deserunt.
                    </p>
                </div>
            </div>
		</div>
	);
};

export default Comments;
