"use client"
import { profileImages, profileLinks } from "@/constants"
import Image from "next/image"


const Header = () => {
	return (
		<header className='min-h-screen flex items-center justify-center font-space-grotesk mt-[10px] md:mt-0 w-full max-width'>
			<div className='flex md:flex-row flex-col-reverse items-center md:items-start gap-10 px-3'>
				<div className='md:w-[545px] w-full md:mt-20'>
					<h1 className='text-2xl md:text-5xl md:pb-3 pb-2 font-bold text-white'>
						Front-End Developer
					</h1>
					<p className='text-gray-200 md:pb-3 pl-[2px] pb-2 md:w-[500px] w-full md:text-xl'>
						Hi, my name is <span className='text-redTheme'>Konrad Baś</span>. I
						am Front-End Developer 🧑🏻‍💻. I am currently coding in React in which I
						have several projects done.
					</p>
					<div className='text-gray-200 md:pb-3 pb-2 md:text-xl'>
						<p>
							<span className='text-redTheme'>E-mail: </span>
							konradbas1234@gmail.com
						</p>
						<p>
							<span className='text-redTheme'>Phone: </span>788 767 054
						</p>
					</div>

					<div className='flex gap-2'>
						{profileLinks.map((link, index) => (
							<a
								key={link.href}
								href={link.href}
								rel='noopener noreferrer'
								target='_blank'
								{...(index + 1 === 3 ? { download: true } : {})}
							>
								<Image
									src={profileImages[index].src}
									alt={profileImages[index].alt}
									width={25}
									height={25}
									className='size-9'
								/>
							</a>
						))}
					</div>
				</div>
				<div>
					<Image
						src='/myPortrait.jpg'
						height={250}
						width={250}
						alt='Picture of me'
						priority
						className='object-cover rounded-full aspect-square w-72 md:w-96 mt-8 md:mt-0'
					/>
				</div>
			</div>
		</header>
	)
}

export default Header
