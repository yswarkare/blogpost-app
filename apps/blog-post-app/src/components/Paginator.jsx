import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonUi from './buttonUi';
import { useAppContext } from '../hooks/useContext';

const Paginator = () => {
	const navigate = useNavigate();
	const [pageNumbers, setPageNumbers] = useState([]);
	const { currentPage, numberOfPages } = useAppContext();

	useEffect(() => {
		const nums = [];
		let [start, end] = [1, numberOfPages];
		if (numberOfPages > 7) {
			if (currentPage > 4) {
				if (numberOfPages - currentPage < 3) {
					start = currentPage - (7 - (numberOfPages - currentPage + 1));
				} else start = currentPage - 3;
			}
			if (numberOfPages - currentPage > 3) {
				end = currentPage + 3;
			}
		}

		for (let i = start; i <= end; i++) {
			nums.push(i);
		}
		setPageNumbers(nums);
	}, [currentPage]);

	return (
		<div className='w-full flex flex-row justify-around gap-4'>
			<div disabled={currentPage <= 1}>
				<ButtonUi onClick={() => navigate(`/${currentPage - 1}`)} disabled={currentPage <= 1}>
					Prev
				</ButtonUi>
			</div>
			<div className='w-full flex flex-row justify-around'>
				{numberOfPages > 7 && currentPage > 4 ? <div className='text-2xl'>...</div> : ''}
				{pageNumbers.map((num) => (
					<ButtonUi selected={num === currentPage} onClick={() => navigate(`/${num}`)} disabled={currentPage === num} key={num}>
						{num}
					</ButtonUi>
				))}
				{numberOfPages > 7 && numberOfPages - currentPage > 3 ? <div className='text-2xl'>...</div> : ''}
			</div>
			<div disabled={currentPage >= numberOfPages}>
				<ButtonUi onClick={() => navigate(`/${currentPage + 1}`)} disabled={currentPage >= numberOfPages}>
					Next
				</ButtonUi>
			</div>
		</div>
	);
};

export default Paginator;
