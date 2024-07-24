import { createAxios } from './axios-api';

const baseUrl = 'https://newsapi.org';

const api = createAxios(baseUrl, process.env.REACT_APP_NEWS_API_KEY)

export const getTopHeadlines = () => {
	return api.get(`${baseUrl}/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
};
