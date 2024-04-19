import RightArrow from './RightArrow'

export default function UnorderedList({items, className}) {
	return (
		<ul className={`${className} flex flex-col gap-1`}>
			{items.map((item, ndx) => (
				<li key={ndx} className="flex items-center">
					<RightArrow/>
					{item}
				</li>
			))}
		</ul>
	)
}