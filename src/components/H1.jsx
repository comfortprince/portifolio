export default function H1({index, title, className}) {
	return (
		<h1 
			className={`
				text-4xl font-bold my-8 flex items-center
				${className}
			`}
		>
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
					border-b border-light-gray border-opacity-30 flex-grow ml-4 md:mx-4 relative -bottom-1
				"
			></div>
		</h1>
	)
}