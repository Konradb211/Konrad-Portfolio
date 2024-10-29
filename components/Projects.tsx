"use client"
import Image from "next/image"
import { ProjectsImages } from "@/constants"
import Link from "next/link";
const Projects = () => {
	return (
		<div className='max-width flex items-center justify-between flex-wrap gap-5c'>
			{ProjectsImages.map(project => (
				<div key={project.alt}>
					<a target="_blank" rel="noopener norefferer" href="https://syntaxstudio.pl">
					<Image
						src={project.src}
						alt={project.alt}
						width={400}
						height={400}
						className=' cursor-pointer'
					/>
					<h2>{project.title}</h2>
					</a>
				</div>
			))}
		</div>
	)
}

export default Projects
