import React, { Suspense, useEffect } from 'react';
import { useAppContext } from '../hooks/useContext';
import { Outlet } from 'react-router-dom';
import Paginator from '../components/Paginator';
import PageLoader from '../components/loaders/PageLoader';

const Home = () => {
	const { numberOfPages } = useAppContext();

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
