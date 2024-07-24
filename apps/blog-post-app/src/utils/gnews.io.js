import { createAxios } from './axios-api';

const baseUrl = `https://gnews.io`;

const api = createAxios(baseUrl, process.env.REACT_APP_GNEWS_API_KEY);

export const searchNews = () => {
	const url = `${baseUrl}/api/v4/search?q=example&lang=en&country=us&max=10&apikey=${process.env.REACT_APP_GNEWS_API_KEY}`;
	return api.get(url);
};
