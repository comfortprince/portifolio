import experiences from '../../data/experiences'

import H1 from '../../components/H1'
import UnorderedList from '../../components/UnorderedList'

import ExperienceCard from './ExperienceCard'

export default function Experience({className, id}) {
	const sectionIndex = '03'

	return (
		<section id={id} className={`${className}`}>
			<H1 index={sectionIndex} title={'Experience'} className="md:w-1/2"/>
			<div className="text-sm grid md:grid-cols-2 gap-4">
				{experiences.map((experience, ndx) => (
					<ExperienceCard key={ndx} experience={experience}/>
				))}
			</div>
			<article>
				<h2 className="text-2xl font-medium my-4 mb-3 text-cream">
					<span className="text-light-blue mr-1 text-xl font-normal">
						{sectionIndex}.1
					</span> 
					Education
				</h2>
				<div className="p-4 shadow-xl border border-light-gray border-opacity-20 rounded-lg">
					<p className="text-xs text-light-blue">
						Aug 2018 - Nov 2023
					</p>
					<p className="text-lg font-medium mt-1 mb-3 text-cream">
						Bachelors of Engineering Honors Degree in Electronic Engineering
					</p>
					<div className=" mb-3 font-medium">
						National University of Science and Technology
					</div>
				</div>
			</article>
			<div>
				<h2 className="text-2xl font-medium my-4 mb-3 text-cream">
					<span className="text-light-blue mr-1 text-xl font-normal">
						{sectionIndex}.2
					</span>
					Technologies
				</h2>
				<div className="md:flex">
					<UnorderedList className="md:w-1/2" items={['React', 'Tailwind', 'JS', 'PHP']}/>
					<UnorderedList className="md:w-1/2" items={['HTML/CSS', 'MySQL', 'Laravel']}/>
				</div>
			</div>
		</section>
	)
}