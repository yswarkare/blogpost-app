import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import PageLoader from '../components/loaders/PageLoader';
import { AppContextProvider } from '../hooks/useContext';

const Default = () => {
	return (
		<AppContextProvider>
			<div className='pb-8 flex flex-col justify-start items-center'>
				<Header />
				<main className='w-full md:w-[90%] lg:w-[75%]'>
					<Suspense fallback={<PageLoader />}>
						<Outlet />
					</Suspense>
				</main>
			</div>
		</AppContextProvider>
	);
};

export default Default;
