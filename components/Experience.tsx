const Experience = () => {
	return (
		<div className='relative md:text-xl ml-28 max-width'>
			<div className='absolute top-0 left-0 w-[2px] ml-2 md:ml-0 h-full bg-white' />
			<div className='flex divide-x-2 px-2 '>
				<h2 className='px-2 text-redTheme font-bold'>Software-Developer</h2>
				<p className='px-2'>IntelliApp</p>
				<p className='px-2'>Remote</p>
			</div>
			<div className='px-4 pt-2'>
				<p className='max-w-[700px]'>
					Create, develop and maintain code according to project requirements.
					Testing applications, debugging and resolving technical issues.
					Collaborate in identifying and fixing code bugs. Working with
					technologies: ReactJS, React Native, Tailwind CSS, Git.
				</p>
				<p>For employer contact, please private message me.</p>
			</div>
			<div className='flex divide-x-2 px-2 mt-8 '>
				<h2 className='px-2 text-redTheme font-bold'>Freelancer</h2>
				<p className='px-2'>Remote</p>
			</div>
			<div className='px-4 pt-2'>
				<p className='max-w-[700px]'>
					Design and development of modern, responsive websites customized
					websites. Optimization of pages for SEO and loading speed, ensuring
					the highest quality performance. Creating user-friendly interfaces and
					feature implementation using technologies such as HTML, CSS, Tailwind,
					TypeScript, React, NextJs, WordPress and PHP. Testing, debugging and
					maintaining sites to ensure performance and reliability.
				</p>
				<p>For employer contact, please private message me.</p>
			</div>
		</div>
	)
}

export default Experience
