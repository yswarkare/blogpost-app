const { lazy } = require('react');

const Default = lazy(() => import('../layouts/default'));
const Home = lazy(() => import('../pages/home'));
const About = lazy(() => import('../pages/about'));
const Article = lazy(() => import('../pages/Article'));
const Posts = lazy(() => import('../pages/posts'));

const routes = [
	{
		path: '/',
		element: <Default />,
		children: [
			{
				path: '/',
				element: <Home />,
				children: [
					{
						path: '/',
						element: <Posts />,
					},
					{
						path: '/:pageNumber',
						element: <Posts />,
					},
				],
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'article/:pageNumber/:publishedAt',
				element: <Article />,
			},
		],
	},
];

export default routes;
