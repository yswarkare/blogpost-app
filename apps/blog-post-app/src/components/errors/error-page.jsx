import React from 'react';

const ErrorPage = ({ message }) => {
	return (
		<div className='w-full p-4 flex flex-col justify-center items-center'>
			<span className='text-red-500 text-xl'>{message || 'Oops! Something went wrong!'}</span>
		</div>
	);
};

export default ErrorPage;
