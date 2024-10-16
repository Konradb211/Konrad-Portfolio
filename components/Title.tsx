interface Props {
	children: React.ReactNode
}

const Title = ({ children }: Props) => {
	return (
		<h2 className='text-xl md:text-5xl md:pb-5 py-5 font-bold text-white max-width'>
			{children}
		</h2>
	)
}

export default Title
