import { useState } from 'react';

const usePaginator = (_start = 0, _itemsPerPage = 5, _pageNumber = 0, totalItems = 0) => {
	const [start, setStart] = useState(_start);
	const [itemsPerPage, setItemsPerPage] = useState(_itemsPerPage);
	const [pageNumber, setPageNumber] = useState(_pageNumber);
	const [numberOfPages, setNumberOfPages] = useState(Math.ceil(totalItems / _itemsPerPage));

	const prev = (usersList) => {
		if (pageNumber >= 1) {
			const items = usersList.slice(start, start + itemsPerPage);
			setStart(start - itemsPerPage);
			setPageNumber(pageNumber - 1);
			return items;
		}
	};

	const next = (usersList) => {
		if (pageNumber <= numberOfPages) {
			const items = usersList.slice(start, start + itemsPerPage);
			if (pageNumber < numberOfPages) {
				setStart(start + itemsPerPage);
			}
			setPageNumber(pageNumber + 1);
			return items;
		}
	};

	const goToPage = (usersList, _pageNumber) => {
		let page = _pageNumber || pageNumber;
		let startIndex = (page - 1) * itemsPerPage;
		const items = usersList.slice(startIndex, startIndex + itemsPerPage);
		if (_pageNumber > pageNumber) {
			setStart(start + itemsPerPage);
		} else if (_pageNumber < pageNumber) {
			setStart(start - itemsPerPage);
		}
		setPageNumber(page);
		return items;
	};

	return { start, itemsPerPage, pageNumber, numberOfPages, next, prev, goToPage, setNumberOfPages, setItemsPerPage };
};

export default usePaginator;
