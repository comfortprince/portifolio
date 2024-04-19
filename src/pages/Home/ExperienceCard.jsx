import UnorderedList from '../../components/UnorderedList'

export default function ExperienceCard ({experience}) {
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
			<h2 className="text-lg font-medium mt-1 mb-3 text-cream">
				{experience.jobDesc}
			</h2>
			<div className="mb-3 font-medium">
				{experience.company}
			</div>
			<UnorderedList items={experience.duties}/>
		</article>
	)
}