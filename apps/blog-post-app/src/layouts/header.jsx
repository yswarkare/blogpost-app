import { useEffect, useState } from 'react';
import { Link, useMatches } from 'react-router-dom';

const headerItems = [
	{
		label: 'Home',
		url: '/',
	},
	{
		label: 'About App',
		url: '/about',
	},
];

const Header = () => {
	const matches = useMatches();
	const location = matches[1];
	const [selected, setSelected] = useState();

	useEffect(() => {
		console.log({ location, matches });
		if (location?.pathname) {
			setSelected(location.pathname);
		}
	}, [location.pathname]);

	return (
		<div className='w-full p-2 flex flex-row gap-2 justify-around'>
			{headerItems.map((item) => (
				<div
					className={`w-full p-2 flex justify-center hover:animate-pulse text-2xl rounded-md ${
						selected === item.url ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'
					}`}
					key={item.label}
				>
					<Link to={item.url} className='w-full text-center'>
						{item.label}
					</Link>
				</div>
			))}
		</div>
	);
};

export default Header;
