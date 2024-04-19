import { professionalPhoto } from '../../data/Constants'
import techImWorkingOn from '../../data/current-technologies'

import H1 from '../../components/H1'
import RightArrow from '../../components/RightArrow'

export default function About({className}) {
	return (
		<section className={`${className}`}>
			<H1 
				index={'01'} 
				title={'About Me'}
				className="md:w-1/2"
			/>
			<div className="flex max-md:flex-col-reverse justify-between">
				<div className="md:w-1/2 text-sm">
					<p>
						Hello! My name is Comfort and I enjoy creating computer programs. 
						My interest in computers started back in the late 2000s when I used to play video games 
						on my father's desktop. That experience made me curious about how computers work. 
						I used to wonder why does pressing a key on a keyboard lead to changes on the screen? 
						It all seemed like magic.
					</p>
					<p className="mt-3">
						Fast-forward to today, I've learned a lot about microprocessors, assembly, data structures, algorithms, the web e.t.c. I've also had the privilege of working at a start-up and some great projects .
					</p>
					<p className="mt-3">
						Here are a few technologies I've been working with recently:
					</p>
					<div className="flex gap-12 md:gap-32 mt-3">
						<ul>
							{techImWorkingOn.slice(0, 3).map((technology) => (
								<li key={technology} className="flex items-center">
									<RightArrow/>
									{technology}
								</li>
							))}
						</ul>
						<ul>
							{techImWorkingOn.slice(3).map((technology) => (
								<li key={technology} className="flex items-center">
									<RightArrow/>
									{technology}
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="md:w-1/2 max-md:mb-8 max-md:flex justify-center">
					<div className="w-80 h-96 md:w-60 md:h-72 relative md:ml-16">
						<img alt="Comfort Hluyo" className="w-full h-full object-cover rounded-lg absolute z-10" src={professionalPhoto}/>
						<div className="border-2 border-light-blue w-full h-full absolute top-4 left-4 rounded-lg"></div>
					</div>
				</div>
			</div>
		</section>
	)
}