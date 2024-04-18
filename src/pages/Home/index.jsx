import { useState } from 'react'

import { resumeLink } from '../../data/Constants'
import navLinks from '../../data/nav-links'

import HarmburgerBtn from '../../components/HarmburgerBtn'
import SideBar from '../../components/SideBar'

export default function Home() {
	const [isSideBarOpen, setIsSideBarOpen] = useState(false)

	return (
		<header 
			className="
				px-4 py-6 
				bg-dark-blue shadow-lg relative 
				flex items-center gap-4 justify-between md:justify-end
			"
		>
			<HarmburgerBtn 
				className="md:hidden"
				handleClick={() => {setIsSideBarOpen(true)}}
			/>
			<nav className="flex gap-4 max-sm:hidden">
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
			<a 
				href={resumeLink}
				className="border border-light-blue text-light-blue text-sm px-3 py-1 rounded"
			>
				CV
			</a>

			<SideBar 
				className={`${isSideBarOpen ? '' : 'hidden'}`}
				closeSideBar={() => {setIsSideBarOpen(false)}}
			/>
		</header>
	)
}