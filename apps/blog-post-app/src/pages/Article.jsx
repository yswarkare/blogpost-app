import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { actionTypes, useAppContext, useUpdateContext } from '../hooks/useContext';
import { getDate } from '../utils/getDate';
import ArrowBackIcon from '../components/icons/arrow-back';

const Article = () => {
	const params = useParams();
	const updateContext = useUpdateContext();
	const { article } = useAppContext();

	useEffect(() => {
		if (params?.publishedAt) {
			updateContext({ type: actionTypes.set_article_page, payload: params.publishedAt });
		}
	}, []);

	return (
		<div className='flex flex-col gap-3 justify-start items-center'>
			<div className='w-full flex flex-row justify-start'>
				<Link to={params?.pageNumber ? `/${params.pageNumber}` : '/'} className='flex flex-row gap-4'>
					<ArrowBackIcon size='1.5rem' color='#2039ee' />
					{'Home'}
				</Link>
			</div>
			<div className='text-3xl'>{article.title || ''}</div>
			<div className='w-full flex flex-row justify-between'>
				<div>Published at : {getDate(article.publishedAt)}</div>
				<div>Source : {article.author}</div>
			</div>
			{article.description && <div className='text-xl'>{article.description}</div>}
			<div>
				{article.urlToImage && (
					<a href={article.url}>
						<img src={article.urlToImage} alt={article.publishedAt}></img>
					</a>
				)}
			</div>
			{article.content && <div className=''>{article.content}</div>}
		</div>
	);
};

export default Article;
