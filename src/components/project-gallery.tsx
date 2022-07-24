/**
 * project-gallery.js
 * Rob Barton
 *
 * Image gallery to display my projects
 */

import Collapsible from 'react-collapsible';
import React, { useState } from 'react';
import { BiDownArrowAlt } from 'react-icons/bi';

const ProjectGallery = () => {
	const [show, setShow] = useState(false);
	const handleClick = () => {
		setShow(s => !s);
	};

	return (
		<section className="px-2 py-4 text-xl md:text-2xl lg:text-3xl sm:px-4 font-body">
			<Collapsible
				className="pb-4"
				trigger={
					<p onClick={handleClick} className="flex flex-col justify-center items-center text-center">
						{show ? <BiDownArrowAlt className="text-center" style={{ transform: 'rotate(180deg)' }} /> : <BiDownArrowAlt />}
					</p>
				}></Collapsible>
		</section>
	);
};

export default ProjectGallery;
