import { AboutMe, Header, Title } from "@/components"
import React from "react"

const Page = () => {
	return (
		<>
			<header>
				<Header />
			</header>
			<main>
				<Title>Experience</Title>
				<AboutMe />
			</main>
		</>
	)
}

export default Page
