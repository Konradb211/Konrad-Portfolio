export interface Links {
	href: string
	title?: string
}

export interface Images {
	src: string
	alt: string
}
export interface ProjectsImages {
	src: string
	alt: string
	title: string
}

export const navLinks: Links[] = [
	{ href: "/", title: "Home" },
	{ href: "/experience", title: "Experience" },
	{ href: "/projects", title: "Projects" },
	{ href: "/contact", title: "Contact" },
]

export const profileLinks: Links[] = [
	{ href: "https://www.linkedin.com/in/konrad-ba%C5%9B-34a223262/" },
	{ href: "https://github.com/Konradb211" },
	{ href: "/CV_Konrad_Baś.pdf" },
]
export const profileImages: Images[] = [
	{ src: "/linkedin.svg", alt: "linkedin icon" },
	{ src: "/github.svg", alt: "github icon" },
	{ src: "/cv.svg", alt: "cv icon" },
]

export const skillsItems: Images[] = [
	{ src: "/html.png", alt: "html icon" },
	{ src: "/css-3.png", alt: "css icon" },
	{ src: "/js.png", alt: "js icon" },
	{ src: "/typescript.png", alt: "ts icon" },
	{ src: "/React.png", alt: "react icon" },
	{ src: "/Next.js.png", alt: "next icon" },
	{ src: "/Tailwind.png", alt: "tailwind icon" },
	{ src: "/Sass.png", alt: "Scss icon" },
]
export const ProjectsImages: ProjectsImages[] = [
	{
		src: "/DK.png",
		alt: "Dk website",
		title: "Business Website",
	},
	{
		src: "/ogrody.png",
		alt: "ogrody website",
		title: "Garden Website",
	},
	{
		src: "/piszlu.png",
		alt: "piszlu website",
		title: "Car Detailing Website",
	},
	{
		src: "/portfolio.png",
		alt: "portfolio website",
		title: "Portfolio Website",
	},
	{
		src: "/memory.png",
		alt: "memory game",
		title: "Memory game",
	},
]
