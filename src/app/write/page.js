'use client';

import styles from './writePage.module.css';
import { useState } from 'react';
import 'react-quill/dist/quill.bubble.css';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Video, Plus, External, Img } from '@/components/Icons';
import ReactQuill from 'react-quill';

const WritePage = () => {
	const { status } = useSession();
	const router = useRouter();

	const [open, setOpen] = useState(false);
	const [value, setValue] = useState('');

	if (status === 'loading') {
		return <div className={styles.loading}>Loading...</div>;
	}

	if (status === 'authenticated') {
		router.push('/');
	}

	return (
		<div className={styles.container}>
			<input
				type='text'
				placeholder='Title'
				className={styles.input}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<select
				className={styles.select}
				onChange={(e) => setCatSlug(e.target.value)}
			>
				<option value='style'>style</option>
				<option value='fashion'>fashion</option>
				<option value='food'>food</option>
				<option value='culture'>culture</option>
				<option value='travel'>travel</option>
				<option value='coding'>coding</option>
			</select>
			<div className={styles.editor}>
				<button
					className={styles.button}
					onClick={() => setOpen(!open)}
				>
					<Plus />
				</button>
				{open && (
					<div className={styles.add}>
						<input
							type='file'
							id='image'
							onChange={(e) => setFile(e.target.files[0])}
							style={{ display: 'none' }}
						/>
						<button className={styles.addButton}>
							<label htmlFor='image'>
								<Img className={styles.icon} />
							</label>
						</button>
						<button className={styles.addButton}>
							<External className={styles.icon} />
						</button>
						<button className={styles.addButton}>
							<Video className={styles.icon} />
						</button>
					</div>
				)}
				<ReactQuill
					className={styles.textArea}
					theme='bubble'
					value={value}
					onChange={setValue}
					placeholder='Tell your story...'
				/>
			</div>
			<button
				className={styles.publish}
				onClick={handleSubmit}
			>
				Publish
			</button>
		</div>
	);
};

export default WritePage;
