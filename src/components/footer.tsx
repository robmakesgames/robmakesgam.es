/**
 * footer.tsx
 * Rob Barton
 *
 * Footer component
 */

import Link from 'next/link';
const Footer = () => {
	let date = new Date();
	let year = date.getFullYear();
	return (
		<footer className="px-2 py-4 bg-white border border-gray-100 md:py-8 lg:py-12 xl:py-16 font-body">
			<div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
				<div>
					<ul>
						<li className="flex py-2">
							<Link href="mailto:hello@robmakesgam.es">
								<a className="text-gray-700 bg-transparent">
									<svg
										className="w-6 h-6 fill-current md:w-8 md:h-8"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24">
										<path d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z" />
									</svg>
								</a>
							</Link>
							<p className="ml-4">hello@robmakesgam.es</p>
						</li>
						<li className="flex py-2">
							<Link href={'https://github.com/robmakesgames'}>
								<a aria-label="email" className="text-gray-700 bg-transparent">
									<svg
										className="w-6 h-6 fill-current md:w-8 md:h-8"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24">
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
									</svg>
								</a>
							</Link>
							<p className="ml-4">robmakesgames</p>
						</li>
						<li className="flex py-2">
							<Link href={'https://www.instagram.com/robmakesgam.es'}>
								<a aria-label="instagram" className="text-gray-700 bg-transparent">
									<svg
										className="w-6 h-6 fill-current md:w-8 md:h-8"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24">
										<path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zm0-1.082c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489-.029.641-.036.845-.036 2.474 0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489-.641-.03-.845-.037-2.475-.037zm0 2.919c-1.701 0-3.081 1.379-3.081 3.081s1.38 3.081 3.081 3.081 3.081-1.379 3.081-3.081c0-1.701-1.38-3.081-3.081-3.081zm0 5.081c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2.001.895 2.001 2s-.897 2-2.001 2zm3.202-5.922c-.397 0-.72.322-.72.72 0 .397.322.72.72.72.398 0 .721-.322.721-.72 0-.398-.322-.72-.721-.72z" />
									</svg>
								</a>
							</Link>
							<p className="ml-4">robmakesgam.es</p>
						</li>
						<li className="flex py-2">
							<Link href={'www.linkedin.com/in/robbatr0n'}>
								<a aria-label="linkedin" className="text-gray-700 bg-transparent">
									<svg
										className="w-6 h-6 fill-current md:w-8 md:h-8"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24">
										<path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" />
									</svg>
								</a>
							</Link>
							<p className="ml-4">barton.rob27</p>
						</li>
					</ul>
				</div>
				<div className="mt-12 md:mt-0">
					<p>
						designed and developed by Rob Barton
						<span dangerouslySetInnerHTML={{ __html: '&copy; ' }} />
						{year}
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
