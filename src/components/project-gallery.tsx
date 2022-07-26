/**
 * project-gallery.js
 * Rob Barton
 *
 * Project showcase section
 */

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Collapsible from 'react-collapsible';
import { BiDownArrowAlt } from 'react-icons/bi';

import { projectFrontmatterInterface, projectInterface } from '../common/types';
import { triggerAsyncId } from 'async_hooks';
import Icon from './icon';

/**
 * Projects section on home page
 * @param projects Array of projects
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
 * Renders a section of projects based on 1 of 4 categories
 * 		- 'game'
 * 		- 'prototype'
 * 		- 'art'
 * 		- 'misc'
 * @param projects array of projects filtered by the category
 * @param title title of the category
 */
export const ProjectShowcaseSection = ({ projects, title }) => {
	const [show, setShow] = useState(false);
	const handleClick = () => {
		setShow(s => !s);
	};
	return (
		<section className="px-2 py-4 text-2xl md:text-3xl sm:px-4 font-body">
			<Collapsible
				className="pb-4"
				trigger={
					<p onClick={handleClick} className="flex flex-col items-center justify-center font-bold text-center">
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
						const projectFrontmatter = item.frontmatter;
						const projectTags = Object.keys(projectFrontmatter.tags).map(key => [projectFrontmatter.tags[key]]);

						return (
							<div key={index} className="p-4 lg:p-8">
								<Link href={`projects/${item.slug}`}>
									<a>
										<Image
											src={`/static/${projectFrontmatter.socialImage}`}
											width="650"
											height="400"
											alt={projectFrontmatter.title}
										/>
									</a>
								</Link>
								<div className="prose-sm text-center lg:prose">
									<h3 className="mt-0 mb-0">{projectFrontmatter.title}</h3>
									<p className="mt-0 mb-0">{projectFrontmatter.description}</p>
									<div>
										{
											<ul className="flex justify-center m-0 ">
												{projectTags.map((tag, index) => (
													<li
														className="inline-flex items-center px-3 py-1 mx-2 my-4 text-xs font-bold border rounded-full leading-sm"
														key={index}>
														{tag}
													</li>
												))}
											</ul>
										}
									</div>
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
