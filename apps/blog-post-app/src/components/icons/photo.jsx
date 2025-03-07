import React from 'react';

const PhotoIcon = ({ size }) => {
	return (
		<svg width={size || '1rem'} height={size || '1rem'} viewBox='0 0 18 18' version='1.1'>
			<g id='Icons' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
				<g id='Rounded' transform='translate(-205.000000, -2947.000000)'>
					<g id='Image' transform='translate(100.000000, 2626.000000)'>
						<g id='-Round-/-Image-/-photo' transform='translate(102.000000, 318.000000)'>
							<g>
								<polygon id='Path' points='0 0 24 0 24 24 0 24'></polygon>
								<path
									d='M21,19 L21,5 C21,3.9 20.1,3 19,3 L5,3 C3.9,3 3,3.9 3,5 L3,19 C3,20.1 3.9,21 5,21 L19,21 C20.1,21 21,20.1 21,19 Z M8.9,13.98 L11,16.51 L14.1,12.52 C14.3,12.26 14.7,12.26 14.9,12.53 L18.41,17.21 C18.66,17.54 18.42,18.01 18.01,18.01 L6.02,18.01 C5.6,18.01 5.37,17.53 5.63,17.2 L8.12,14 C8.31,13.74 8.69,13.73 8.9,13.98 Z'
									id='🔹-Icon-Color'
									fill='currentColor'
								></path>
							</g>
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
};

export default PhotoIcon;
