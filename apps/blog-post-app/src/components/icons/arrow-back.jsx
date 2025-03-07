import React from 'react';

const ArrowBackIcon = ({ color, size }) => {
	return (
		<svg width={size || '1rem'} height={size || '1rem'} viewBox='0 0 16 16' version='1.1'>
			<title>arrow_back</title>
			<desc>Created with Sketch.</desc>
			<g id='Icons' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
				<g id='Rounded' transform='translate(-580.000000, -3436.000000)'>
					<g id='Navigation' transform='translate(100.000000, 3378.000000)'>
						<g id='-Round-/-Navigation-/-arrow_back' transform='translate(476.000000, 54.000000)'>
							<g transform='translate(0.000000, 0.000000)'>
								<polygon id='Path' points='0 0 24 0 24 24 0 24'></polygon>
								<path
									d='M19,11 L7.83,11 L12.71,6.12 C13.1,5.73 13.1,5.09 12.71,4.7 C12.32,4.31 11.69,4.31 11.3,4.7 L4.71,11.29 C4.32,11.68 4.32,12.31 4.71,12.7 L11.3,19.29 C11.69,19.68 12.32,19.68 12.71,19.29 C13.1,18.9 13.1,18.27 12.71,17.88 L7.83,13 L19,13 C19.55,13 20,12.55 20,12 C20,11.45 19.55,11 19,11 Z'
									id='🔹-Icon-Color'
									fill={color || '#1D1D1D'}
								></path>
							</g>
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
};

export default ArrowBackIcon;
