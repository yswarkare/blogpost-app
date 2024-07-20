import React, { useEffect } from 'react';
import PostSummary from '../components/PostSummary';
import { actionTypes, useAppContext, useUpdateContext } from '../hooks/useContext';
import { useParams } from 'react-router-dom';

const Posts = () => {
	const params = useParams();
	const { pageContent } = useAppContext();
	const updateContext = useUpdateContext();

	useEffect(() => {
		if (params?.pageNumber) {
			updateContext({ type: actionTypes.go_to_page, payload: parseInt(params?.pageNumber) });
		} else {
			updateContext({ type: actionTypes.go_to_page, payload: 1 });
		}
	}, [params?.pageNumber]);

	return (
		<div className='w-full flex flex-col items-start elevation-demo-container'>
			{pageContent &&
				pageContent?.map((item) => <PostSummary post={item} key={item.publishedAt} pageNumber={params?.pageNumber} />)}
		</div>
	);
};

export default Posts;
