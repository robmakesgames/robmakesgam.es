import Image from 'next/image';
const Hero = ({}) => {
	return (
		<section className="px-2 py-4 md:py-8 sm:px-4 lg:py-8 font-body">
			<div className="flex flex-col items-center mb-2">
				<div className="w-32 h-32 p-1 mb-2">
					<Image
						className="object-cover rounded-full"
						src={'/static/images/icon.jpg'}
						alt="Hero image"
						width="350px"
						height="350px"
						priority
					/>
				</div>
				<div className="mx-auto mb-2 prose text-center prose-headings:m-0">
					<h1 className="text-3xl font-bold md:text-4xl xl:text-5xl">Rob Barton</h1>
					<h5 className="text-base md:text-lg xl:text-xl">independent game developer, norwich uk</h5>
				</div>
			</div>
		</section>
	);
};

export default Hero;
