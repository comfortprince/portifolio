import { professionalPhoto } from '../../data/Constants'

import H1 from '../../components/H1'

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
					<ul className="mt-3">
						<li></li>
					</ul>
				</div>
				<div className="md:w-1/2 max-md:mb-8 max-md:flex justify-center">
					<div className="w-80 h-96 md:w-60 md:h-72 relative md:ml-16">
						<img className="w-full h-full object-cover rounded-lg absolute z-10" src={professionalPhoto}/>
						<div className="border-2 border-light-blue w-full h-full absolute top-4 left-4 rounded-lg"></div>
					</div>
				</div>
			</div>
		</section>
	)
}