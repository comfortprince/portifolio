import H1 from '../../components/H1'

export default function Contact({className, id}) {
	const sendEmail = () => {
		let mail = document.createElement('a')
		mail.href = "mailto:comfort.prince.hluyo@gmail.com"
		mail.click()
	}

	return (
		<section id={id} className={`${className} pb-8`}>
			<H1 index={'04'} title={'Contact'} className="md:w-1/2"/>
			<p className="text-sm">
				Send me an&nbsp; 
				<span 
					className="text-light-blue cursor-pointer"
					onClick={sendEmail}
				> 
					email 
				</span>
			</p>
		</section>
	)
}