const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.REACT_APP_NEWS_API_KEY);

//* To query top headlines
//* All options passed to topHeadlines are optional, but you need to include at least one of them

export const getTopHeadlines = () => {
	return newsapi.v2.topHeadlines({
		q: 'trump',
		category: 'politics',
		language: 'en',
		country: 'us',
	});
};

//* To query everything
//* You must include at least one q, source, or domain

export const getEverything = () => {
	return newsapi.v2.everything({
		q: 'trump',
		sources: 'bbc-news,the-verge',
		domains: 'bbc.co.uk,techcrunch.com',
		from: '2017-12-01',
		to: '2017-12-12',
		language: 'en',
		sortBy: 'relevancy',
		page: 2,
	});
};

//*) To query sources
//* All options are optional

export const getSources = () => {
	return newsapi.v2.sources({
		category: 'technology',
		language: 'en',
		country: 'us',
	});
};
