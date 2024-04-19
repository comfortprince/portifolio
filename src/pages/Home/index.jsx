import { useState } from 'react'

import { resumeLink } from '../../data/Constants'
import navLinks from '../../data/nav-links'

import HarmburgerBtn from '../../components/HarmburgerBtn'
import SideBar from '../../components/SideBar'

import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'

export default function Home() {
	const [isSideBarOpen, setIsSideBarOpen] = useState(false)

	return (
		<>
			<header 
				className="
					px-4 py-6 
					bg-dark-blue shadow-lg sticky top-0 z-20
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
			<main className="relative text-light-gray">
				<About className="px-8 md:px-20 lg:px-44" />
				<Projects className="px-8 md:px-20 lg:px-44" />
				<Experience className="px-8 md:px-20 lg:px-44" />
				<Contact className="px-8 md:px-20 lg:px-44" />

				{/*Workin Banner*/}
				{/*<div className="fixed top-0 left-0 w-full h-full">
					<div 
						className="
							py-24 bg-red-600 text-3xl text-white grid place-items-center relative top-1/2
							-translate-y-1/2 opacity-25 z-50
						"
					>
						Working
					</div>
				</div>*/}
			</main>
		</>
	)
}