export default function RightArrow() {
	const LIGHT_BLUE = '#92f9f9'

	return (
		<div>
			{/*<?xml version="1.0" ?>*/}
			<svg 
				className="scale-75"
				fill="none" 
				height="24" 
				stroke={LIGHT_BLUE} 
				strokeLinecap="round" 
				strokeLinejoin="round" 
				strokeWidth="3" 
				viewBox="0 0 24 24" 
				width="24" 
				xmlns="http://www.w3.org/2000/svg"
			>
				<polyline points="9 18 15 12 9 6"/>
			</svg>
		</div>
	)
}