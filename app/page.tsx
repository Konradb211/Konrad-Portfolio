import { Experience, Header, Projects, Title } from "@/components"
import React from "react"

const Page = () => {
	return (
		<>
			<header>
				<Header />
			</header>
			<main>
				<Title>Experience</Title>
				<Experience />
				<Title>Projects</Title>
				<Projects />
			</main>
		</>
	)
}

export default Page
