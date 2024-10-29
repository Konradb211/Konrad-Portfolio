"use client"
import Link from "next/link"
import { useState } from "react"
import { navLinks } from "@/constants"

const Nav = () => {
	const [burger, setBurger] = useState(false)

	const handleBurgerMenu = () => {
		setBurger(!burger)
	}

	return (
		<nav className='fixed w-full bg-black py-5 shadow-xl shadow-black/10 z-10'>
			{/* Desktop nav */}
			<div className='hidden md:flex justify-between max-width px-4'>
				<div>
					<Link href='/' className='text-xl font-bold uppercase text-redTheme'>
						Konrad
					</Link>
				</div>
				<div className='flex gap-6'>
					{navLinks.map(link => (
						<Link
							key={link.href}
							href={link.href}
							className='font-bold uppercase text-xl text-white hover:text-redTheme transition-colors'>
							{link.title}
						</Link>
					))}
				</div>
			</div>

			{/* Mobile nav */}
			<div className='flex md:hidden justify-between px-4'>
				<div>
					<Link href='/' className='text-xl font-bold uppercase text-redTheme'>
						Konrad
					</Link>
				</div>
				<div>
					<button
						type='button'
						onClick={handleBurgerMenu}
						className='text-xl font-bold uppercase text-white'>
						Menu
					</button>
					{burger && (
						<div className='absolute left-0 right-0 mt-2 flex-col flex bg-black shadow-xl shadow-black/20'>
							{navLinks.map(link => (
								<Link
									key={link.href}
									href={link.href}
									className='p-4 font-bold uppercase text-xl text-white'>
									{link.title}
								</Link>
							))}
						</div>
					)}
				</div>
			</div>
		</nav>
	)
}

export default Nav
