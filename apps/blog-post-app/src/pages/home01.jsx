import React, { useEffect, useRef, useState } from 'react';
import DotsMove from '../components/loaders/DotsMove';
import ErrorPage from '../components/errors/error-page';
import { topHeadlinesUrl } from '../utils/axios-api';
import blogPosts from '../utils/data';
import PostSummary from '../components/PostSummary';
import useApiCall from '../hooks/useApiCall';
import Paginator from '../utils/Paginator.class';
import ButtonUi from '../components/buttonUi';

const Home = () => {
	const [response, loading, error] = ['', '', ''];
	// useApiCall({ url: topHeadlinesUrl });
	const allPosts = useRef(blogPosts.articles);
	const paginator = useRef(new Paginator(0, 5, 1, blogPosts.articles.length));
	const [pageContent, setPageContent] = useState(paginator.current.next(allPosts.current));

	useEffect(() => {
		// paginator.current.setNumberOfPages(allPosts.current.length);
		// const content = paginator.current.next(allPosts.current);
		console.log(paginator.current);
		// setPageContent(content);
	}, []);

	const goToPrevPage = () => {
		const content = paginator.current.prev(allPosts.current);
		console.log(paginator.current);
		setPageContent(content);
	};
	const goToNextPage = () => {
		const content = paginator.current.next(allPosts.current);
		console.log(paginator.current);
		setPageContent(content);
	};

	return (
		<div className='w-full flex flex-col items-center'>
			Home page
			{loading && (
				<div className='w-full flex justify-center text-blue-600'>
					<DotsMove size='4rem' />
				</div>
			)}
			{/* {error && <ErrorPage message={error} />} */}
			<div className='w-full md:w-[90%] lg:w-[75%] flex flex-col items-start elevation-demo-container'>
				{pageContent && pageContent?.map((item) => <PostSummary post={item} key={item.publishedAt} />)}
			</div>
			<div className='flex flex-row gap-4'>
				<ButtonUi
					onClick={() => {
						goToPrevPage();
					}}
					disabled={paginator.current.pageNumber === 1}
				>
					Prev
				</ButtonUi>
				<ButtonUi
					onClick={() => {
						goToNextPage();
					}}
					disabled={paginator.current.pageNumber === paginator.current.numberOfPages}
				>
					Next
				</ButtonUi>
			</div>
		</div>
	);
};

export default Home;
