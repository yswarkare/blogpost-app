class Paginator {
	constructor(start = 0, itemsPerPage = 5, pageNumber = 1, totalItems = 0) {
		this.start = start;
		this.itemsPerPage = itemsPerPage;
		this.pageNumber = pageNumber;
		this.numberOfPages = Math.ceil(totalItems / this.itemsPerPage);
	}

	prev(usersList) {
		if (this.pageNumber > 1) {
			const items = usersList.slice(this.start, this.start + this.itemsPerPage);
			this.start -= this.itemsPerPage;
			this.pageNumber--;
			return items;
		} else {
			return this.goToPage(usersList, this.pageNumber);
		}
	}

	next(usersList) {
		const items = usersList.slice(this.start, this.start + this.itemsPerPage);
		this.start += this.itemsPerPage;
		this.pageNumber++;
		return items;
	}

	goToPage(usersList, pageNumber) {
		let page = pageNumber || this.pageNumber;
		let startIndex = (page - 1) * this.itemsPerPage;
		const items = usersList.slice(startIndex, startIndex + this.itemsPerPage);
		if (pageNumber > this.pageNumber) {
			this.start += this.itemsPerPage;
		} else if (pageNumber < this.pageNumber) {
			this.start -= this.itemsPerPage;
		}
		this.pageNumber = page;
		return items;
	}

	setNumberOfPages(totalItems) {
		this.numberOfPages = Math.ceil(totalItems / this.itemsPerPage);
	}
}

export default Paginator;

// const paginator = new Paginator(0, 10);

// paginator.goToPage(usersList, 3);

// paginator.next(usersList);
// paginator.next(usersList);
// paginator.next(usersList);
// paginator.next(usersList);
// paginator.next(usersList);
