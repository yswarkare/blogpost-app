import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://newsapi.org',
	headers: {
		'Content-Type': 'application/json',
		Authorization: process.env.REACT_APP_NEWS_API_KEY,
		'User-Agent': navigator.userAgent,
	},
});

export const topHeadlinesUrl = `/v2/top-headlines?country=us`;

export const everythingUrl =
	'https://newsapi.org/v2/everything?' +
	'q=Apple&' +
	'from=2024-07-20&' +
	'sortBy=popularity&' +
	'apiKey=ffc52589c19e49a383db7cfe3ffa6e20';

export const getTopHeadlines = async () => {
	return await api.get(topHeadlinesUrl);
};
