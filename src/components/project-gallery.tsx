/**
 * project-gallery.js
 * Rob Barton
 *
 * Image gallery to display my projects
 */

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Collapsible from 'react-collapsible';

import { BiDownArrowAlt } from 'react-icons/bi';
import { projectFrontmatterInterface, projectInterface } from '../common/types';

/**
 *
 * @param param0
 * @returns
 */
const ProjectShowcase = ({ projects }) => {
	const games = projects.filter(item => item.frontmatter.category == 'game');
	const prototypes = projects.filter(item => item.frontmatter.category == 'prototype');
	const art = projects.filter(item => item.frontmatter.category == 'art');
	const misc = projects.filter(item => item.frontmatter.category == 'misc');

	return (
		<>
			<ProjectShowcaseSection projects={games} title="games" />
			<ProjectShowcaseSection projects={prototypes} title="prototypes" />
			<ProjectShowcaseSection projects={art} title="art" />
			<ProjectShowcaseSection projects={misc} title="misc" />
		</>
	);
};

/**
 *
 * @param param0
 * @returns
 */
const ProjectShowcaseSection = ({ projects, title }) => {
	const [show, setShow] = useState(false);
	const handleClick = () => {
		setShow(s => !s);
	};
	return (
		<section className="px-2 py-4 text-2xl md:text-3xl sm:px-4 font-body">
			<Collapsible
				className="pb-4"
				trigger={
					<p onClick={handleClick} className="flex flex-col justify-center font-bold items-center text-center">
						{title}
						{show ? (
							<BiDownArrowAlt className="text-center" style={{ transform: 'rotate(180deg)' }} />
						) : (
							<BiDownArrowAlt />
						)}
					</p>
				}>
				<div className="grid grid-cols-1 md:grid-cols-3">
					{projects.map((item: projectInterface, index: number) => {
						const projectFrontmatter: projectFrontmatterInterface = item.frontmatter;
						return (
							<div key={index} className="p-4 lg:p-8">
								<Link href={`project/${item.slug}`}>
									<Image
										src={`/static/${projectFrontmatter.socialImage}`}
										width="650"
										height="400"
										alt={projectFrontmatter.title}
									/>
								</Link>
								<div className="prose-sm md:prose text-center">
									<h3 className=" mt-0 mb-0">{projectFrontmatter.title}</h3>
									<p>this is a one line description.</p>
								</div>
							</div>
						);
					})}
				</div>
			</Collapsible>
		</section>
	);
};

export default ProjectShowcase;
