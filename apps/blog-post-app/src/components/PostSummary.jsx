import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../hooks/useContext';
import photoIcon from '../../src/assets/icons/photo.svg';
import PhotoIcon from './icons/photo';

const PostSummary = ({ post: { title, description, author, publishedAt = new Date(), urlToImage } }) => {
	const { currentPage } = useAppContext();
	return (
		<Link
			to={`/article/${currentPage}/${publishedAt}`}
			className='w-full px-4 py-4 flex flex-row justify-start gap-4 shadow-lg elevation-demo-surface mdc-elevation--z20'
		>
			<div className=''>
				{urlToImage ? (
					<img className='w-48 max-w-48' src={urlToImage} alt={title}></img>
				) : (
					<div className='w-48 max-w-48 rounded-[2rem] text-gray-900'>
						<PhotoIcon size='100%' />
					</div>
				)}
			</div>
			<div className='flex flex-col flex-frow-1'>
				<div className='text-2xl text-wrap text-tea-green'>{title}</div>
				<div className='flex flex-row justify-between text-sm text-grayscale'>
					<div>{author}</div>
					<div>{publishedAt}</div>
				</div>
				<div className='text-lg text-wrap text-faint-green'>{description}</div>
			</div>
		</Link>
	);
};

export default PostSummary;
