export default function H1({index, title}) {
	return (
		<h1 className="text-4xl font-bold my-8 flex items-center w-1/2">
			<div>
				<span className="text-light-blue mr-2 text-2xl font-normal">
					{index}.
				</span>
				<span className="text-3xl font-bold text-cream">
					{title}
				</span>
			</div>
			<div 
				className="
					border-b border-light-gray border-opacity-30 flex-grow mx-4 relative -bottom-1
				"
			></div>
		</h1>
	)
}