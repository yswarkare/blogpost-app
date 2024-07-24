import React from 'react';

const ButtonUi = ({ classes, selected, children, ...props }) => {
	return (
		<button
			className={`shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] px-6 py-2 rounded-md text-white font-light transition duration-200 ease-linear ${classes} ${
				selected ? 'bg-green-700 hover:bg-green-800' : 'bg-blue-700 hover:bg-blue-800'
			}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default ButtonUi;
