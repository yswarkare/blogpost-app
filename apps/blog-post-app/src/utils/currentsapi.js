import { createAxios } from './axios-api';

const baseUrl = 'https://api.currentsapi.services/v1';

const apiKey = `language=us&apiKey=${process.env.REACT_APP_CURRENTS_API_KEY}`;

export const currentApis = {
	latest: `${baseUrl}/latest-news?${apiKey}`,
	categories: `${baseUrl}/available/categories`,
	regions: `${baseUrl}/available/regions`,
	languages: `${baseUrl}/available/languages`,
	search: `${baseUrl}/search`,
};

const api = createAxios(baseUrl, process.env.REACT_APP_NEWS_API_KEY);

export const getLatestNews = () => {
	return api.get(currentApis.latest);
};
