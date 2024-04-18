import navLinks from '../../data/nav-links'

import CloseBtn from '../CloseBtn'

export default function SideBar({className, closeSideBar}) {
	return (
		<section 
			className={`
				md:hidden fixed top-0 left-0 w-full h-full
				${className}
			`}
		>
			{/*Side-bar backdrop*/}
			<div 
				className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25"
				onClick={closeSideBar}
			></div>

			{/*Sidebar*/}
			<div className="bg-dark-blue shadow-lg relative h-full w-2/3 px-4 py-6 z-10">
				<CloseBtn 
					className="mb-6" 
					handleClick={closeSideBar}
				/>
				<nav className="flex flex-col gap-6">
					{navLinks.map((link, ndx) => (
						<a 
							key={ndx} 
							href={link.href}
							className='text-light-gray text-sm'
						>
							<span className="text-light-blue px-1">
								0{ndx + 1}.
							</span>
							{link.name}
						</a>
					))}
				</nav>
			</div>
		</section>
	)
}

