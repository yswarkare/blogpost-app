import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { actionTypes, useAppContext, useUpdateContext } from '../hooks/useContext';
import { getDate } from '../utils/getDate';

class post {
	constructor() {
		this.source = { id: '', name: '' };
		this.author = '';
		this.title = '';
		this.description = '';
		this.url = '';
		this.urlToImage = '';
		this.publishedAt = '';
		this.content = '';
	}
}

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
				<Link to={params?.pageNumber ? `/${params.pageNumber}` : '/'}>{'back'}</Link>
			</div>
			<div className='text-3xl'>{article.title || ''}</div>
			<div className='w-full flex flex-row justify-between'>
				<div>Published at : {getDate(article.publishedAt)}</div>
				<div>Source : {article.author}</div>
			</div>
			<div className='text-xl'>{article.description}</div>
			<div>
				<a href={article.url}>
					<img src={article.urlToImage} alt={article.publishedAt}></img>
				</a>
			</div>
			<div className=''>{article.content}</div>
		</div>
	);
};

export default Article;
