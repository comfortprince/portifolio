import projects from '../../data/projects'

import H1 from '../../components/H1'
import ProjectCard from './ProjectCard'

export default function Projects({className, id}) {
	return (
		<section id={id} className={`${className}`}>
			<H1 index={'02'} title={'Projects'} className="md:w-1/2"/>
			<div className="text-sm grid md:grid-cols-2 gap-4">
				{projects.map((project, ndx) => (
					<ProjectCard key={ndx} project={project}/>
				))}
			</div>
		</section>
	)
}