import axios from 'axios';

export const createAxios = (baseURL, apiKey) => {
	return axios.create({
		baseURL: baseURL,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
			Authorization: apiKey,
			'User-Agent': navigator.userAgent,
		},
	})
}