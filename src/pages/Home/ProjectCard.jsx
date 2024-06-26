import { useState } from 'react'

export default function ProjectCard ({project}) {
	return (
		<article 
			className="p-4 shadow-xl border border-light-gray border-opacity-20 rounded-lg"
		>
			<h2 className="text-lg font-medium mt-1 mb-3 text-cream">
				{project.title}
			</h2>
			<Description description={project.description}/>
			<div className="flex justify-between">
				<a 
					className="border border-[#24292e] text-[#24292e] rounded px-3 py-1" 
					href={project.githubUrl}
				>
					Github
				</a>
				<a 
					className="border border-[red] text-[red] rounded px-3 py-1" 
					href={project.liveSiteUrl}
				>
					Live Site
				</a>
			</div>
		</article>
	)
}

function Description({description}) {
	const [isExpanded, setIsExpanded] = useState(false)

	return (
		<div className="mb-7 relative">
			<p className={`
				overflow-hidden
				${isExpanded ? '' : 'h-16'}
			`}
			>
				{description}
			</p>
			<div className="flex justify-start items-end absolute -bottom-4 left-0">
				<span 
					className={`
						text-xs tracking-tighter mr-1 
						${isExpanded ? 'hidden' : ''}
					`}
				>
					...
				</span>
				<button className="text-light-blue" onClick={() => { setIsExpanded(!isExpanded) }}>
					{isExpanded ? 'Less' : 'More'}
				</button>
			</div>
		</div>
	)
}