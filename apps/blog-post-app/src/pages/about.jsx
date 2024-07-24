import React from 'react';
import useApiFunction from '../hooks/useApiFunction';
import ErrorPage from '../components/errors/error-page';
import { searchNews } from '../utils/gnews.io';
import DotsMove from '../components/loaders/DotsMove';

const About = () => {
	const [response, loading, error] = useApiFunction(searchNews);

	return (
		<div>
			<div>about page</div>
			<div className='text-blue-600'>
			{loading && <DotsMove size='3rem' />}
			</div>
			{error && <ErrorPage />}
		</div>
	);
};

export default About;
