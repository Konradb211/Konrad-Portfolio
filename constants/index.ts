export interface Links {
	href: string
	title?: string
}

export interface Images {
	src: string
	alt: string
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
]
export const profileImages: Images[] = [
	{ src: "/linkedin.svg", alt: "linkedin icon" },
	{ src: "/github.svg", alt: "github icon" },
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
