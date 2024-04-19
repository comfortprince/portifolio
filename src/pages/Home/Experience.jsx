import experiences from '../../data/experiences'

import H1 from '../../components/H1'
import RightArrow from '../../components/RightArrow'

export default function Experience({className}) {
	return (
		<section className={`${className}`}>
			<H1 index={'02'} title={'Experience'} className="md:w-1/2"/>
			<div className="text-sm grid md:grid-cols-2 gap-4">
				{experiences.map(experience => (
					<ExperienceCard experience={experience}/>
				))}
			</div>
		</section>
	)
}

function ExperienceCard ({experience}) {
	const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

	const startDate = new Date(Date.parse(experience.startDate));
	const endDate = new Date(Date.parse(experience.endDate));

	const startMonth = months[startDate.getMonth()]
	const startYear = startDate.getFullYear()

	const endMonth = months[endDate.getMonth()]
	const endYear = endDate.getFullYear()

	return (
		<article 
			key={experience.id}
			className="p-4 shadow-xl border border-light-gray border-opacity-20 rounded-lg"
		>
			<div className="text-xs text-light-blue">
				{startMonth + ' ' + startYear + ' - ' + endMonth + ' ' + endYear}
			</div>
			<h2 className="text-2xl font-medium mt-1 mb-3 text-cream">
				{experience.jobDesc}
			</h2>
			<div className="text-lg mb-3 font-medium">
				{experience.company}
			</div>
			<ul className="grid gap-1">
				{experience.duties.map(duty => (
					<li key={duty} className="flex items-center">
						<RightArrow/>
						{duty}
					</li>
				))}
			</ul>
		</article>
	)
}