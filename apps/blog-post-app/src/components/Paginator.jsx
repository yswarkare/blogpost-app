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
		for (let i = 1; i <= numberOfPages; i++) {
			nums.push(i);
		}
		setPageNumbers(nums);
	}, []);

	return (
		<div className='w-full flex flex-row justify-around gap-4'>
			<div disabled={currentPage <= 1}>
				<ButtonUi onClick={() => navigate(`/${currentPage - 1}`)} disabled={currentPage <= 1}>
					Prev
				</ButtonUi>
			</div>
			<div className='w-full flex flex-row justify-around'>
				{pageNumbers.map((num) => (
					<ButtonUi selected={num === currentPage} onClick={() => navigate(`/${num}`)} disabled={currentPage === num} key={num}>
						{num}
					</ButtonUi>
				))}
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
