import { createContext, useContext, useEffect, useReducer } from 'react';
import blogPosts from '../utils/data';

const appContext = createContext('app-context');

export const useAppContext = () => {
	return useContext(appContext);
};

const updateAppContext = createContext('update-app-context');

export const useUpdateContext = () => {
	return useContext(updateAppContext);
};

const initialState = {
	name: 'app-context',
	articles: blogPosts.articles,
	article: {},
	pageContent: [],
	itemsPerPage: 5,
	numberOfPages: Math.ceil(blogPosts.articles.length / 5),
};

const getStoredState = (key, initialState = null) => {
	let storedState = JSON.parse(sessionStorage.getItem(key));
	if (storedState) return storedState;
	if (initialState instanceof Function) return initialState();
	return initialState;
};

export const actionTypes = {
	set_articles: 'set_articles',
	clear_articles: 'clear_article_page',
	set_article_page: 'set_article_page',
	clear_article_page: 'clear_article_page',
	go_to_page: 'go_to_page',
	clear_page_content: 'clear_page_content',
};

const appReducer = (state, { type, payload }) => {
	let updatedState = state;
	switch (type) {
		case actionTypes.set_articles:
			updatedState = { ...updatedState, articles: payload };
			break;

		case actionTypes.clear_articles:
			updatedState = { ...updatedState, articles: [] };
			break;

		case actionTypes.set_article_page:
			const pageArticle = updatedState.pageContent.find((el) => el.publishedAt === payload);
			updatedState = { ...updatedState, article: pageArticle };
			break;

		case actionTypes.clear_article_page:
			updatedState = { ...updatedState, article: {} };
			break;

		case actionTypes.go_to_page:
			const startIndex = (payload - 1) * updatedState.itemsPerPage;
			const pageContent = updatedState.articles.slice(startIndex, startIndex + updatedState.itemsPerPage);
			updatedState = { ...updatedState, pageContent: [...pageContent], currentPage: payload };
			break;

		default:
			break;
	}
	return updatedState;
};

export const AppContextProvider = ({ children }) => {
	const key = 'app-context';
	const [state, dispatch] = useReducer(appReducer, initialState, () => getStoredState(key, initialState));

	useEffect(() => {
		sessionStorage.setItem(key, JSON.stringify(state));
		console.log(state);
	}, [state]);

	return (
		<appContext.Provider value={state}>
			<updateAppContext.Provider value={dispatch}>{children}</updateAppContext.Provider>
		</appContext.Provider>
	);
};
