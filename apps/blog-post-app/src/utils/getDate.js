export const getDate = (dateString) => {
	const date = new Date(dateString);
	console.log(date);
	return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
};
