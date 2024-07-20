import React, { Suspense } from 'react';
import { useAppContext } from '../hooks/useContext';
import { Outlet } from 'react-router-dom';
import Paginator from '../components/Paginator';
import PageLoader from '../components/loaders/PageLoader';
// import useApiCall from '../hooks/useApiCall';
// import { topHeadlinesUrl } from '../utils/axios-api';

const Home = () => {
	const { numberOfPages } = useAppContext();
	// const [response, loading, error] = useApiCall({ url: topHeadlinesUrl });

	return (
		<div className='w-full flex flex-col items-center'>
			<div className='w-full flex flex-col items-start elevation-demo-container'>
				<Suspense fallback={<PageLoader />}>
					<Outlet />
				</Suspense>
			</div>
			<Paginator numberOfPages={numberOfPages} />
		</div>
	);
};

export default Home;
